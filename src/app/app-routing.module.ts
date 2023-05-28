import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {path:"admin",component:LayoutAdminComponent,children:[
    {path:"productManager" , component:TableProductsComponent},
    {path:"add", component:AddProductComponent},
    {path:"productManager/:id", component:EditProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
