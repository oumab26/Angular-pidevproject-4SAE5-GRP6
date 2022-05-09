import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Post } from '../Models/post.model';
import { EvaluationPost } from '../models/evaluationPost.model';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {


  BASE_URL  = "http://localhost:8082/pidevBackEnd/";

  static_Example= {
    postDescription:"Angular Post",
    postTitle:"Test Angular Title"
  }

  constructor(public http:HttpClient) {
    this.http = http 
  }

  addPost(file,userId,post):Observable<Post>{
    const content :FormData = new FormData();
    content.append('details',JSON.stringify(post));
    content.append('file',file);
    console.log(content);
    console.log(this.BASE_URL+"addPostFile/"+userId)
    return this.http.post<Post>(this.BASE_URL+"addPostFile/"+userId,content);
  }



  deletePost(postId:number){
    console.log()
    return this.http.delete(this.BASE_URL+"deletePost/"+postId)
  }


  updatePost(postId,file){
    const content :FormData = new FormData();
    content.append('file',file);
    console.log(content)
    return this.http.put<Post>(this.BASE_URL+"updatePostFile/"+"19",content);
  }


  /*getPost(){
    let link = "http://localhost:8082/pidevBackEnd/getPost/7"
    return this.http.get<Post>("http://localhost:8082/pidevBackEnd/getPost/19");

  }*/

  getPostsByUserPreferences(userId):Observable<Post[]>{
    //http://localhost:8082/pidevBackEnd/getPostsByUserPreferences/1
    let end_point = this.BASE_URL+"getPostsByUserPreferences/"+userId;
    return this.http.get<Post[]>(end_point);
    
  }

  getPostEvaluation(postId):Observable<EvaluationPost>{
    return this.http.get<EvaluationPost>(this.BASE_URL+"evaluatePostRatingByPostId/"+postId);
  }
  getUserPost(postId):Observable<evaluationDetails[]>{
    return this.http.get<evaluationDetails[]>(this.BASE_URL+"getAllEvaluationPostByPostId/"+postId);
  }

  getUserName(userId){
    return this.http.get<evaluationDetails[]>(this.BASE_URL+"getUser/"+userId);
  }

  addcomment(commentContent,postId,userId){
    let comment = {}
    comment['commentContent'] = commentContent;
    console.log(comment);
    //http://localhost:8082/pidevBackEnd/addEvaluatePostText/22/3
    //console.log(comment);
    return this.http.post(this.BASE_URL+"addEvaluatePostText/"+postId+"/"+userId,{"commentContent":commentContent});

  }

  addEvaluationRating(postId,userId,rating){
    console.log(this.BASE_URL+"evaluatePostRating"+"/"+postId+"/"+userId);
    let ratingEvaluation = {};
    ratingEvaluation["rating"] = rating;
    return this.http.post(this.BASE_URL+"evaluatePostRating"+"/"+postId+"/"+userId,ratingEvaluation);
  }
  addEvaluationEmoji(postId,userId,emoji){
    let emojiEvaluation = {};
    emojiEvaluation["emoji"]=emoji;
    return this.http.post(this.BASE_URL+"evaluatePostEmoji"+"/"+postId+"/"+userId,emojiEvaluation);

  }
  
}
