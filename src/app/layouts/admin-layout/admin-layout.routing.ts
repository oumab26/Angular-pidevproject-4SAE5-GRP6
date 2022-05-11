import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {UniveristyDashboardComponent} from '../../pages/univeristy-dashboard/univeristy-dashboard.component';
import {UniRequestComponent} from '../../pages/uni-request/uni-request.component';
import {JobOfferComponent} from '../../pages/JobOffer-Dashboard/job-offer/job-offer.component';
import {CreateJobOfferComponent} from '../../pages/JobOffer-Dashboard/create-job-offer/create-job-offer.component';
import {CreateInterviewComponent} from "../../pages/JobOffer-Dashboard/create-interview/create-interview.component";
import {UpdateJobOfferComponent} from "../../pages/JobOffer-Dashboard/update-job-offer/update-job-offer.component";
import {JobOfferDetailsComponent} from "../../pages/JobOffer-Dashboard/job-offer-details/job-offer-details.component";
import { CalendrierComponent } from 'src/app/pages/JobOffer-Dashboard/calendrier/calendrier.component';

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
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
