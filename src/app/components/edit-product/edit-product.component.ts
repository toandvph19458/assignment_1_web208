import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interface/product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product:Iproduct={
    id:0,
    name:"",
    price:0
  }
  constructor(private productService:ServiceService ,private router:Router,private params:ActivatedRoute){
    this.params.paramMap.subscribe((param)=>{
      const id = Number(param.get("id"))
      this.productService.getOne(id).subscribe((data)=>{
        this.product=data
      })
    })
  }
  onHandleSubmit(){
    this.productService.update(this.product).subscribe(()=>{
      this.router.navigate(["/admin/productManager"])
    })
  }
}
