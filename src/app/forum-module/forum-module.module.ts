import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ForumRoutingModuleModule } from './forum-module-routing.module';
import { ForumComponent } from './components/forum/forum.component';
import { MainCompoenet } from './main.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    MenuComponent,
    ForumComponent,
    MainCompoenet,
    ChatComponent
    
  ],
  imports: [
    CommonModule,
    ForumRoutingModuleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
})
export class ForumModuleModule { }
