import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {UniveristyDashboardComponent} from '../../pages/univeristy-dashboard/univeristy-dashboard.component';
import {UniRequestComponent} from '../../pages/uni-request/uni-request.component';

import {FrontUniComponent} from '../../pages/front-uni/front-uni.component';
import {AddUniReqComponent} from '../../pages/add-uni-req/add-uni-req.component';
import {MyRequestsComponent} from '../../pages/my-requests/my-requests.component';

import {JobOfferComponent} from '../../pages/JobOffer-Dashboard/job-offer/job-offer.component';
import {CreateJobOfferComponent} from '../../pages/JobOffer-Dashboard/create-job-offer/create-job-offer.component';
import {CreateInterviewComponent} from "../../pages/JobOffer-Dashboard/create-interview/create-interview.component";
import {UpdateJobOfferComponent} from "../../pages/JobOffer-Dashboard/update-job-offer/update-job-offer.component";
import {JobOfferDetailsComponent} from "../../pages/JobOffer-Dashboard/job-offer-details/job-offer-details.component";
import { CalendrierComponent } from 'src/app/pages/JobOffer-Dashboard/calendrier/calendrier.component';



//Begin Training section
import { CreateQuizComponent } from '../../pages/Training-Dashboard/create-quiz/create-quiz.component';
import { QuizDetailsComponent } from '../../pages/Training-Dashboard/quiz-details/quiz-details.component';
import { QuizListComponent } from '../../pages/Training-Dashboard/quiz-list/quiz-list.component';
import { UpdateQuizComponent } from '../../pages/Training-Dashboard/update-quiz/update-quiz.component';
import { TrainerListComponent } from '../../pages/Training-Dashboard/trainer-list/trainer-list.component';
//End Training section

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
/**ouma balti**/
  { path: 'inter',      component: CreateInterviewComponent },
  { path: 'add',      component: CreateJobOfferComponent },
  { path: 'update/:idOffer',      component: UpdateJobOfferComponent },
  { path: 'details/:idOffer',      component: JobOfferDetailsComponent },
  {path: 'JobOffer-Dashboard', component: JobOfferComponent},
  { path: 'calender',      component: CalendrierComponent  },

  /**end ouma balti**/

    {path: 'universityReq/:id', component: UniRequestComponent},
    { path: 'front-uni', component: FrontUniComponent },
  { path: 'addUniReq/:id', component: AddUniReqComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },

    { path: 'quiz-list',          component: QuizListComponent },
    { path: 'maps',           component: MapsComponent },

      //begin Training
      { path: '', redirectTo: 'quizs', pathMatch: 'full' },
      { path: 'quizs', component: QuizListComponent },
      { path: 'add', component: CreateQuizComponent },
      { path: 'update/:id', component: UpdateQuizComponent },
      { path: 'details/:id', component: QuizDetailsComponent },
      { path: 'trainer-list',component: TrainerListComponent},


      //end Training

    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'My-Requests',    component:  MyRequestsComponent },
  { path: 'UniversityDashboard',    component:  UniveristyDashboardComponent }


];
