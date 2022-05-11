import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';


//Begin Training section
import { CreateQuizComponent } from '../../pages/Training-Dashboard/create-quiz/create-quiz.component';
import { QuizDetailsComponent } from '../../pages/Training-Dashboard/quiz-details/quiz-details.component';
import { QuizListComponent } from '../../pages/Training-Dashboard/quiz-list/quiz-list.component';
import { UpdateQuizComponent } from '../../pages/Training-Dashboard/update-quiz/update-quiz.component';
import { TrainerListComponent } from '../../pages/Training-Dashboard/trainer-list/trainer-list.component';
//End Training section

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
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
      { path: 'trainer-list',component: TrainerListComponent}

      
      //end Training 
];
