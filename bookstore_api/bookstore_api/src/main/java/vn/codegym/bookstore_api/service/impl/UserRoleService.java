package vn.codegym.bookstore_api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.bookstore_api.entity.UserRole;
import vn.codegym.bookstore_api.repository.UserRepository;
import vn.codegym.bookstore_api.repository.UserRoleRepository;
import vn.codegym.bookstore_api.service.IUserRoleService;

import java.util.List;

@Service
public class UserRoleService implements IUserRoleService {

    @Autowired
    UserRoleRepository userRoleRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public List<UserRole> findAll() {
        return userRoleRepository.findAll();
    }

    @Override
    public void save(UserRole userRole) {
        userRoleRepository.save(userRole.getAppRole().getId(), userRole.getAppUser().getId());
    }


    @Override
    public void deleteUserRole(int id) {
        userRoleRepository.deleteUserRole(id);
    }
}
