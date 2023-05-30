import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TableProductComponent,
    FormProductComponent,
    EditProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
