import { Component, OnInit } from '@angular/core';
import {UniRequest} from '../../uni-request';
import {UniServiceService} from '../../Service/uni-service.service';
import {ActivatedRoute} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-uni-req',
  templateUrl: './add-uni-req.component.html',
  styleUrls: ['./add-uni-req.component.scss']

})
export class AddUniReqComponent implements OnInit {

  request: UniRequest;
  listRequest!: UniRequest[];
  Id: any;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  constructor(private uniService: UniServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => this.Id = params['id'])

    this.request = {
      requestPK: null,
      cv: null,
      message: null,
      etat: false,
      UniName: null
    }


  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload(req : UniRequest) {
    console.log(this.Id)
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uniService.upload(this.currentFile,this.Id,req).subscribe();
  }

  /*ApplyToUni(R: UniRequest)
  {

    console.log(this.file)
    this.uniService.Apply(this.Id,R,this.file).subscribe();
  }*/



}
