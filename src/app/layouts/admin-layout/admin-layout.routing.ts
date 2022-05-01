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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent }, 
    { path: 'add',      component: CreateJobOfferComponent },
    { path: 'university-dashboard', component: UniveristyDashboardComponent },
    {path: 'universityReq/:id', component: UniRequestComponent},
    {path: 'JobOffer-Dashboard', component: JobOfferComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
