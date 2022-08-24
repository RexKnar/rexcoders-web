import {CUSTOM_ELEMENTS_SCHEMA, NgModule  } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomelayoutComponent } from './theme/homelayout/homelayout.component';
import { PagelayoutComponent } from './theme/pagelayout/pagelayout.component';

import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/auth/auth.reducer';
import { TrainingReducer } from './store/training/training.reducer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService } from './shared/services/local-storage.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    PagelayoutComponent,
    HomelayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    SweetAlert2Module.forRoot(),
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: AuthReducer, training: TrainingReducer }),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true,
 },LocalStorageService,
 Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
