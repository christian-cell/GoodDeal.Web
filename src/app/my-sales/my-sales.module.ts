import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySalesRoutingModule } from './my-sales-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NewSaleComponent } from './pages/new-sale/new-sale.component';
import { ListComponent } from './pages/mySalesList/list.component';
import { MySalesTopMenuComponent } from './components/my-sales-top-menu/my-sales-top-menu.component';
import { NewSaleFormComponent } from './components/new-sale-form/new-sale-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewSaleComponent,
    ListComponent,
    MySalesTopMenuComponent,
    NewSaleFormComponent
  ],
  imports: [
    RouterModule,
    RouterLink,
    CommonModule,
    MySalesRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MySalesModule { }
