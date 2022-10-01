import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../book.service";
import {ToastrService} from "ngx-toastr";
import {AngularFireStorage} from "@angular/fire/storage";
import {Category} from "../../model/category";
import {Title} from "@angular/platform-browser";
import {Book} from "../../model/book";
import {finalize} from "rxjs/operators";
import {Router} from "@angular/router";
import {formatDate} from "@angular/common";
import {checkDay} from "../../validated/check-day";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  selectedImage: File = null;
  checkImgSize = false;
  regexImageUrl = false;
  editImageState = false;
  checkImg: boolean;
  url: any;
  msg = '';
  loader = true;
  categories: Category[] = [];
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    size: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
    numberOfPage: new FormControl('', [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
    quantity: new FormControl('', [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
    date: new FormControl('', [Validators.required, checkDay]),
    author: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required])
  });

  constructor(private bookService: BookService,
              private toastrService: ToastrService,
              private storage: AngularFireStorage,
              private title: Title,
              private router: Router) {
    this.title.setTitle("Thêm mới sách");
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
  }

  submit() {
    this.loader = false;
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const filePath = `book/${nameImg}`;
    const fileRef = this.storage.ref(filePath);
    let book: Book;
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.bookForm.patchValue({image: url});
          book = {
            name: this.bookForm.value.name,
            description: this.bookForm.value.description,
            image: this.bookForm.value.image,
            size: this.bookForm.value.size,
            price: this.bookForm.value.price,
            numberOfPage: this.bookForm.value.numberOfPage,
            quantity: this.bookForm.value.quantity,
            date: this.bookForm.value.date,
            author: this.bookForm.value.author,
            categories: this.bookForm.value.categories,
            company: this.bookForm.value.company,
            isDeleted: false
          };
          this.bookService.save(book).subscribe(() => {
            this.router.navigate(['/book/list']);
            this.toastrService.success('Thêm mới thành công.', 'Thông báo');
          }, error => {
            console.log(error);
            this.toastrService.error('Thêm mới thất bại.', 'Thông báo');
          });
        });
      })
    ).subscribe();
  }

  getAllCategory(): void {
    this.bookService.findAllCategory().subscribe(categories => {
      this.categories = categories;
    })
  }

  onFileSelected(event): void {
    this.regexImageUrl = false;
    if (event.target.files[0].size > 9000000) {
      return;
    }
    this.selectedImage = event.target.files[0];
    if (!event.target.files[0].name.match('^.*\\.(jpg|JPG)$')) {
      this.regexImageUrl = true;
      return;
    }
    this.bookForm.patchValue({imageUrl: this.selectedImage.name});
  }

  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return;
    }
    if (event.target.files[0].size > 9000000) {
      return;
    }
    if (!event.target.files[0].name.match('^.*\\.(jpg|JPG)$')) {
      return;
    }
    this.checkImgSize = false;
    this.checkImg = false;
    this.editImageState = true;

    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Chỉ có file ảnh được hỗ trợ';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }
}
