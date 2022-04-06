import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : "home" , component : HomeComponent},
  {path :  "product" , component : ProductComponent},
  {path : "footer" , component : FooterComponent},
  {path : "" , component : HomeComponent},
  {path : "**" , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
