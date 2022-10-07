package vn.codegym.bookstore_api.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.codegym.bookstore_api.entity.Book;

import java.util.Optional;

public interface IBookService {
    Page<Book> findAll(Pageable pageable, String keyword);

    Page<Book> findAllByCategory(Pageable pageable, String keyword, Integer categoryId);

    Optional<Book> findById(Integer id);

    void save(Book book);

    void update(Book book);

    void remove(Integer id);
}
