package vn.codegym.bookstore_api.service;

import vn.codegym.bookstore_api.entity.Payment;

import java.util.List;
import java.util.Optional;

public interface IPaymentService {
    List<Payment> findAll();

    Optional<Payment> findById(Integer id);

    void save(Payment payment);

    void remove(Integer id);
}
