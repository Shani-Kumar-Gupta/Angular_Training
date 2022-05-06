import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent },
  // {
  //   path: 'customer',
  //   children: [
  //     // Child Routes
  //     { path: 'user', component: UserComponent },
  //     { path: 'product', component: ProductComponent },
  //   ],
  // },
  {
    path: 'college',
    loadChildren: () =>
      import('./college/college.module').then((m) => m.CollegeModule),
  },
  // { path: 'product/:item', component: ProductComponent }, // Param Routing
  { path: '**', component: PageNotFoundComponent }, // Wild card routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
