package vn.codegym.bookstore_api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import vn.codegym.bookstore_api.entity.AppRole;
import vn.codegym.bookstore_api.entity.AppUser;
import vn.codegym.bookstore_api.entity.Customer;
import vn.codegym.bookstore_api.entity.UserRole;
import vn.codegym.bookstore_api.repository.CustomerRepository;
import vn.codegym.bookstore_api.repository.UserRepository;
import vn.codegym.bookstore_api.repository.UserRoleRepository;
import vn.codegym.bookstore_api.service.ICustomerService;

import java.util.List;
import java.util.Optional;

@Repository
public class CustomerService implements ICustomerService {
    @Autowired
    CustomerRepository customerRepository;


    @Autowired
    UserRepository userRepository;


    @Autowired
    UserRoleRepository userRoleRepository;

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> findById(Integer id) {
        return customerRepository.findById(id);
    }

    @Override
    public void save(Customer customer) {
        List<AppUser> appUsers = userRepository.findAll();

        UserRole userRole = new UserRole();

        AppRole appRole = new AppRole();

        appRole.setId(2);

        userRole.setIsDeleted(false);

        userRole.setAppUser(appUsers.get(appUsers.toArray().length - 1));

        userRole.setAppRole(appRole);

        userRoleRepository.save(userRole);

        customer.setAppUser(customer.getAppUser());

        customerRepository.save(customer);
    }

    @Override
    public void update(Customer customer) {
        customerRepository.update(customer.getName(),
                customer.getIdCard(),
                customer.getEmail(),
                customer.getBirthDay(),
                customer.getPhone(),
                customer.getAddress(),
                customer.getImage(),
                customer.getAppUser().getId(),
                customer.getIsDeleted(),
                customer.getId());
    }

    @Override
    public void remove(Integer id) {
        customerRepository.deleteById(id);
    }


    @Override
    public Optional<Customer> findByUserId(Integer userId) {
        return customerRepository.findByUserId(userId);
    }


    @Override
    public Boolean existsIdCard(String idCard) {
        return idCard.equals(customerRepository.existsIdCard(idCard));
    }

    @Override
    public Boolean existsEmail(String email) {
        return email.equals(customerRepository.existsEmail(email));
    }

    @Override
    public Boolean existsPhone(String phone) {
        return phone.equals(customerRepository.existsPhone(phone));
    }
}
