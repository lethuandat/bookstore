package vn.codegym.bookstore_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.bookstore_api.entity.Category;
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
