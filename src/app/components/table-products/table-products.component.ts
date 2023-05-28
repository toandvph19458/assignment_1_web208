import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss']
})
export class TableProductsComponent {
  products:Iproduct[]=[]
constructor(private productService:ServiceService){
  this.productService.getallProduct().subscribe((data)=>{
    this.products=data
  })
}
removeProduct(id:number|string){
  this.productService.deleteProduct(id).subscribe(()=>{
    this.products=this.products.filter((item)=>item.id!=id)
  })
}
}
