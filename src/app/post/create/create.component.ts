import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
form!:FormGroup;

 constructor(private postService:PostService,private router:Router){}
 ngOnInit():void{
  this.form=new FormGroup({
    title:new FormControl('',[Validators.required]),
    body:new FormControl('',[Validators.required])
  });
 }

 get f(){
  return this.form.controls;
 }

 submit(){
  console.log(this.form.value);
  this.postService.create(this.form.value).subscribe((res:any)=>{
    console.log('Post created Successfully');
    this.router.navigateByUrl('post/index');
  })
 }
}
