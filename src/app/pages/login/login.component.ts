import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public auth:AuthService, private router:Router) {}

  username
  password
  ngOnInit() {
   }
  ngOnDestroy() {
  }

  login(){
    this.auth.authenticationService(this.username,this.password).subscribe(result=>{
      if(result==undefined)
        console.log("authenthicated successfully")
        this.auth.username = this.username
        this.router.navigate(['/user-profile'])
    })

  }

}
