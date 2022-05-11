import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private auth:AuthService) { }
  user
  

  userName
  email
  fonenumber
  country 
  waiting=false
  success=false
  job

// educationlevel
  adresse='oiis'
  ngOnInit() {
    this.auth.getuserbyUsername(this.auth.username).subscribe(result=>{
       this.user=result;
       
     this.userName = this.user['userName']
       
      this.fonenumber = this.user['fonenumber']
      this.country = this.user['country']
       this.email = this.user.email
       this.adresse = this.user.adresse
       this.job = this.user.job
       // this.educationlevel = result['educationlevel']
      this.waiting=true
      
    })
   

  }
  edit(ev){
    let user ={
      "id":this.user['id'],
      "adresse":ev.target.adresse.value,
      "country":ev.target.country.value,
      "fonenumber": ev.target.fonenumber.value,
      "email": ev.target.email.value,
      "dateOfBirth": this.user.dateOfBirth,
      "educationlevel": this.user['educationlevel'],
      "job":ev.target.job.value,
      "password":this.user['password'],
      "isEnabled":1,
      'active':1,
      "userName": ev.target.userName.value
    } 
    this.auth.edituser(user).subscribe(result=>{
      console.log(result);
      this.success=true
    })

  }

}
