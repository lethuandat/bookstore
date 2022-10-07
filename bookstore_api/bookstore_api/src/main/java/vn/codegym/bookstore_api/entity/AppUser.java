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
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR(255)")
    private String username;

    @Column(columnDefinition = "VARCHAR(255)")
    private String password;

    @Column(columnDefinition = "DATE")
    private LocalDate creationDate;

    @Column(columnDefinition = "BIT(1) DEFAULT 0")
    private Boolean isDeleted;

    @OneToMany(mappedBy = "appUser")
    @JsonBackReference
    private List<UserRole> userRoles;

    @OneToMany(mappedBy = "appUser")
    @JsonBackReference
    private List<Orders> orders;

    @OneToMany(mappedBy = "appUser")
    @JsonBackReference
    private List<Comment> comments;

    @OneToOne(mappedBy = "appUser")
    @JsonBackReference
    private Customer customer;
}
