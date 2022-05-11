import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ForumComponent } from './components/forum/forum.component';



const routes: Routes = [{ path: '', component:ForumComponent},
 {path:"chat",component:ChatComponent},
// {path:"welcome",component:ForumComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModuleModule { }
