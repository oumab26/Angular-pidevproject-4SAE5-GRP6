import {Component, forwardRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  Calendar,
  CalendarOptions,
  DateSelectArg,
  EventApi,
  EventInput,
  FullCalendarComponent
} from "@fullcalendar/angular";

import {JobOffer} from "../../../Model/JobOffer";

import { JobOfferService } from "../Service/job-offer.service";

import dayGridPlugin from "@fullcalendar/daygrid";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import interactionPlugin from "@fullcalendar/interaction";

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit{

  public calendarOptions: CalendarOptions;
  public page_title:string;
  public identity;
  public token;
  public timetable: JobOffer;
  public status:string;
  public dates;
  public date;
  public url;


  eventsCalendar: any[] = [];
  events: any[] = [];
  calendarEvents: EventInput[] = [];
  calendarApi: Calendar;
  initialized = false;


  constructor(
    private modal: NgbModal,
    private _route: ActivatedRoute,
    private _router: Router,
    private _timeTableService: JobOfferService,
  ){}

  ngOnInit() {
    setTimeout(() => {
    this._timeTableService.getJobOfferList().subscribe(
      response => {

        this.dates = response;
        console.log(this.dates);
        this.dates.forEach(e => {
          let calendarevent = {


            title: e.titleOffer,
            start: new Date(e.startDateoffer).toISOString(),
              end:new Date(e.endDateoffer).toISOString()
          };
          console.log(calendarevent);
          this.eventsCalendar.push(calendarevent);
        });
        this.calendarEvents =  this.eventsCalendar;
        console.log(this.eventsCalendar);
      });
    }, 2200);
    setTimeout(() => {
        this.calendarOptions = {


          displayEventTime: false,
          initialView: 'dayGridMonth',
          plugins: [dayGridPlugin, interactionPlugin],

          events:this.eventsCalendar,
        };
      }, 2500);

  }






}

