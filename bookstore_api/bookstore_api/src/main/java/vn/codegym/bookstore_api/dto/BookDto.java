package vn.codegym.bookstore_api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vn.codegym.bookstore_api.entity.Category;
import vn.codegym.bookstore_api.entity.Discount;
import vn.codegym.bookstore_api.entity.Orders;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    private Integer id;

    @NotBlank(message = "*Vui lòng không để trống")
    private String name;

    @NotBlank(message = "*Vui lòng không để trống")
    private String description;

    @NotBlank(message = "*Vui lòng không để trống")
    private String image;

    @Min(1)
    private Double price;

    @Min(1)
    private Integer numberOfPage;

    @Min(1)
    private Integer quantity;

    private Boolean isDeleted;

    @NotBlank(message = "*Vui lòng không để trống")
    private String author;

    @NotBlank(message = "*Vui lòng không để trống")
    private String size;

    private LocalDate date;

    private Category categories;

    @NotBlank(message = "*Vui lòng không để trống")
    private String company;

    private List<Orders> orders;

    private Discount discount;
}
