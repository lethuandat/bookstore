package vn.codegym.bookstore_api.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vn.codegym.bookstore_api.entity.Comment;
import vn.codegym.bookstore_api.entity.Customer;
import vn.codegym.bookstore_api.entity.Orders;
import vn.codegym.bookstore_api.entity.UserRole;

import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Integer id;

    @NotBlank(message = "*Vui lòng nhập tài khoản")
    private String username;

    @NotBlank(message = "*Vui lòng nhập mật khẩu")
    @Size(min = 6, message = "*Mật khẩu phải có ít nhất 6 kí tự")
    private String password;

    private LocalDate creationDate;

    private Boolean isDeleted;

    private List<UserRole> userRoles;

    private List<Orders> orders;

    private List<Comment> comments;

    private CustomerDto customerDto;
}
