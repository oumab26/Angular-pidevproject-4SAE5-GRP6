import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniReqService {
  readonly API_URL = 'http://localhost:2223';

  constructor(private httpClient: HttpClient) { }

  getAllUniReqs(idUniversityOffer : any) :Observable<Request[]>
  {
    return this.httpClient.get<Request[]>(this.API_URL + '/pidevBackEnd/DisplayUniReq/' + idUniversityOffer)
  }
}
