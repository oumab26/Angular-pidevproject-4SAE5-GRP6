import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../../Model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseURL = 'http://localhost:8090/pidevBackEnd';
 

  constructor(private httpClient: HttpClient) { }
  
  getQuizsList(): Observable<Quiz[]>{
    return this.httpClient.get<Quiz[]>(`${this.baseURL  + '/quizs'}`);
  }

  createQuiz(quiz: Quiz): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, quiz);
  }

  getQuiz(id: number): Observable<Quiz>{
    return this.httpClient.get<Quiz>(`${this.baseURL}/${id}`);
  }

  updateQuiz(id: number, quiz: Quiz): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, quiz);
  }

  deleteQuiz(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
