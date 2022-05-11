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

import {JobOfferComponent} from '../../pages/JobOffer-Dashboard/job-offer/job-offer.component';

// import { ToastrModule } from 'ngx-toastr';
import { FullCalendarModule } from '@fullcalendar/angular';
//import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);
import { CalendrierComponent  } from 'src/app/pages/JobOffer-Dashboard/calendrier/calendrier.component';

import {CreateJobOfferComponent} from '../../pages/JobOffer-Dashboard/create-job-offer/create-job-offer.component';
import {JobOfferDetailsComponent} from "../../pages/JobOffer-Dashboard/job-offer-details/job-offer-details.component";
import {CreateInterviewComponent} from "../../pages/JobOffer-Dashboard/create-interview/create-interview.component";
import {UpdateJobOfferComponent} from "../../pages/JobOffer-Dashboard/update-job-offer/update-job-offer.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
//import {NgxPaginationModule} from "ngx-pagination";
import interactionPlugin from '@fullcalendar/interaction';
import {NgxPaginationModule} from 'ngx-pagination';


//Begin Training section

import { DatePipe } from '@angular/common';

import { CreateQuizComponent } from '../../pages/Training-Dashboard/create-quiz/create-quiz.component';
import { QuizDetailsComponent } from '../../pages/Training-Dashboard/quiz-details/quiz-details.component';
import { QuizListComponent } from '../../pages/Training-Dashboard/quiz-list/quiz-list.component';
import { UpdateQuizComponent } from '../../pages/Training-Dashboard/update-quiz/update-quiz.component';
import { TrainerListComponent } from '../../pages/Training-Dashboard/trainer-list/trainer-list.component';

//End Training section

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,

   CreateQuizComponent,
    QuizDetailsComponent,
    QuizListComponent,
    UpdateQuizComponent,
    TrainerListComponent
  ],
  providers: [DatePipe]

    UniveristyDashboardComponent,
    UniRequestComponent,

    FrontUniComponent,
    AddUniReqComponent,
    MyRequestsComponent,

    JobOfferComponent,
    CreateJobOfferComponent,
    UpdateJobOfferComponent,
    JobOfferDetailsComponent,
    CreateInterviewComponent,
    CalendrierComponent ,


  ]

})

export class AdminLayoutModule {}
