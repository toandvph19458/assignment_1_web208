import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss']
})
export class TableProductComponent {
products:Iproduct[]=[]
constructor(private productService:ServiceService){
  this.productService.getAll().subscribe((data)=>{
    this.products=data
  })
}
onremove(id:number|string){
  this.productService.deleteProduct(id).subscribe(()=>{
    this.products=this.products.filter((item)=>item.id!=id)
  })
}
}
