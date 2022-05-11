import { Component, OnInit } from '@angular/core';
import { Interview } from '../../../Model/Interview';
import { Router } from '@angular/router';
import { JobOfferService } from "../../JobOffer-Dashboard/Service/job-offer.service";

@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.scss']
})
export class CreateInterviewComponent implements OnInit {


  Interview: Interview = new Interview();


  constructor(private JobOfferService: JobOfferService,
              private router: Router) { }






  ngOnInit(): void {
  }

  saveEmployee(){
    this.JobOfferService.createInterview(this.Interview).subscribe(data=>{
        console.log(data);
        this.goToEmployeeList();
      },
      error=>console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/JobOffer']);
  }
  on(){
    console.log(this.Interview);
    this.saveEmployee();
  }



}
