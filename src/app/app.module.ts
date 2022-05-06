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
import { UniveristyDashboardComponent } from './pages/univeristy-dashboard/univeristy-dashboard.component';
import { UniRequestComponent } from './pages/uni-request/uni-request.component';
import { JobOfferComponent } from './pages/JobOffer-Dashboard/job-offer/job-offer.component';
import { CreateJobOfferComponent } from './pages/JobOffer-Dashboard/create-job-offer/create-job-offer.component';
import { JobOfferDetailsComponent } from './pages/JobOffer-Dashboard/job-offer-details/job-offer-details.component';
import { UpdateJobOfferComponent } from './pages/JobOffer-Dashboard/update-job-offer/update-job-offer.component';
import { CreateInterviewComponent } from './pages/JobOffer-Dashboard/create-interview/create-interview.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    JobOfferDetailsComponent,
    UpdateJobOfferComponent,
    CreateInterviewComponent
 
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
