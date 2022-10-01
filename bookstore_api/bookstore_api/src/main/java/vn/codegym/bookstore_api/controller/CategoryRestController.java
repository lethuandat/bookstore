package vn.codegym.bookstore_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.codegym.bookstore_api.entity.Category;
import vn.codegym.bookstore_api.service.ICategoryService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/category")
public class CategoryRestController {
    @Autowired
    ICategoryService iCategoryService;

    @GetMapping("/list")
    public ResponseEntity<List<Category>> findAll() {
        List<Category> categories = iCategoryService.findAll();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
}
