package vn.codegym.bookstore_api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import vn.codegym.bookstore_api.entity.AppUser;
import vn.codegym.bookstore_api.repository.UserRepository;
import vn.codegym.bookstore_api.service.IUserService;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    UserRepository userRepository;


    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public AppUser findByName(String name) {
        return userRepository.findAppUserByName(name);
    }

    @Override
    public String existsByUserName(String username) throws MessagingException, UnsupportedEncodingException {
        String user = userRepository.existsByUserName(username);
        AppUser appUser = userRepository.findAppUserByName(username);
        if (user != null) {
            sendVerificationEmailForResetPassWord(username, username);
        }
        return user;
    }

    @Override
    public void saveNewPassword(String password, String name) {
        userRepository.saveNewPassword(password, name);
    }


    public void sendVerificationEmailForResetPassWord(String userName, String email) throws MessagingException, UnsupportedEncodingException {
        String subject = "Hãy xác thực email của bạn";
        String mailContent = "";
        String confirmUrl = "http://localhost:4200/verify-reset-password/" + userName;


        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
        helper.setFrom("sangnguyenjp97@gmail.com","CODE GYM");
        helper.setTo(email);
        helper.setSubject(subject);
        mailContent = "<p sytle='color:red;'>Xin chào " + userName + " ,<p>" + "<p> Nhấn vào link sau để xác thực email của bạn:</p>" +
                "<h3><a href='" + confirmUrl + "'>Link Xác thực( nhấn vào đây)!</a></h3>" +
                "<p>CODE GYM</p>";
        helper.setText(mailContent, true);
        javaMailSender.send(message);
    }

    /**
     * @return List User (test list)
     * @creator LongNT
     * @day 12/09/2022
     */

    @Override
    public List<AppUser> findAll() {
        return userRepository.findAll();
    }



    @Override
    public void save(AppUser appUser) {
        userRepository.save(appUser.getUsername(), appUser.getPassword());
    }


    @Override
    public Optional<AppUser> findById(Integer id) {
        return userRepository.findById(id);
    }

    /**
     * @param appUser
     * @creator LongNT
     * @day 12/09/2022
     */

    @Override
    public void edit(AppUser appUser) {
        userRepository.edit(appUser.getUsername(), appUser.getPassword(), appUser.getId());
    }

    @Override
    public void deleteUser(int id) {
        userRepository.deleteUser(id);
    }


    /**
     * @param username
     * @creator LongNT
     * @day 16/09/2022
     */
    @Override
    public Boolean existsUsername(String username) {
        return username.equals(userRepository.existsUsername(username));
    }
}
