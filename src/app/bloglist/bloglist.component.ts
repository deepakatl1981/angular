import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  bloglists : Blogpost[][];
  currentPage : number;
  constructor() { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.bloglists = [
      [{title:"Blog Title 1", summary:"Blog Summary 1"},
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
      [{title:"Blog Title 13", summary:"Blog Summary 9"},
      {title:"Blog Title 14", summary:"Blog Summary 10"},
      {title:"Blog Title 15", summary:"Blog Summary 11"},
      {title:"Blog Title 16", summary:"Blog Summary 12"},

      ]
    ]
  }

  updateCurrentPage(newPage:number){
    this.currentPage = newPage;
  }

}
