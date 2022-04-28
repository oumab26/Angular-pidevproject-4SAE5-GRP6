import { Component, OnInit } from '@angular/core';
import {UniServiceService} from '../../Service/uni-service.service';
import {ActivatedRoute} from '@angular/router';
import {UniRequest} from '../../uni-request';

@Component({
  selector: 'app-uni-request',
  templateUrl: './uni-request.component.html',
  styleUrls: ['./uni-request.component.scss']
})
export class UniRequestComponent implements OnInit {

  request: UniRequest;
  listRequest!: UniRequest[];
  IdUni: any;


  constructor(private uniService: UniServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.IdUni = params['id'])
    this.getAllRequests(this.IdUni)



  }

  getAllRequests(idUniversityOffer : any)
  {
    this.uniService.getAllUniReqs(idUniversityOffer).subscribe((res) => {
      this.listRequest = res;
    })
  }

  DownloadCV(id: any, idUniversityOffer: any)
  {
    this.uniService.DownloadCV(id, idUniversityOffer).subscribe()
  }

  Accept(id: any, idUniversityOffer: any)
  {
    this.uniService.Accept(id, idUniversityOffer).subscribe(() => this.getAllRequests(idUniversityOffer))
  }



}
