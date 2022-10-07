import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {BookModule} from "./book/book.module";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CartModule} from "./cart/cart.module";
import {SecurityModule} from "./security/security.module";
import {ContactModule} from "./contact/contact.module";
import {PaymentModule} from "./payment/payment.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        BookModule,
        CartModule,
        SecurityModule,
        ContactModule,
        PaymentModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ToastrModule.forRoot({
            timeOut: 1000,
            positionClass: 'toast-top-right',
            progressBar: true,
            tapToDismiss: true
        }),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
