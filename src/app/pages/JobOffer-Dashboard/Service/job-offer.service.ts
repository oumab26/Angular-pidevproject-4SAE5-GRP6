import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer } from '../../../Model/JobOffer';
import { Interview} from '../../../Model/Interview';
import {  HttpEvent, HttpRequest } from '@angular/common/http';
import {HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JobOfferService {

  private baseUr = 'http://localhost:8082/pidevBackEnd';
  private baseUrl = 'http://localhost:8082/pidevBackEnd/Jobs';
  private baseUrl2 = 'http://localhost:8082/pidevBackEnd/Jobs/Add';
  private baseUrl3 = 'http://localhost:8082/pidevBackEnd/Jobsdelete';
  private baseUrl4 = 'http://localhost:8082/pidevBackEnd/Interview/Add';
  readonly API_URL = 'http://localhost:8082';
  private baseUrl5 = 'http://localhost:8082/pidevBackEnd/Jobs/Update';
  private baseUrl6 = 'http://localhost:8082/pidevBackEnd/Search/';
  private baseUrl7 = 'http://localhost:8082/pidevBackEnd/Fav/export/pdf';



  constructor(private http: HttpClient) { }


 exportpdfJobOffer():Observable<Blob>{
   return this.http.get(`${this.API_URL}/Fav/export/pdf`,{responseType:'blob'});
 }

  getJobOffer(idOffer: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idOffer}`);
  }

  updateJobOffer(jobOffer:JobOffer): Observable<JobOffer>  {
    return this.http.put<JobOffer>(`${this.baseUrl5}`,jobOffer) ;

  }


  deleteJobOffer(idOffer: any) : Observable<any>  {

    return this.http.delete(this.API_URL + '/pidevBackEnd/Jobsdelete/' +idOffer);
  }


  getJobOfferList() {
    return this.http.get<JobOffer[]>(this.baseUrl);


  }

  createJobOffer(jobOffer: JobOffer) : Observable<Object>{
    console.log(JobOffer)
    return this.http.post(`${this.baseUrl2}`, jobOffer);

  }
  createInterview(inter: Interview) : Observable<Object>{
    console.log(inter)
    return this.http.post(`${this.baseUrl4}`, inter);

  }




}
