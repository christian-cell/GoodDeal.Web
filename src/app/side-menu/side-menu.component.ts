import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component , OnDestroy, OnInit, ViewChild } from '@angular/core'
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
/* fontawsome */
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { 
  fas  , IconDefinition , faLock , faUsers
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState, CustomerRegister } from 'src/app/models';
import { I18nService } from '../shared/services';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})

export class SideMenuComponent implements OnInit , OnDestroy {
  opened =                          false;
  showFiller =                      false;
  panelOpenState:                   boolean = false;

  mobileQuery:                      MediaQueryList;
  faLock:                           IconDefinition=faLock;
  faUsers:                          IconDefinition=faUsers;
  customerDestroyed$:               Subject<void> = new Subject<void>();
  customer:                         CustomerRegister = new CustomerRegister();
  isToken=                          false;
  navs = [
    {
      route : 'home' , name : 'HOME'
    },
    {
      route : 'products' , name : 'PRODUCTS'
    },
    {
      route : 'mySales' , name : 'MYSALES'
    }
  ]

  private _mobileQueryListener: () => void;

  
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  

  constructor(
    private i18nService:            I18nService,
    private store:                  Store<AppState>,
    private changeDetectorRef:      ChangeDetectorRef, 
    media:                          MediaMatcher,
    library:                        FaIconLibrary,
    private router:                 Router
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    library.addIconPacks(fas);
    library.addIcons(faLock);
    library.addIcons(faUsers);
    
  }

  ngOnInit(): void {
    
    this.GetCustomerInfo();
  }

  changeLanguage(lang : string): void {

    this.i18nService.setLanguage( lang );
  }



  GetCustomerInfo():void{

    this.store.select( AppState => AppState.Customer ).pipe( takeUntil( this.customerDestroyed$ ) ).subscribe(( customer : CustomerRegister ) => {

      this.customer = { ...customer };

      this.changeDetectorRef.detectChanges();
      
      if( window.localStorage.getItem("token") ){
        
        this.opened = true;
        
        this.isToken = true;

      } 
    })
  }

  Logout():void{

    window.localStorage.removeItem("token");
    this.isToken = false;
    this.opened = false;
    this.router.navigate(['auth/authorize']);
  }

  ngOnDestroy(): void {
    this.customerDestroyed$.next();
    this.customerDestroyed$.complete();
  }
}
