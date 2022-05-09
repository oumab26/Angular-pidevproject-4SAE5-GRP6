import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Post } from '../../Models/post.model';
import { PostServiceService } from '../../services/post-service.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  retrievedImage: any;
  title = 'Forum-module';
  closeResult: string;
  userFile:any = File;
  USER_ID:number  = 6;
  addPostForm!:FormGroup;
  addCommentForm!:FormGroup;
  posts:Post[];
  postEvaluation = new Array();
  postComments = new Array();
  counter = 0;
  excelent = new Array();
  meduim = new Array();
  low = new Array();
  filtredList:Post[];
  typed;
  locked = false;
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,private modalService: NgbModal,private postService:PostServiceService,private formBuilder:FormBuilder){

  }


  ngOnInit(): void {
    this.addPostForm = this.formBuilder.group({
      "postTitle":new FormControl(),
      "postDescription":new FormControl()
    })

    this.addCommentForm = this.formBuilder.group({
      "commentContent":new FormControl()
    })
  
    this.postService.getPostsByUserPreferences(6)
    .subscribe(data=>{
  
      this.posts = data;
      data.forEach(post=>{
        
        this.postService.getPostEvaluation(post.postId)
        .subscribe(data=>{
          this.postEvaluation.push(data);
          if(data!= null){
            if(data["rating"]!=null){
            
            }
            if(data.comments != null){
              data.comments.forEach(comment=>{
                this.postService.getUserPost(post.postId).subscribe(data=>{
                  //console.log(data)
                  data.forEach(evaluation=>{
                    if(evaluation.rating != null){
                      //console.log(evaluation.evaluatePostKey.userId + " : " + evaluation.rating);
                      if(this.USER_ID  == evaluation.evaluatePostKey.userId){
                        if(evaluation.rating == "HIGH"){
                          this.excelent.push(evaluation.evaluatePostKey.postId);

                        }
                        else if(evaluation.rating == "MEDUIM"){
                          this.meduim.push(evaluation.evaluatePostKey.postId);
                        }

                        else if(evaluation.rating == "LOW"){
                          this.low.push(evaluation.evaluatePostKey.postId);
                        }
                        //this.excelent.push({"level":"excelent","postId":post.postId,"decesion":true})
                        
                      }
                    }
                    //console.log(evaluation.rating)
                    if( evaluation.comment != null && comment.commentId == evaluation.comment.commentId && this.locked == false){
                      //console.log("One matching ...");
                      //console.log(evaluation.evaluatePostKey.userId);
                      let  i = new Array();
                      this.postService.getUserName(evaluation.evaluatePostKey.userId).subscribe(data=>{
                        //console.log(data['userName']);
                        let bytesView = new Uint8Array(comment.commentContent);
                        let text = new TextDecoder().decode(bytesView);
                        this.postComments.push(
                          {
                            "userName":data['userName'],
                            "commentContent": text,
                            "postId":post.postId
                          }
                        )
                        
                      })
                      

                    }
                    
                  })
                })
                
              })    
            }
            //console.log(data.emoji.LIKE)
            //console.log(data.emoji.LOVE)
          }
          
        })
      })   
    });
    //console.log(this.postEvaluation);
  
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("save")
      this.addPostTest();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  click(){
    console.log("stuff will appear here")
  }


  onFileChanged(event){
    const file = event.target.files[0];
    this.userFile = file;
    console.log("file is " + file)
  }

  addPostTest(){
    console.log("Trying to add post...")
    this.postService.addPost(this.userFile,this.USER_ID,this.addPostForm.value).subscribe(data=>console.log(data))
    //this.activatedRoute.snapshot.paramMap.get("forum");
  }

  deleteTest(){
    this.postService.deletePost(16).subscribe(data=>console.log(data))
  }

  updateTest(){
    this.postService.updatePost(0,this.userFile).subscribe(data=>{console.log(data)})
  }

  addComment(postId){
    console.log(btoa(this.addCommentForm.value.commentContent));  
    this.postService.addcomment(btoa(this.addCommentForm.value.commentContent),postId,this.USER_ID).subscribe(
      data=>{
        console.log(data);
        
      }
      
    )
  }

  hightRating(i,postId){
    let postRating = document.getElementsByClassName("fa-rocket");
    
    console.log(document.querySelectorAll('fa-rocket'));
    let element = postRating[i];
    element.setAttribute("style","color:#ff1493;")
    let audio = new Audio("/assets/sound.wav");
    audio.load();
    audio.play();
    console.log("posts number : " + i);
    this.addRating(postId,this.USER_ID,"HIGH");
    this.activatedRoute.snapshot.paramMap.get("forum");
  }

  meduimRating(i,postId){
       let postRating = document.getElementsByClassName("fa-star-half-o");
       //console.log(document.querySelectorAll('fa-rocket'));
       let element = postRating[i];
       element.setAttribute("style","color:#39ff14;")
       console.log("posts number : " + i)
       this.addRating(postId,this.USER_ID,"MEDUIM");
  }

  lowRating(i,postId){
    let postRating = document.getElementsByClassName("fa-star-o");
    let element = postRating[i];
    element.setAttribute("style","color:#ff4500;")
    console.log("posts number : " + i)
    this.addRating(postId,this.USER_ID,"LOW");
  }

  checkHigh(postId){
   if(this.excelent.includes(postId)){
     return true;
   }
  }
  checkMeduim(postId){
    if(this.meduim.includes(postId)){
      return true;
    }
   }

   checkLow(postId){
    if(this.low.includes(postId)){
      return true;
    }
   }


   addRating(postId,USER_ID,rating){
      this.postService.addEvaluationRating(postId,USER_ID,rating).subscribe(data=>{console.log(data)});
   }
   reactLove(i,postId){
     
     this.postEvaluation[i].emoji.LOVE = this.postEvaluation[i].emoji.LOVE+1;
     this.postService.addEvaluationEmoji(postId,this.USER_ID,"LOVE").subscribe(data=>console.log(data));
    
   }


   filterPosts(event){
     let value = event.target.value;
   
     if(this.typed.length==0){
      console.log("i'm here")
      this.locked = true;
      this.ngOnInit();
    }
    
      this.posts =  this.posts.filter(item=>{
        //console.log(item.postCategory.indexOf(value.toUpperCase()) != -1)
        return item.postCategory.indexOf(value.toUpperCase()) !== -1
       })
    
  
    //console.log(this.posts.length)
   }

  countPosts(){
    //console.log(this.posts)
    //console.log(this.filtredList)
    //this.posts = this.filtredList;
    //console.log(this.posts.length);
    console.log(this.posts);
    //this.ngOnInit();
  }
   

}
