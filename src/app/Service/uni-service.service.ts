import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
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


  Apply(idUniversityOffer: any, R: UniRequest, file: any)
  {
    console.log(file)

    const formData = new FormData();
    formData.append('cv', file);
    formData.append('message',R.message)
    formData.append('etat',R.etat)

    console.log(formData.get('cv'))

    return this.httpClient.post(this.API_URL + '/pidevBackEnd/Request/Create' + "/3/" + idUniversityOffer,formData)
  }

  addUniversity(U : University,file: File){
    console.log(U.startDate);

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


  upload(file: File,idUniversityOffer: any, R: UniRequest): Observable<HttpEvent<any>> {
    console.log(idUniversityOffer)
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('message',R.message)
    formData.append('etat',R.etat)
    const req = new HttpRequest('POST', this.API_URL + '/pidevBackEnd/Request/Create' + "/3/" + idUniversityOffer, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.httpClient.request(req);
  }

  Rating(idUniversity:any)
  {
    return this.httpClient.get(this.API_URL + '/pidevBackEnd/RatingOfUniOff/' + idUniversity)
  }

  RateUni(idUniversity: any, score:any)
  {
    console.log(score)
    console.log(idUniversity)
    return this.httpClient.put(this.API_URL + '/pidevBackEnd/RateUniOff/' + idUniversity + "/" + score,null)

  }

Sort(PageNum,PageSize,SortBy,Type): Observable<University[]>
{
  let params = new HttpParams()
    .set('PageNo', PageNum)
    .set('PageSize', PageSize)
    .set('SortBy', SortBy)
    .set('Type', Type);
  return this.httpClient.get<University[]>(this.API_URL + '/pidevBackEnd/SortUniOff', {params: params})
}

  DisplayMyReqs(): Observable<UniRequest[]>
  {
    return this.httpClient.get<UniRequest[]>(this.API_URL + '/pidevBackEnd/Request/DisplayMyReq/' + 3)
  }



}
