import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../book.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";
import {Title} from "@angular/platform-browser";
import {checkDay} from "../../validated/check-day";
import {formatDate} from "@angular/common";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import Swal from "sweetalert2";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id: number;
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
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    size: new FormControl(''),
    price: new FormControl(''),
    numberOfPage: new FormControl(''),
    quantity: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
    categories: new FormControl(''),
    company: new FormControl('')
  });

  constructor(private bookService: BookService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage,
              private title: Title,
              private router: Router) {
    this.title.setTitle("Cập nhật sách");
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.bookService.findById(this.id).subscribe(book => {
          this.bookForm = new FormGroup({
            id: new FormControl(book.id),
            name: new FormControl(book.name, [Validators.required]),
            description: new FormControl(book.description, [Validators.required]),
            image: new FormControl(book.image),
            size: new FormControl(book.size, [Validators.required]),
            price: new FormControl(book.price, [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
            numberOfPage: new FormControl(book.numberOfPage, [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
            quantity: new FormControl(book.quantity, [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
            date: new FormControl(book.date, [Validators.required, checkDay]),
            author: new FormControl(book.author, [Validators.required]),
            categories: new FormControl(book.categories, [Validators.required]),
            company: new FormControl(book.company, [Validators.required])
          });
      })
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
  }

  getAllCategory(): void {
    this.bookService.findAllCategory().subscribe(categories => {
      this.categories = categories;
    })
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
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

  submit() {
    this.loader = false;
    const nameImg = this.getCurrentDateTime() + this.selectedImage?.name;
    const filePath = `book/${nameImg}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.bookForm.patchValue({image: url});
          this.bookService.update(this.id, this.bookForm.value).subscribe(() => {
            this.router.navigate(['/book/list']);
            Swal.fire('Thông báo', 'Cập nhật thành công', 'success');
            //this.toastrService.success('Cập nhật thành công.', 'Thông báo');
          }, error => {
            console.log(error);
            Swal.fire('Thông báo', 'Thêm mới thất bại', 'error');
            //this.toastrService.error('Cập nhật thất bại.', 'Thông báo');
          });
        });
      })
    ).subscribe();
  }

  reset(id: number) {
    this.selectedImage = null;
    this.checkImgSize = false;
    this.regexImageUrl = false;
    this.editImageState = false;
    this.checkImg = false;
    this.bookService.findById(this.id).subscribe(book => {
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        name: new FormControl(book.name, [Validators.required]),
        description: new FormControl(book.description, [Validators.required]),
        image: new FormControl(book.image),
        size: new FormControl(book.size, [Validators.required]),
        price: new FormControl(book.price, [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
        numberOfPage: new FormControl(book.numberOfPage, [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
        quantity: new FormControl(book.quantity, [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
        date: new FormControl(book.date, [Validators.required, checkDay]),
        author: new FormControl(book.author, [Validators.required]),
        categories: new FormControl(book.categories, [Validators.required]),
        company: new FormControl(book.company, [Validators.required])
      });
    });
  }
}
