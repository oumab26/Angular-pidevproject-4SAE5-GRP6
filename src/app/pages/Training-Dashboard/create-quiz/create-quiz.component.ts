import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';
import { Quiz } from '../../../Model/quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

  quiz: Quiz = new Quiz();
  submitted = false;

  constructor(private quizService: QuizService,
    private router: Router) { }

  ngOnInit(): void {
    this.submitted = false;
    this.quiz = new Quiz();
  }

  save() {
    this.quizService
    .createQuiz(this.quiz).subscribe(data => {
      console.log(data)
      this.quiz = new Quiz();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/quizs']); //////////////path !! to check
  }

}
