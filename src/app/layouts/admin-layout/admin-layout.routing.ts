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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'university-dashboard', component: UniveristyDashboardComponent },
    {path: 'universityReq/:id', component: UniRequestComponent},
    { path: 'front-uni', component: FrontUniComponent },
  { path: 'addUniReq/:id', component: AddUniReqComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'My-Requests',    component:  MyRequestsComponent }
];
