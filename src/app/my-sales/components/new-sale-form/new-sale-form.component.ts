import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Sale } from 'src/app/models';
import { storeNewSale } from 'src/app/store/actions/sales/sales.actions';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-new-sale-form',
  standalone: false,
  templateUrl: './new-sale-form.component.html',
  styleUrl: './new-sale-form.component.scss'
})

export class NewSaleFormComponent {

  sale: Sale =                                               new Sale();
  
  selectedFiles:                                             File[] = [];

  constructor(
    private store:                                           Store<AppState>
  ) {}

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  CreateNewSale() {

    const formData = new FormData();

    formData.append('productName', this.sale.productName || '');
    formData.append('productDescription', this.sale.productDescription || '');
    formData.append('price', (this.sale.price || 0).toString());
    formData.append('producedYear', ('2024/02/02'));
    
    
    for (let file of this.selectedFiles) {
      
      formData.append('files', file);

    }

    console.log(formData);

    this.store.dispatch( storeNewSale({ newSale : formData }) );

    
  }

}
