import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {AngularFireStorage} from "@angular/fire/storage";
import {CustomerService} from "../customer.service";
import {formatDate} from "@angular/common";
import {Customer} from "../../model/customer";
import {finalize} from "rxjs/operators";
import Swal from "sweetalert2";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedImage: File = null;
  checkImgSize = false;
  regexImageUrl = false;
  editImageState = false;
  checkImg: boolean;
  url: any;
  msg = '';
  loader = true;
  isExitsPhone = false;
  isExitsIdCard = false;
  isExitsUsername = false;
  isExitsEmail = false;

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    birthDay: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{12}$')]),
    image: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl('', [Validators.required])
  });

  constructor(private customerService: CustomerService,
              private router: Router,
              private storage: AngularFireStorage,
              private title: Title) {
    this.title.setTitle('Đăng ký tài khoản');
  }

  ngOnInit(): void {
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
  }

  submit() {
    this.loader = false;
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const filePath = `book/${nameImg}`;
    const fileRef = this.storage.ref(filePath);
    let customer: Customer;
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.customerForm.patchValue({image: url});
          console.log(url);
          customer = {
            name: this.customerForm.value.name,
            idCard: this.customerForm.value.idCard,
            userDto: {
              username: this.customerForm.value.username,
              password: this.customerForm.value.password
            },
            email: this.customerForm.value.email,
            birthDay: this.customerForm.value.birthDay,
            phone: this.customerForm.value.phone,
            address: this.customerForm.value.address,
            image: this.customerForm.value.image
          };
          this.customerService.save(customer).subscribe(() => {
            console.log('dsđsa')
            this.router.navigate(['/login']);
            Swal.fire('Thông báo', 'Tạo tài khoản thành công', 'success');
          }, error => {
            Swal.fire('Thông báo', 'Tạo tài khoản thất bại', 'error');
            console.log(error);
          });
        });
      })
    ).subscribe();
  }

  checkPhone($event: Event) {
    this.customerService.checkPhone(String($event)).subscribe(value => {
        if (value) {
          this.isExitsPhone = true;
        } else {
          this.isExitsPhone = false;
        }
      }
    );
  }

  checkIdCard($event: Event) {
    this.customerService.checkIdCard(String($event)).subscribe(idCard => {
        if (idCard) {
          this.isExitsIdCard = true;
        } else {
          this.isExitsIdCard = false;
        }
      }
    );
  }

  checkUsername($event: Event) {
    this.customerService.checkUsername(String($event)).subscribe(value => {
        if (value) {
          this.isExitsUsername = true;
        } else {
          this.isExitsUsername = false;
        }
      }
    );
  }

  checkEmail($event: Event) {
    this.customerService.checkEmail(String($event)).subscribe(value => {
        if (value) {
          this.isExitsEmail = true;
        } else {
          this.isExitsEmail = false;
        }
      }
    );
  }

  onFileSelected(event) {
    this.regexImageUrl = false;
    if (event.target.files[0].size > 9000000) {
      return;
    }
    this.selectedImage = event.target.files[0];
    if (!event.target.files[0].name.match('^.*\\.(jpg|JPG)$')) {
      this.regexImageUrl = true;
      return;
    }
    this.customerForm.patchValue({imageUrl: this.selectedImage.name});
  }

  selectFile(event: any) {
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
