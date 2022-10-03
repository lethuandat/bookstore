package vn.codegym.bookstore_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.bookstore_api.entity.AppRole;

public interface RoleRepository extends JpaRepository<AppRole, Integer> {
}
