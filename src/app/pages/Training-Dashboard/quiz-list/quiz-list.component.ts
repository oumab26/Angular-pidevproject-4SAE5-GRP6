import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../Model/quiz';

import { QuizDetailsComponent } from '../quiz-details/quiz-details.component';
import { Observable } from "rxjs";
import { QuizService } from "../quiz.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {  
  
  quizs: Quiz[];
  quiz : Quiz;


  constructor(private quizService: QuizService,
    private router: Router) { }

  ngOnInit(): void {
    /*this.quiz = {
     id: null,
    quizName: null  }*/ 
   
    this.getQuizs();
  }

  private getQuizs(){
    this.quizService.getQuizsList().subscribe((data) => {
      console.log(data);
      this.quizs = data;
    });
  }
   quizDetails(id: number) {
    this.router.navigate(['quiz-details', id]);
  }

  updateQuiz(id: number){
    this.router.navigate(['update-quiz', id]);
  }

  deleteQuiz(id: number){
    this.quizService.deleteQuiz(id).subscribe( data => {
      console.log(data);
      this.getQuizs();
    })
  }

}
