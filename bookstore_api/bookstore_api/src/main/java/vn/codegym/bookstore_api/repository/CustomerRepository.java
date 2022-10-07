package vn.codegym.bookstore_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.codegym.bookstore_api.entity.Customer;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Transactional
    @Modifying
    @Query(value = "update customer " +
            "set `name` = :name, " +
            "id_card = :idCard, " +
            "email = :email, " +
            "birth_day = :birthDay, " +
            "phone = :phone, " +
            "address = :address, " +
            "image = :image, " +
            "user_id = :userId, " +
            "is_deleted = :isDeleted " +
            "where id = :id", nativeQuery = true)
    void update(@Param("name") String name,
                @Param("idCard") String idCard,
                @Param("email") String email,
                @Param("birthDay") LocalDate birthDay,
                @Param("phone") String phone,
                @Param("address") String address,
                @Param("image") String image,
                @Param("userId") Integer userId,
                @Param("isDeleted") Boolean isDeleted,
                @Param("id") Integer id);

    @Query(value = "select * from customer where user_id = :userId", nativeQuery = true)
    Optional<Customer> findByUserId(@Param("userId") Integer userId);

    @Query(value = "select id_card from customer where id_card = :idCard", nativeQuery = true)
    String existsIdCard(@Param("idCard") String idCard);

    @Query(value = "select email from customer where email = :email", nativeQuery = true)
    String existsEmail(@Param("email") String email);


    @Query(value = "select phone from customer where email = :phone", nativeQuery = true)
    String existsPhone(@Param("phone") String phone);
}
