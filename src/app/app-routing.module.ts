import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
{path:"admin",component:AdminLayoutComponent,children:[
  {path:"productManager",component:TableProductComponent},
  {path:"add",component:FormProductComponent},
  {path:"productManager/:id",component:EditProductComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
