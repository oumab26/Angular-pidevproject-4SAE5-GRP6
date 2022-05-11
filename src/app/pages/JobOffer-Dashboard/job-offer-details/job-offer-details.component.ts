import { Component, OnInit } from '@angular/core';
import { JobOffer} from '../../../Model/JobOffer';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOfferService } from '../../JobOffer-Dashboard/Service/job-offer.service';


@Component({
  selector: 'app-job-offer-details',
  templateUrl: './job-offer-details.component.html',
  styleUrls: ['./job-offer-details.component.scss']
})
export class JobOfferDetailsComponent implements OnInit {


  idOffer: number;
  JobOffer: JobOffer;

  constructor(private route: ActivatedRoute,private JobOfferService: JobOfferService,
              private router: Router) { }

  ngOnInit() {
    this.JobOffer = new JobOffer();

    this.idOffer = this.route.snapshot.params['idOffer'];

    this.JobOfferService.getJobOffer(this.idOffer)
      .subscribe(data => {
        console.log(data)
        this.JobOffer = data;
      }, error => console.log(error));
  }



  list() {
    this.router.navigate(['/JobOffer']);
  }


}
