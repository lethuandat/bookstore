package vn.codegym.bookstore_api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {
    private Integer id;

    @NotBlank(message = "*Vui lòng không để trống")
    private String name;


    @NotBlank(message = "*Vui lòng không để trống")
    private String idCard;

    @NotBlank(message = "*Vui lòng không để trống")
    private String email;


    private LocalDate birthDay;

    @NotBlank(message = "*Vui lòng không để trống")
    private String phone;

    @NotBlank(message = "*Vui lòng không để trống")
    private String address;

    private String image;

    private Boolean isDeleted;

    private UserDto userDto;

}
