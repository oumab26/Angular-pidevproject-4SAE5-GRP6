import { Component, OnInit } from '@angular/core';
import {UniServiceService} from '../../Service/uni-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {University} from '../../university';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-univeristy-dashboard',
  templateUrl: './univeristy-dashboard.component.html',
  styleUrls: ['./univeristy-dashboard.component.scss']
})
export class UniveristyDashboardComponent implements OnInit {

  listUniversity!: University[]
  university!: University;
  form : boolean = false;
  EditUni: University;


  constructor(private uniService: UniServiceService) { }

  ngOnInit(): void {

    this.getAllUniversity();

    this.university = {
      idUniversityOffer:null,
      universityName: null,
      location: null,
      duration: null,
      tuitionFee: null,
      startDate: null,
      type: null,
      domain: null,
      language: null,
      image:null,
      learnType:null
    }

    this.EditUni = {
      idUniversityOffer:null,
      universityName: null,
      location: null,
      duration: null,
      tuitionFee: null,
      startDate: null,
      type: null,
      domain: null,
      language: null,
      image:null,
      learnType:null
    }

  }

  getAllUniversity(){
    this.uniService.getAllUniversity().subscribe((res) => {
      this.listUniversity = res
    })
  }

  addUniversity(U : University){
    console.log(U.startDate);
    this.uniService.addUniversity(U).subscribe(() => this.getAllUniversity());

  }

  deleteUniversity(idUniversityOffer : any){
    this.uniService.deleteUniversity(idUniversityOffer).subscribe(() => this.getAllUniversity())


  }

  FindUni(idUniversityOffer : any){
    console.log(idUniversityOffer)
    this.form = true;
    this.EditUni = this.listUniversity.find(x => x.idUniversityOffer === idUniversityOffer)
    console.log(this.EditUni.universityName)


  }

  ModifyUniversity(U : University){

    this.uniService.ModifyUniveristy(U).subscribe(() => this.getAllUniversity());
  }



}
