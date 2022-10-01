package vn.codegym.bookstore_api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.codegym.bookstore_api.entity.Book;
import vn.codegym.bookstore_api.repository.BookRepository;
import vn.codegym.bookstore_api.service.IBookService;

import java.util.Optional;

@Service
public class BookService implements IBookService {
    @Autowired
    BookRepository bookRepository;

    @Override
    public Page<Book> findAll(Pageable pageable, String keyword) {
        return bookRepository.findAll(pageable, keyword);
    }

    @Override
    public Optional<Book> findById(Integer id) {
        return bookRepository.findById(id);
    }

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }


    @Override
    public void update(Book book) {
        bookRepository.update(book.getName(),
                book.getDescription(),
                book.getImage(),
                book.getPrice(),
                book.getNumberOfPage(),
                book.getQuantity(),
                book.getAuthor(),
                book.getSize(),
                book.getDate(),
                book.getCategories().getId(),
                book.getCompany(),
                book.getIsDeleted(),
                book.getId());
    }

    @Override
    public void remove(Integer id) {
        bookRepository.delete(id);
    }
}
