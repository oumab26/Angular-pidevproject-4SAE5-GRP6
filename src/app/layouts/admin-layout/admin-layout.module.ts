import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UniveristyDashboardComponent} from '../../pages/univeristy-dashboard/univeristy-dashboard.component';
import {UniRequestComponent} from '../../pages/uni-request/uni-request.component';
import {FrontUniComponent} from '../../pages/front-uni/front-uni.component';
import {AddUniReqComponent} from '../../pages/add-uni-req/add-uni-req.component';
import {MyRequestsComponent} from '../../pages/my-requests/my-requests.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UniveristyDashboardComponent,
    UniRequestComponent,
    FrontUniComponent,
    AddUniReqComponent,
    MyRequestsComponent,
  ]
})

export class AdminLayoutModule {}
