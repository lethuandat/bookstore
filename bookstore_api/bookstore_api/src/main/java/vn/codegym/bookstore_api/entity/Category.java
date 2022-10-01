package vn.codegym.bookstore_api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Column(columnDefinition = "BIT(1) DEFAULT 0")
    private Boolean isDeleted;


    @OneToMany(mappedBy = "categories")
    @JsonBackReference
    private List<Book> books;
}
