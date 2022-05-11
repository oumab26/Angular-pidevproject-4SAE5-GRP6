import {Component, Input, OnInit} from '@angular/core';
import { JobOffer } from '../../../Model/JobOffer';
import { Router } from '@angular/router';
import { JobOfferService } from "../../JobOffer-Dashboard/Service/job-offer.service";

@Component({
  selector: 'app-create-job-offer',
  templateUrl: './create-job-offer.component.html',
  styleUrls: ['./create-job-offer.component.scss']
})
export class CreateJobOfferComponent implements OnInit {
  JobOffer: JobOffer = new JobOffer();


  constructor(private JobOfferService: JobOfferService,
              private router: Router) { }






  ngOnInit(): void {
  }

  saveEmployee(){

    this.JobOfferService.createJobOffer(this.JobOffer).subscribe(data=>{
        console.log(data);
        this.goToEmployeeList();
      },
      error=>console.log(error));

  }
  goToEmployeeList(){
    this.router.navigate(['/JobOffer-Dashboard']);
  }
  onSubmit(){
    console.log(this.JobOffer);
    this.saveEmployee();

  }


}
