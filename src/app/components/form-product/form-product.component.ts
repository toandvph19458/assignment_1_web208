import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/interface/product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent {
product:Iproduct={
  id:0,
  name:"",
  price:0
}
constructor(private productService:ServiceService ,private router:Router){}
onHandleSubmit(){
  this.productService.addnew(this.product).subscribe(()=>{
    this.router.navigate(["/admin/productManager"])
  })
}
}
