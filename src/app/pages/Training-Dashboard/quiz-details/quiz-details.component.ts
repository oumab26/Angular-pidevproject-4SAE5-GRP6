import { Component, OnInit } from '@angular/core';

import { Quiz } from '../../../Model/quiz';
import { QuizService } from '../quiz.service';
import { QuizListComponent } from '../quiz-list/quiz-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {

  id: number;
  quiz:Quiz;

  constructor(private route: ActivatedRoute,private router: Router,
    private quizService: QuizService) { }

  ngOnInit(): void {
    this.quiz = new Quiz();
    this.id = this.route.snapshot.params['id'];
    
    this.quizService.getQuiz(this.id)
      .subscribe(data => {
        console.log(data)
        this.quiz = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['quizs']);
  }

}
