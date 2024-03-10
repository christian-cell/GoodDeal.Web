import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sale } from 'src/app/models';
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

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  onSubmit() {
    const formData = new FormData();

    formData.append('productName', this.sale.productName || '');
    formData.append('productDescription', this.sale.productDescription || '');
    formData.append('price', (this.sale.price || 0).toString());
    formData.append('producedYear', ('2024/02/02'));
    
    
    for (let file of this.selectedFiles) {
      
      formData.append('files', file);

    }

    console.log(formData);

    if( formData ){

      this.http.post(`${environment.GoodDealAPI.url}Sale`, formData)
      .subscribe(response => {

        console.log(response);

      }, (error: HttpErrorResponse) => {

        console.log(error);
      });

    }

    
  }

}
