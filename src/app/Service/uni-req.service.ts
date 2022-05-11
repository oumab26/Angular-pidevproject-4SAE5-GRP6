import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UniRequest} from '../uni-request';

@Injectable({
  providedIn: 'root'
})
export class UniReqService {
  readonly API_URL = 'http://localhost:2223';

  constructor(private httpClient: HttpClient) { }

  getAllUniReqs(idUniversityOffer : any) :Observable<UniRequest[]>
  {
    return this.httpClient.get<UniRequest[]>(this.API_URL + '/pidevBackEnd/DisplayUniReq/' + idUniversityOffer)
  }

  DisplayMyReqs(): Observable<UniRequest[]>
  {
    return this.httpClient.get<UniRequest[]>(this.API_URL + '/pidevBackEnd/DisplayMyReq/' + 3)
  }
}
