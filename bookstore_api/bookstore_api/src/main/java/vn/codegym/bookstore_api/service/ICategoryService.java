package vn.codegym.bookstore_api.service;

import vn.codegym.bookstore_api.entity.Category;

import java.util.List;
import java.util.Optional;

public interface ICategoryService {
    List<Category> findAll();

    Optional<Category> findById(Integer id);

    void save(Category category);

    void remove(Integer id);
}
