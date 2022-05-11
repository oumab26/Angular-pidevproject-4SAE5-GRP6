import { Component, OnInit } from '@angular/core';
import {UniServiceService} from '../../Service/uni-service.service';
import {UniRequest} from '../../uni-request';
import {UniveristyDashboardComponent} from '../univeristy-dashboard/univeristy-dashboard.component';
import {University} from '../../university';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {

  listRequest!: UniRequest[];
  UniName: any;
  listUni: University[];

  constructor(private uniService: UniServiceService) { }

  ngOnInit(): void {
    this.getAllUniversity()
    this.GetMyReqs()



    //this.listUni = this.UniComp.listUniversity
    //console.log(this.listUni.find(x => x.idUniversityOffer == 8))
  }


  GetMyReqs()
  {
    this.uniService.DisplayMyReqs().subscribe((res) => {
      this.listRequest = res
      this.listRequest.forEach(x => x.UniName = (this.listUni.find(z => z.idUniversityOffer == x.requestPK.idUniversityOffer).universityName))
    })
  }

  getAllUniversity(){

    this.uniService.getAllUniversity().subscribe((res) => {
      this.listUni = res
    })
  }

  /*FindUniReq(id:any): string
  {
    console.log(this.listUni.find(x => x.idUniversityOffer == id).universityName)
    return this.listUni.find(x => x.idUniversityOffer == id).universityName
  }*/

}
