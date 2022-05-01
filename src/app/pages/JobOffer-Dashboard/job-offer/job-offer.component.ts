import { Component, OnInit } from '@angular/core';
import { JobOffer } from "../../../Model/JobOffer";
import { JobOfferService } from "../Service/job-offer.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {

  JobOffer: Observable<JobOffer[]>;

  constructor(private JobOfferService: JobOfferService,
  private router: Router) {}
  ngOnInit() {
    this.reloadData();
  }
    
  reloadData() {
    this.JobOffer= this.JobOfferService.getJobOfferList();
  }



  addJobOffer(U : JobOffer){
    
    this.JobOfferService.createJobOffer(U).subscribe(() => this.JobOfferService.getJobOfferList());

  }

  deleteJobOffer(idOffer : any){
    this.JobOfferService.deleteJobOffer(idOffer).subscribe(() =>this.JobOfferService.getJobOfferList())


  }


  UpdateJobOffer(U : JobOffer){

    this.JobOfferService.updateJobOffer(U).subscribe(() => this.JobOfferService.getJobOfferList());
  }

}
