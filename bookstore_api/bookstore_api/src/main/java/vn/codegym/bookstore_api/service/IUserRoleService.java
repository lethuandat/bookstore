package vn.codegym.bookstore_api.service;


import vn.codegym.bookstore_api.entity.UserRole;

import java.util.List;

public interface IUserRoleService {
    List<UserRole> findAll();
    void save(UserRole userRole);

    void deleteUserRole(int id);

}
