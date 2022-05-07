import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer } from '../../../Model/JobOffer';
import { Interview} from '../../../Model/Interview';
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



  constructor(private http: HttpClient) { }


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

  search(JobOffer:JobOffer)
  {
    let url = this.baseUrl4 + "keyword";
    return  this.http.post(url , JobOffer);

  }



  private url = 'http://localhost:8082/pidevBackEnd/Jobs/page/';



  getJobOfferPage(page: number){
    return this.http.get(this.url + '?page=' + page);
  }

}
