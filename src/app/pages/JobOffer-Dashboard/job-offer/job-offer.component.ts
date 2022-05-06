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
  private data:any;
  JobOffer: Observable<JobOffer[]>;

  constructor(private JobOfferService: JobOfferService,
              private router: Router) {}
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.JobOffer= this.JobOfferService.getJobOfferList();
  }




  deleteJobOffer(idOffer: number) {
    this.JobOfferService.deleteJobOffer(idOffer).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }





  JobOfferDetails(idOffer: number){
    this.router.navigate(['details', idOffer]);
  }

  UpdateJobOffer(idOffer: number){
    this.router.navigate(['update', idOffer]);
  }

  /**
   UpdateJobOffer(){

    this.JobOfferService.updateJobOffer(jobOffer).subscribe(() => this.JobOfferService.getJobOfferList());
  }
   */





}
