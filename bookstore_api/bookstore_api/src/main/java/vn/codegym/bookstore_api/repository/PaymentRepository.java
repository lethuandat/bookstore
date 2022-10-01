package vn.codegym.bookstore_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.bookstore_api.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
}
