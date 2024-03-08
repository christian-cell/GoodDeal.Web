import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})

export class AuthComponent {

  signIn =                                                      true;
  signUp =                                                      false;

  GoTo(destination : string):void{
    
    if(destination === 'signIn'){
      this.signIn = true;
      this.signUp = false;
    }

    if(destination === 'signUp'){
      this.signIn = false;
      this.signUp = true;
    }
  }

}
