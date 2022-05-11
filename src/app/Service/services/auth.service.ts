import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
   apiUrl = 'http://localhost:8082/pidevBackEnd'
   USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
   headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

   public username: String;
  public password: String;
  authenticationService(username: String, password: String) {
    return this.http.get(this.apiUrl + '/auth/basicauth',
    { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }


  edituser(user){
    return this.http.post(this.apiUrl + '/user/user/Add',user)
  }

  getuserbyUsername(username){
    return this.http.get(this.apiUrl + '/user/ByuserName/'+ username)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  constructor(private http:HttpClient) { }

  getAllUsers(){
   return  this.http.get(this.apiUrl + '/user/users')
  }
  deleteUser(id){
    return  this.http.delete(this.apiUrl + '/user/User/delete/' + id)
 
  }
  register(user){
    return this.http.post(this.apiUrl + '/auth/registration',user)
  }
  login(username,password){
    return this.http.post(this.apiUrl + '/auth/basicauth', {username,password})
  }
}
