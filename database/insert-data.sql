INSERT INTO `bookstore_database`.`company` (`id`, `is_deleted`, `name`) VALUES ('1', false, 'Nhà xuất bản Trẻ');
INSERT INTO `bookstore_database`.`company` (`id`, `is_deleted`, `name`) VALUES ('2', false, 'Nhà xuất bản Kim Đồng');
INSERT INTO `bookstore_database`.`company` (`id`, `is_deleted`, `name`) VALUES ('3', false, 'Nhà xuất bản Hội nhà văn');
INSERT INTO `bookstore_database`.`company` (`id`, `is_deleted`, `name`) VALUES ('4', false, 'Nhà xuất bản Lao động');
INSERT INTO `bookstore_database`.`company` (`id`, `is_deleted`, `name`) VALUES ('5', false, 'Nhà xuất bản Phụ nữ Việt Nam');
INSERT INTO `bookstore_database`.`company` (`id`, `is_deleted`, `name`) VALUES ('6', false, 'Nhà xuất bản Sự thật');

INSERT INTO `bookstore_database`.`category` (`id`, `is_deleted`, `name`) VALUES ('1', false, 'Truyện - Tiểu thuyết');
INSERT INTO `bookstore_database`.`category` (`id`, `is_deleted`, `name`) VALUES ('2', false, 'Chính trị - Pháp luật');
INSERT INTO `bookstore_database`.`category` (`id`, `is_deleted`, `name`) VALUES ('3', false, 'Khoa học công nghệ - Kinh tế');
INSERT INTO `bookstore_database`.`category` (`id`, `is_deleted`, `name`) VALUES ('4', false, 'Văn học nghệ thuật');
INSERT INTO `bookstore_database`.`category` (`id`, `is_deleted`, `name`) VALUES ('5', false, 'Văn hóa xã hội - Lịch sử');
INSERT INTO `bookstore_database`.`category` (`id`, `is_deleted`, `name`) VALUES ('6', false, 'Giáo trình');
INSERT INTO `bookstore_database`.`category` (`id`, `is_deleted`, `name`) VALUES ('7', false, 'Tâm lý - Tâm linh - Tôn giáo');
INSERT INTO `bookstore_database`.`category` (`id`, `is_deleted`, `name`) VALUES ('8', false, 'Thiếu nhi');

INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('1', false, 'Tô Hoài');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('2', false, 'Nguyễn Nhật Ánh');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('3', false, 'Xuân Diệu');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('4', false, 'Nguyễn Minh Châu');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('5', false, 'Nguyễn Ngọc Thạch');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('6', false, 'Trang Hạ');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('7', false, 'Gào');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('8', false, 'Minh Nhật');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('9', false, 'Phan Ý Yên');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('10', false,'Tố Hữu');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('11', false,'Nam Cao');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('12', false,'Hoài Thanh');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('13', false,'Nguyễn Ngọc Tư');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('14', false,'Victor Hugo');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('15', false,'Voltaire');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('16', false,'Lev Tolstoy');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('17', false,'Mark Twain');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('18', false,'Ernest Hemingway');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('19', false,'Balzac');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('20', false,'John Milton');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('21', false,'William Shakespeare');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('22', false,'J. R. R. Tolkien');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('23', false,'Arthur Conan Doyle');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('24', false,'J. K. Rowling');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('25', false,'Fujiko F. Fujio');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('26', false,'Dale Carnegie');
INSERT INTO `bookstore_database`.`author` (`id`, `is_deleted`, `name`) VALUES ('27', false,'Tony');

INSERT INTO `bookstore_database`.`payment` (`id`, `name`) VALUES ('1', 'Paypal');
INSERT INTO `bookstore_database`.`payment` (`id`, `name`) VALUES ('2', 'Tiền mặt');
INSERT INTO `bookstore_database`.`payment` (`id`, `name`) VALUES ('3', 'Chuyển khoản ngân hàng');

INSERT INTO `bookstore_database`.`app_role` (`id`, `role_name`) VALUES ('1', 'admin');
INSERT INTO `bookstore_database`.`app_role` (`id`, `role_name`) VALUES ('2', 'user');

INSERT INTO `bookstore_database`.`app_user` (`id`, `address`, `creation_date`, `email`, `password`, `phone`, `username`) VALUES ('1', 'Đà Nẵng', '2022-09-29', 'admin@gmail.com', '12345678', '0906067530', 'admin');
INSERT INTO `bookstore_database`.`app_user` (`id`, `address`, `creation_date`, `email`, `password`, `phone`, `username`) VALUES ('2', 'Đà Nẵng', '2022-09-29', 'user@gmail.com', '12345678', '0982222093', 'user');

INSERT INTO `bookstore_database`.`user_role` (`id`, `role_id`, `user_id`) VALUES ('1', '1', '1');
INSERT INTO `bookstore_database`.`user_role` (`id`, `role_id`, `user_id`) VALUES ('2', '2', '1');
INSERT INTO `bookstore_database`.`user_role` (`id`, `role_id`, `user_id`) VALUES ('3', '2', '2');

INSERT INTO `bookstore_database`.`comment` (`id`, `content`, `user_id`) VALUES ('1', 'Sách hay, chất lượng, giá ok', '1');

INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('1', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('2', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('3', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('4', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('5', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('6', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('7', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('8', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('9', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('10', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('11', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('12', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('13', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
INSERT INTO `bookstore_database`.`book` (`id`, `description`, `image`, `name`, `number_of_page`, `price`, `author_id`, `category_id`, `company_id`) VALUES ('14', 'Đắc nhân tâm – How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia.', 'https://taisachmienphi.com/wp-content/uploads/2020/03/dac-nhan-tam.jpg', 'Đắc nhân tâm', '300', '260000', '26', '1', '2');
