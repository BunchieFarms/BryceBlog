import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor() { }

  newPostData = {
    title: '',
    category: '',
    body: ''
  };

  ngOnInit() {
  }

  submitPost() {
    this.newPostData.body = this.newPostData.body.replace(/(?:\r\n|\r|\n)/g, '<br />');
    console.log(this.newPostData);
  }

}
