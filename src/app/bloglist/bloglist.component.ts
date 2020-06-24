import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Blogpost } from '../blogpost';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  bloglists : Blogpost[][];
  currentPage : number;
  @ViewChildren('blog') blogComps : QueryList<BlogComponent>;
  constructor() { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.bloglists = [
      [{title:"Blog Title 1", summary:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"},
      {title:"Blog Title 2", summary:"Blog Summary 2"},
      {title:"Blog Title 3", summary:"Blog Summary 3"},
      {title:"Blog Title41", summary:"Blog Summary 4"},
      ],
      [{title:"Blog Title 5", summary:"Blog Summary 5"},
      {title:"Blog Title 6", summary:"Blog Summary 6"},
      {title:"Blog Title 7", summary:"Blog Summary 7"},
      {title:"Blog Title 8", summary:"Blog Summary 8"},

      ],
      [{title:"Blog Title 9", summary:"Blog Summary 9"},
      {title:"Blog Title 10", summary:"Blog Summary 10"},
      {title:"Blog Title 11", summary:"Blog Summary 11"},
      {title:"Blog Title 12", summary:"Blog Summary 12"},

      ],
      [{title:"Blog Title 13", summary:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"},
      {title:"Blog Title 14", summary:"Blog Summary 10"},
      {title:"Blog Title 15", summary:"Blog Summary 11"},
      {title:"Blog Title 16", summary:"Blog Summary 12"},

      ]
    ]
  }

  updateCurrentPage(newPage:number){
    this.currentPage = newPage;
    this.blogComps.forEach(comp => comp.minimise())
  }

}
