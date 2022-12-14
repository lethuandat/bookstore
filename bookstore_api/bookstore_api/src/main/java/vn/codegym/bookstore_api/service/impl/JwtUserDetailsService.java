package vn.codegym.bookstore_api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import vn.codegym.bookstore_api.entity.AppUser;
import vn.codegym.bookstore_api.entity.UserRole;
import vn.codegym.bookstore_api.repository.UserRepository;
import vn.codegym.bookstore_api.repository.UserRoleRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = userRepository.findAppUserByName(username);

        if (appUser == null) {
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }

        List<UserRole> userRoles = userRoleRepository.findAllByAppUser(appUser);

        List<GrantedAuthority> grantList = new ArrayList<>();

        if (userRoles != null) {
            for (UserRole item: userRoles) {
                GrantedAuthority authority = new SimpleGrantedAuthority(item.getAppRole().getRoleName());
                grantList.add(authority);
            }
        }
        return new User(appUser.getUsername(), appUser.getPassword(), grantList);
    }
}
