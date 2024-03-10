import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule /* , MatAccordion */ } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
/* fontawsome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { /* HTTP_INTERCEPTORS, */ HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from 'src/app/store/metaReducers';
import { metaEffects } from './store/metaEffects';
import { environment } from 'src/environments/environment.development';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgOptimizedImage } from '@angular/common';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // Usa TranslateHttpLoader para cargar archivos JSON
}

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( reducers , { metaReducers } ),
    EffectsModule.forRoot( metaEffects ),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    FontAwesomeModule,
    NgOptimizedImage,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
