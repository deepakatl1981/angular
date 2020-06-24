import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Blogpost } from '../blogpost';
import { MinimisePipe } from '../minimise.pipe';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation : ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {

  @Input() post :Blogpost;
  originalSummary : string;
  isFav : boolean;
  constructor(private minimisePipe : MinimisePipe) { }

  ngOnInit(): void {
    

  }

  favourite(){
    this.isFav = !this.isFav;
  }

  maximise(){
    console.log(this.originalSummary)
    this.post.summary = this.originalSummary;

  }

  minimise(){
    console.log("BlogPost minimise ")
    this.originalSummary = this.post.summary;
    this.post.summary = this.minimisePipe.transform(this.post.summary, 20);
  }

}
