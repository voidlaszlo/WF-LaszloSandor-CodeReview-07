import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }
  blogposts = [
    {
      author : "Laszlo",
      body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias, fugiat culpa eius natus repellat?",
      title : "Lorem he?"
    },
    {
      author : "Kecske",
      body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias, fugiat culpa eius natus repellat?",
      title : "Lorem he?"
    },
    {
      author : "Dorottya",
      body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias, fugiat culpa eius natus repellat?",
      title : "Lorem he?"
    },
  ]

  ngOnInit() {
  }

}
