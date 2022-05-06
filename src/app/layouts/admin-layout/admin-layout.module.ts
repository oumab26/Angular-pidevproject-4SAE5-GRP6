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
import {JobOfferComponent} from '../../pages/JobOffer-Dashboard/job-offer/job-offer.component';
// import { ToastrModule } from 'ngx-toastr';
import {CreateJobOfferComponent} from '../../pages/JobOffer-Dashboard/create-job-offer/create-job-offer.component';
import {JobOfferDetailsComponent} from "../../pages/JobOffer-Dashboard/job-offer-details/job-offer-details.component";
import {CreateInterviewComponent} from "../../pages/JobOffer-Dashboard/create-interview/create-interview.component";
import {UpdateJobOfferComponent} from "../../pages/JobOffer-Dashboard/update-job-offer/update-job-offer.component";

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
    JobOfferComponent,
    CreateJobOfferComponent,
    UpdateJobOfferComponent,
    JobOfferDetailsComponent,
    CreateInterviewComponent
  ]
})

export class AdminLayoutModule {}
