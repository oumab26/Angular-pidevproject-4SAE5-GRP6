import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },

    { path: '/quiz-list', title: 'Trainings',  icon:'ni-planet text-blue', class: '' },

    { path: '/forum', title: 'Forum',  icon:'fa fa-comment text-danger', class: '' },


    { path: '/UniversityDashboard', title: 'University Dashboard',  icon: 'ni-ruler-pencil text-primary', class: '' },
    { path: '/front-uni', title: 'University',  icon: 'ni-hat-3 text-primary ', class: '' },

    { path: '/JobOffer-Dashboard', title: 'Job Offer',  icon: 'ni ni-briefcase-24', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
