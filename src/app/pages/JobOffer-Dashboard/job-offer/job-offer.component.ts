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
  JobOffer: JobOffer[];
  public searchFilter: any = '';
  filterTerm: string;


  p: number = 1;
  total: number = 0;

  constructor(private JobOfferService: JobOfferService,
              private router: Router) {}
  ngOnInit() {
    this.reloadData();

  }

  reloadData() : void {
    this.JobOfferService.getJobOfferList().subscribe(
      (response) => {
        this.JobOffer = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );



  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  pageChangeEvent(event: number){
    this.p = event;
    this.JobOfferService.getJobOfferList();
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
