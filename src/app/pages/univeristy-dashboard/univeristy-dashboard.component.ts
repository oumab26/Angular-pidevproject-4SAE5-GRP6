import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UniServiceService} from '../../Service/uni-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {University} from '../../university';
import {Observable} from 'rxjs';
import { countries } from 'src/app/country-data-store';

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
  @Output() newItemEvent = new EventEmitter<string>();
  UniName:any;
  usa:any = "us";
  public countries:any = countries
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;

  addNewItem(Name: string,Lang:string,Fee:string,Dom:string,Date:string,Type:string,Loc:string,Dur:string,Img:string,Learn:string) {

    this.EditUni.universityName = Name
    this.EditUni.language = Lang
    this.EditUni.tuitionFee = Fee
    this.EditUni.domain = Dom
    this.EditUni.startDate = Date
    this.EditUni.type = Type
    this.EditUni.location = Loc
    this.EditUni.duration = Dur
    this.EditUni.image = Img
    this.EditUni.learnType = Learn
    this.ModifyUniversity()

    console.log(this.EditUni.universityName)
  }


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
      learnType:null,
      score:null,
      code:null
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
      learnType:null,
      score:null,
      code:null
    }

  }

  getAllUniversity(){

    this.uniService.getAllUniversity().subscribe((res) => {
      this.listUniversity = res
      this.listUniversity.forEach(x => x.code = (countries.find(z => z.name == x.location).code).toLowerCase())
    })
  }

  addUniversity(U : University){
    console.log(U.startDate);
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uniService.addUniversity(U,this.currentFile).subscribe(() => this.getAllUniversity());

  }

  deleteUniversity(idUniversityOffer : any){
    this.uniService.deleteUniversity(idUniversityOffer).subscribe(() => this.getAllUniversity())


  }

  FindUni(idUniversityOffer : any){
    console.log(idUniversityOffer)
    this.form = true;
    this.EditUni = this.listUniversity.find(x => x.idUniversityOffer === idUniversityOffer)
    console.log(this.EditUni)
  }

  ModifyUniversity(){
    this.uniService.ModifyUniveristy(this.EditUni).subscribe(() => this.getAllUniversity());
    console.log(this.newItemEvent)
    this.form = false;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }



}
