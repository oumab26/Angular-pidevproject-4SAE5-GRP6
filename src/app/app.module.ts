import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AddUniReqComponent } from './pages/add-uni-req/add-uni-req.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';



import {Ng2SearchPipeModule} from "ng2-search-filter";
import { NgxPaginationModule } from 'ngx-pagination';
import {FullCalendarModule} from "@fullcalendar/angular";





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,

    Ng2SearchPipeModule,
    NgxPaginationModule,
    FullCalendarModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

    AuthLayoutComponent,

    AuthLayoutComponent,







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
