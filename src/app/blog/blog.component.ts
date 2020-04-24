import { Component, OnInit, Input } from '@angular/core';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() post :Blogpost;
 

  constructor() { }

  ngOnInit(): void {
 
  }

}
