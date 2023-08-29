import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  displayedColumns: string[] = ['id', 'title', 'body'];
 
posts:Post[]=[];
dataSource =this.posts;
constructor(private postService:PostService){}

ngOnInit():void{
  this.postService.getAll().subscribe((data => {
    this.posts=data;
    this.dataSource=this.posts;
    console.log(this.posts);
  }))
}

deletePost(id:number){
  this.postService.delete(id).subscribe((res => {
    this.posts= this.posts.filter( item => item.id!==id);
    console.log('Post deleted Successfully!')
  }))
}
}
