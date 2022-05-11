import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../Model/quiz';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent implements OnInit {

  id: number;
  quiz: Quiz = new Quiz();
  constructor(private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.quizService.getQuiz(this.id).subscribe(data => {
      this.quiz = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.quizService.updateQuiz(this.id, this.quiz).subscribe( data =>{
      this.goToQuizList();
    }
    , error => console.log(error));
  }

  goToQuizList(){
    this.router.navigate(['/employees']);
  }

}
