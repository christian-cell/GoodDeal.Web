import { Component, OnInit } from '@angular/core';
import { CustomerDataHydratationService } from 'src/app/shared/services';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{

  variableName =                                                               "Hola";

  constructor(

    private customerDataHydratationService:                                    CustomerDataHydratationService

  ){}

  

  ngOnInit(): void {
    
    this.customerDataHydratationService.StoreCustomerData();
  }

}
