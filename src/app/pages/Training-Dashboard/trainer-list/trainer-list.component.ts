import { Component, OnInit } from '@angular/core';

import { Trainer } from '../../../Model/trainer';
import { TrainerService } from "../trainer.service";
import { Router } from '@angular/router';

import { DatePipe } from '@angular/common';


import { ElementRef, ViewChild } from '@angular/core';





@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {

  trainers: Trainer[];
  selectedTrainer: Trainer;
  trainerToAdd: Trainer;

  trainerCardSelected: boolean = false;

  IdTrainerToUpdate: number;
  updateRow_isHidden = true;
  completeList_isHidden = true;

  //for AddForm
  addFormIsHidden: boolean = true;





  constructor(private trainerService: TrainerService,
    private router: Router, public datepipe: DatePipe) { }


  ngOnInit(): void {
    this.getTrainers();

    this.selectedTrainer = {
      id: null,
      userName: null,
      email: null,
      password: null,
      country: null,
      adresse: null,
      fonenumber: null,
      DateOfBirth: null,
      educationlevel: null,
      job: null,
      domain: null,
      active: 1,
      isEnabled: 1
    }

    this.trainerToAdd = {
      id: null,
      userName: null,
      email: null,
      password: null,
      country: null,
      adresse: null,
      fonenumber: null,
      DateOfBirth: null,
      educationlevel: null,
      job: null,
      domain: null,
      active: 1,
      isEnabled: 1
    }


  }

  private getTrainers() {

    this.trainerService.getTrainersList().subscribe((data) => {
      console.log(data);

      this.trainers = data;

    });
  }
  displayAllTrainers() {
    console.log("displayAllTrainers function entered.... ");
    this.completeList_isHidden = false;
    this.updateRow_isHidden = true; //////
    this.getTrainers();
  }
  displaySelectedTrainer(id: number, trainer: Trainer) {
    console.log(this.trainerCardSelected);
    this.trainerCardSelected = true;
    console.log(this.trainerCardSelected);
    this.selectedTrainer = trainer;

    
  }

  displayUpdateRow(trainer: Trainer, id: number) {
    this.selectedTrainer = trainer;
    this.IdTrainerToUpdate = id;
    this.updateRow_isHidden = false;
    console.log("update row displayed for trainer: " + this.IdTrainerToUpdate + "," + this.selectedTrainer.userName);

  }

  updateTrainer(trainer: Trainer) {

    console.log("update function entered for trainer  : ");

    if (confirm("Are you sure to update trainer with following name ? " + trainer.userName)) {
      // this.datepipe.transform(trainer.DateOfBirth, 'dd/MM/yyyy');
      this.trainerService.updateTrainer(trainer).subscribe();

    }
  }

  displayAddForm() {
    this.addFormIsHidden = false;
  }

  hideAddForm() {
    this.addFormIsHidden = true;

  }

  addTrainer(trainer: Trainer) {

    console.log("addTrainer Function entered..");

    let dateString = this.trainerToAdd.DateOfBirth;
    let newDate = new Date(dateString);
    trainer.DateOfBirth = newDate;

    console.log(trainer.DateOfBirth);
    this.trainerService.createTrainer(trainer).subscribe(() => this.getTrainers());
    console.log("End Of addTrainer function ..");
  }

  deleteTrainer(trainer: Trainer, id: number) {

    if (confirm("Are you sure to delete trainer with following name ? " + trainer.userName)) {
      trainer.active = 0;
      this.trainerService.updateTrainer(trainer).subscribe();
      window.alert("trainer : " + trainer.userName + "deleted successfully ");
      this.getTrainers();



    }


  }




  /* @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
 
   triggerFalseClick() {
     let el: HTMLElement = this.myDiv.nativeElement;
     el.click();
   }
   checkIfActive(trainer: Trainer) {
     console.log("checkIfActive function es entered for trainer: "+ trainer.userName);
     if (trainer.active == 0)
       this.trainerIsActive = false;
     else
       this.trainerIsActive = true;
 
   }*/




  /*editProduct(id: number){
    this.productService.editProduct(product).subscribe();
  }*/
  /**  quizDetails(id: number) {
     this.router.navigate(['quiz-details', id]);
   }
 
  
 
  
   } */

}
