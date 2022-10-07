package vn.codegym.bookstore_api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.codegym.bookstore_api.entity.Book;

import javax.transaction.Transactional;
import java.time.LocalDate;

public interface BookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "select * " +
            "from book " +
            "where `name` like %:keyword% " +
            "or `description` like %:keyword% " +
            "or author like %:keyword% " +
            "or company like %:keyword% " +
            "and is_deleted = 0 " +
            "order by id desc",
            nativeQuery = true)
    Page<Book> findAll(Pageable pageable, @Param("keyword") String keyword);


    @Query(value = "select * " +
            "from book " +
            "where (`name` like %:keyword% " +
            "or `description` like %:keyword% " +
            "or author like %:keyword% " +
            "or company like %:keyword%) " +
            "and category_id = :categoryId " +
            "and is_deleted = 0 " +
            "order by id desc",
            nativeQuery = true)
    Page<Book> findAllByCategory(Pageable pageable, @Param("keyword") String keyword, @Param("categoryId") Integer categoryId);


    @Query(value = "select * " +
            "from book " +
            "where `name` like %:keyword% " +
            "and `description` like %:keyword% " +
            "and author like %:keyword% " +
            "and company like %:keyword% " +
            "and is_deleted = 0 " +
            "order by price",
            nativeQuery = true)
    Page<Book> findAllAndSortByPriceAsc(Pageable pageable, @Param("keyword") String keyword);


    @Query(value = "select * " +
            "from book " +
            "where `name` like %:keyword% " +
            "and `description` like %:keyword% " +
            "and author like %:keyword% " +
            "and company like %:keyword% " +
            "and is_deleted = 0 " +
            "order by price desc",
            nativeQuery = true)
    Page<Book> findAllAndSortByPriceDesc(Pageable pageable, @Param("keyword") String keyword);

    @Transactional
    @Modifying
    @Query(value = "update book " +
            "set `name` = :name, " +
            "`description` = :description, " +
            "image = :image, " +
            "price = :price, " +
            "number_of_page = :numberOfPage, " +
            "quantity = :quantity, " +
            "author = :author, " +
            "`size` = :size, " +
            "`date` = :date, " +
            "category_id = :categoryId, " +
            "company = :company, " +
            "is_deleted = :isDeleted " +
            "where id = :id", nativeQuery = true)
    void update(@Param("name") String name,
                @Param("description") String description,
                @Param("image") String image,
                @Param("price") Double price,
                @Param("numberOfPage") Integer numberOfPage,
                @Param("quantity") Integer quantity,
                @Param("author") String author,
                @Param("size") String size,
                @Param("date") LocalDate date,
                @Param("categoryId") Integer categoryId,
                @Param("company") String company,
                @Param("isDeleted") Boolean isDeleted,
                @Param("id") Integer id);


    @Transactional
    @Modifying
    @Query(value = "update book " +
            "set is_deleted = 1 " +
            "where id =:id", nativeQuery = true)
    void delete(@Param("id") Integer id);
}
