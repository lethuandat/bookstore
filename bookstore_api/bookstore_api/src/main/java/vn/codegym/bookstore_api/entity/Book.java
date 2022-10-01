package vn.codegym.bookstore_api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR(255)")
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String image;

    private Double price;

    private Integer numberOfPage;

    private Integer quantity;

    @Column(columnDefinition = "BIT(1) DEFAULT 0")
    private Boolean isDeleted;

    @Column(columnDefinition = "VARCHAR(255)")
    private String author;


    @Column(columnDefinition = "VARCHAR(255)")
    private String size;

    @Column(columnDefinition = "DATE")
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category categories;

    @Column(columnDefinition = "VARCHAR(255)")
    private String company;

    @OneToMany(mappedBy = "book")
    @JsonBackReference
    private List<Orders> orders;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "discount_id", referencedColumnName = "id")
    private Discount discount;
}
