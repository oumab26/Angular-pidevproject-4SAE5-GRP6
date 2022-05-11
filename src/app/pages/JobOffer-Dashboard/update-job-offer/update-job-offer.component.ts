import { Component, OnInit } from '@angular/core';
import { JobOffer} from '../../../Model/JobOffer';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOfferService } from '../../JobOffer-Dashboard/Service/job-offer.service';

@Component({
  selector: 'app-update-job-offer',
  templateUrl: './update-job-offer.component.html',
  styleUrls: ['./update-job-offer.component.scss'],
  providers:[JobOffer]
})
export class UpdateJobOfferComponent implements OnInit {



  idOffer: number;
  //jobOffer: JobOffer;

  constructor(public jobOffer:JobOffer,private route: ActivatedRoute,private JobOfferService: JobOfferService,
              private router: Router) { }



  ngOnInit() {

    this.idOffer = this.route.snapshot.params['idOffer'];
    this.JobOfferService.getJobOffer(this.idOffer)

      .subscribe(data => {
        // console.log(data)
        this.jobOffer = data;
        console.log(this.jobOffer)
      }, error => console.log(error));

  }

  updateJobOffer() {
    console.log(this.jobOffer);
    this.JobOfferService.updateJobOffer( this.jobOffer)
      .subscribe(data => {
        console.log(data);

        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateJobOffer();
  }

  gotoList() {
    this.router.navigate(['/JobOffer-Dashboard']);
  }


}
