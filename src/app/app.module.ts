import {CUSTOM_ELEMENTS_SCHEMA, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomelayoutComponent } from './theme/homelayout/homelayout.component';
import { PagelayoutComponent } from './theme/pagelayout/pagelayout.component';

import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/auth/auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './shared/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    PagelayoutComponent,
    HomelayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: AuthReducer }),
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [LocalStorageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
