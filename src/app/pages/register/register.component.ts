import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  
    adresse
    country
    fonenumber
    email
    password
    dateOfBirth
    educationlevel
    job
    userName
  
  constructor(private auth:AuthService, private router:Router ) { }

  ngOnInit() {
  }
  create(){

    let user ={
      "adresse":this.adresse,
      "country":this.country,
      "fonenumber": this.fonenumber,
      "email": this.email,
      "password":this.password,
      "dateOfBirth": this.dateOfBirth,
      "educationlevel": this.educationlevel,
      "job":this.job,
      "userName": this.userName
    } 
    this.auth.register(user).subscribe(result=>{
      console.log(result)
      this.router.navigate(['/login'])

    })
  }
  login(){
    
  }
  
}
