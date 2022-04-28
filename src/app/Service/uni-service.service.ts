import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {University} from '../university';
import {sortTasksByPriority} from '@angular/compiler-cli/ngcc/src/execution/tasks/utils';
import {isElementScrolledOutsideView} from '@angular/cdk/overlay/position/scroll-clip';
import {UniRequest} from '../uni-request';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
};

@Injectable({
  providedIn: 'root'
})
export class UniServiceService {
  readonly API_URL = 'http://localhost:2223';

  constructor(private httpClient: HttpClient) {}

  getAllUniversity() : Observable<University[]>{
    return this.httpClient.get<University[]>(this.API_URL + '/pidevBackEnd/Display')
  }

  addUniversity(U : University) {
    console.log(U.startDate);
  let file: File = null
    const formData = new FormData();
    formData.append('file', file);
    formData.append("universityName", U.universityName)
    formData.append("location", U.location)
    formData.append("duration", U.duration)
    formData.append("tuitionFee", U.tuitionFee)
    formData.append("startDate", U.startDate)
    formData.append("type", U.type)
    formData.append("domain", U.domain)
    formData.append("language", U.language)
    formData.append("learnType", U.learnType)
    formData.append("image", U.image)



console.log(formData.get("startDate"));

    return this.httpClient.post(this.API_URL + '/pidevBackEnd/Create'+"/2", formData)
  }

  deleteUniversity(idUniversityOffer : any){
    return this.httpClient.delete(this.API_URL + '/pidevBackEnd/Remove/' + idUniversityOffer)
  }

  ModifyUniveristy(U: University){

    return this.httpClient.put(this.API_URL + '/pidevBackEnd/Update',U)
  }

  getAllUniReqs(idUniversityOffer : any) :Observable<UniRequest[]>
  {
    return this.httpClient.get<UniRequest[]>(this.API_URL + '/pidevBackEnd/DisplayUniReq/' + idUniversityOffer)
  }

  DownloadCV(id: any, idUniversityOffer:any)
  {
    return this.httpClient.get(this.API_URL + '/pidevBackEnd/Request/DownloadCV/' + id + "/" + idUniversityOffer)
  }

  Accept(id: any, idUniversityOffer: any)
  {
    return this.httpClient.put(this.API_URL + '/pidevBackEnd/Request/Accept/' + id + "/" + idUniversityOffer, null)
  }



}
