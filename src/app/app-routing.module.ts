import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/add", component:ProductAddComponent},
  {path:"login", component:LoginComponent}
  // biz burda bir yere tıklandığında pathde ne oluşsun onu ayarlıyoruz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
