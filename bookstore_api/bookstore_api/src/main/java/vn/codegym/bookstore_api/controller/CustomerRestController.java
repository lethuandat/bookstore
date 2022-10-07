package vn.codegym.bookstore_api.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import vn.codegym.bookstore_api.dto.CustomerDto;
import vn.codegym.bookstore_api.dto.UserDto;
import vn.codegym.bookstore_api.entity.AppUser;
import vn.codegym.bookstore_api.entity.Customer;
import vn.codegym.bookstore_api.service.ICustomerService;
import vn.codegym.bookstore_api.service.IUserService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/public/customer")
public class CustomerRestController {
    @Autowired
    ICustomerService customerService;

    @Autowired
    IUserService iUserService;


    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @GetMapping("/list")
    public ResponseEntity<List<Customer>> findAll() {
        List<Customer> customers = customerService.findAll();
        if (customers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Integer id) {
        Optional<Customer> customer = customerService.findById(id);
        if (!customer.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer.orElse(null), HttpStatus.OK);
    }


    @GetMapping("/user-name/{name}")
    public ResponseEntity<AppUser> findByName(@PathVariable String name) {
        AppUser appUser = iUserService.findByName(name);
        if (appUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(appUser, HttpStatus.OK);
    }

    @GetMapping("/user-id/{userId}")
    public ResponseEntity<Customer> findByUserId(@PathVariable Integer userId) {
        Optional<Customer> customer = customerService.findByUserId(userId);
        if (!customer.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer.orElse(null), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<List<FieldError>> create(@RequestBody @Valid CustomerDto customerDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.NOT_ACCEPTABLE);
        }

        UserDto userDto;

        userDto = customerDto.getUserDto();

        AppUser appUser = new AppUser();

        BeanUtils.copyProperties(userDto, appUser);

        appUser.setPassword(passwordEncoder().encode(appUser.getPassword()));

        iUserService.save(appUser);

        Customer customer = new Customer();

        BeanUtils.copyProperties(customerDto, customer);

        this.customerService.save(customer);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Customer> update(@PathVariable Integer id, @Valid @RequestBody CustomerDto customerDto, BindingResult bindingResult) {
        Optional<Customer> currentCustomer = customerService.findById(id);

        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }

        if (!currentCustomer.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        currentCustomer.get().setName(customerDto.getName());
        currentCustomer.get().setIdCard(customerDto.getIdCard());
        currentCustomer.get().setEmail(customerDto.getEmail());
        currentCustomer.get().setBirthDay(customerDto.getBirthDay());
        currentCustomer.get().setPhone(customerDto.getPhone());
        currentCustomer.get().setAddress(customerDto.getPhone());
        currentCustomer.get().setImage(customerDto.getImage());

        customerService.save(currentCustomer.get());

        return new ResponseEntity<>(currentCustomer.get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Customer> delete(@PathVariable Integer id) {
        Optional<Customer> customer = customerService.findById(id);

        if (!customer.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        customerService.remove(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/checkIdCard/{idCard}")
    public ResponseEntity<Object> checkIdCard(@PathVariable("idCard") String idCard) {
        return new ResponseEntity<>(customerService.existsIdCard(idCard), HttpStatus.OK);
    }


    @GetMapping("/checkEmail/{email}")
    public ResponseEntity<Object> checkEmail(@PathVariable("email") String email) {
        return new ResponseEntity<>(customerService.existsEmail(email), HttpStatus.OK);
    }


    @GetMapping("/checkPhone/{phone}")
    public ResponseEntity<Object> checkPhone(@PathVariable("phone") String phone) {
        return new ResponseEntity<>(customerService.existsPhone(phone), HttpStatus.OK);
    }


    @GetMapping("/checkUsername/{username}")
    public ResponseEntity<Object> checkUsername(@PathVariable("username") String username) {
        return new ResponseEntity<>(iUserService.existsUsername(username), HttpStatus.OK);
    }
}
