import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../../Model/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseURL = 'http://localhost:8090/pidevBackEnd';

  constructor(private httpClient: HttpClient) { }

  getTrainersList(): Observable<Trainer[]>{
    return this.httpClient.get<Trainer[]>(`${this.baseURL  + '/trainers'}`);
  }

  createTrainer(trainer: Trainer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL + '/trainer/add'}`, trainer);
  }

  

  getTrainer(id: number): Observable<Trainer>{
    return this.httpClient.get<Trainer>(`${this.baseURL + '/trainer/add' }/${id}`);
  }

  //updateTrainer(id: number, trainer: Trainer): Observable<Object>{
    updateTrainer(trainer: Trainer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL + '/trainer/update'}`, trainer);
  }

  deleteTrainer(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
