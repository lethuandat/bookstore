package vn.codegym.bookstore_api.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import vn.codegym.bookstore_api.dto.BookDto;
import vn.codegym.bookstore_api.entity.Book;
import vn.codegym.bookstore_api.service.IBookService;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/public/book")
public class BookRestController {
    @Autowired
    IBookService iBookService;

    @GetMapping("/list")
    public ResponseEntity<Page<Book>> findAll(@PageableDefault(value = 9) Pageable pageable,
                                              @RequestParam Optional<String> keyword) {
        Page<Book> books = iBookService.findAll(pageable, keyword.orElse(""));
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }


    @GetMapping("/listByCategory")
    public ResponseEntity<Page<Book>> findAllByCategory(@PageableDefault(value = 9) Pageable pageable,
                                                        @RequestParam Optional<String> keyword,
                                                        @RequestParam Integer categoryId) {
        Page<Book> books = iBookService.findAllByCategory(pageable, keyword.orElse(""), categoryId);
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findById(@PathVariable Integer id) {
        Optional<Book> book = iBookService.findById(id);
        if (!book.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(book.orElse(null), HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity<List<FieldError>> create(@RequestBody @Valid BookDto bookDto, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.NOT_ACCEPTABLE);
        }

        Book book = new Book();
        BeanUtils.copyProperties(bookDto, book);
        this.iBookService.save(book);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Book> update(@PathVariable Integer id, @Valid @RequestBody BookDto bookDto, BindingResult bindingResult) {
        Optional<Book> currentBook = iBookService.findById(id);

        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }

        if (!currentBook.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        currentBook.get().setName(bookDto.getName());
        currentBook.get().setDescription(bookDto.getDescription());
        currentBook.get().setImage(bookDto.getImage());
        currentBook.get().setPrice(bookDto.getPrice());
        currentBook.get().setNumberOfPage(bookDto.getNumberOfPage());
        currentBook.get().setQuantity(bookDto.getQuantity());
        currentBook.get().setAuthor(bookDto.getAuthor());
        currentBook.get().setSize(bookDto.getSize());
        currentBook.get().setCategories(bookDto.getCategories());
        currentBook.get().setCompany(bookDto.getCompany());

        iBookService.update(currentBook.get());

        return new ResponseEntity<>(currentBook.get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Book> delete(@PathVariable Integer id) {
        Optional<Book> book = iBookService.findById(id);

        if (!book.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        iBookService.remove(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
