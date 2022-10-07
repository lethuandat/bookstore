package vn.codegym.bookstore_api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR(255)")
    private String name;

    @Column(columnDefinition = "VARCHAR(255)")
    private String idCard;

    @Column(columnDefinition = "VARCHAR(255)")
    private String email;

    private LocalDate birthDay;

    @Column(columnDefinition = "VARCHAR(15)")
    private String phone;

    @Column(columnDefinition = "VARCHAR(255)")
    private String address;

    @Column(columnDefinition = "TEXT")
    private String image;

    @Column(columnDefinition = "BIT(1) DEFAULT 0")
    private Boolean isDeleted;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private AppUser appUser;
}
