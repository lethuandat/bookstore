package vn.codegym.bookstore_api.service;

import org.springframework.data.repository.query.Param;
import vn.codegym.bookstore_api.entity.Customer;

import java.util.List;
import java.util.Optional;

public interface ICustomerService {
    List<Customer> findAll();

    Optional<Customer> findById(Integer id);

    void save(Customer customer);

    void update(Customer customer);

    void remove(Integer id);


    Optional<Customer> findByUserId(Integer userId);

    Boolean existsIdCard(String idCard);


    Boolean existsEmail(String email);


    Boolean existsPhone(String phone);
}
