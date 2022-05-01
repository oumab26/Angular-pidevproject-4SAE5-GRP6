import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer } from '../../../Model/JobOffer';
@Injectable({
  providedIn: 'root'
})

export class JobOfferService {

  private baseUr = 'http://localhost:8082/pidevBackEnd';
  private baseUrl = 'http://localhost:8082/pidevBackEnd/Jobs';
  private baseUrl2 = 'http://localhost:8082/pidevBackEnd/Jobs/Add';
  private baseUrl3 = 'http://localhost:8082/pidevBackEnd/Jobsdelete';
 
  readonly API_URL = 'http://localhost:8082';
  
  constructor(private http: HttpClient) { }

  
  getJobOffer(idOffer: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idOffer}`);
  }
  
  

  updateJobOffer(JobOffer:JobOffer): Observable<Object> {
    return this.http.put(this.API_URL + '/pidevBackEnd/Jobs/Update/', JobOffer);
 
  }
  
  

  deleteJobOffer(idOffer: any)  : Observable<any> {
   
    return this.http.delete(this.API_URL + '/pidevBackEnd/Jobsdelete/' +idOffer);
  }

  getJobOfferList() {
    return this.http.get<JobOffer[]>(this.baseUrl);

  
  }
  createJobOffer(jobOffer: JobOffer) : Observable<Object>{
    console.log(JobOffer)
    return this.http.post(`${this.baseUrl2}`, jobOffer);
    
  }
}
