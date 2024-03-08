import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'GoodDeal.Web';
  hasToken = window.localStorage.getItem("token") ? true : false;

  ngOnInit(): void {
    console.log('entra APPCOMPONENT');
  }
}
