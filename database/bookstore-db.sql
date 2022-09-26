CREATE DATABASE book_store;

USE book_store;

CREATE TABLE app_user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    `password` VARCHAR(255),
    `email` VARCHAR(255),
    creation_date DATE,
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE app_role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(255),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE user_role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    is_deleted BIT(1) DEFAULT 0,
    role_id INT,
    user_id INT,
    FOREIGN KEY (role_id)
        REFERENCES app_role (id),
    FOREIGN KEY (user_id)
        REFERENCES app_user (id)
);

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    is_deleted BIT(1) DEFAULT 0
);

create table authors (
	 id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
     is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    address VARCHAR(255),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    descriptions VARCHAR(255),
    price DOUBLE,
    image VARCHAR(255),
    number_of_pages INT,
    categories_id INT,
    author_id INT,
    companies_id INT,
    is_deleted BIT(1) DEFAULT 0,
    FOREIGN KEY (categories_id)
        REFERENCES categories (id),
    FOREIGN KEY (author_id)
        REFERENCES authors (id),
    FOREIGN KEY (companies_id)
        REFERENCES companies (id)
);

CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    address VARCHAR(255),
    user_id INT,
    is_deleted BIT(1) DEFAULT 0,
    FOREIGN KEY (user_id)
        REFERENCES app_user (id)
);

CREATE TABLE payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE `order` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_day DATE,
    books_id INT,
    user_id INT,
    is_deleted BIT(1) DEFAULT 0,
    FOREIGN KEY (books_id)
        REFERENCES books (id),
    FOREIGN KEY (user_id)
        REFERENCES app_user (id)
);

CREATE TABLE order_detail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    quantity INT,
    order_id INT,
    payments_id INT,
    is_deleted BIT(1) DEFAULT 0,
    FOREIGN KEY (order_id)
        REFERENCES `order` (id),
    FOREIGN KEY (payments_id)
        REFERENCES payments (id)
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT,
    user_id INT,
    is_deleted BIT(1) DEFAULT 0,
    FOREIGN KEY (user_id)
        REFERENCES app_user (id)
);