import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/product';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product:Iproduct={
    id:0,
    name:"",
    price:0
  }
  constructor(private productService:ServiceService,private router:Router){}
  onhandleSubmit(){
    this.productService.addProduct(this.product).subscribe(()=>{
      this.router.navigate(["admin/productManager"])
    })
  }
}
