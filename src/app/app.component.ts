import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  titleAddendums = [
    'For my eyes only',
    'Please leave',
    'Now with more sad',
    'Next page visit picks up the hosting bill!',
    'Now with more npm modules!',
    'No, my car still isn\'t running',
    'You\'re still here?',
    'What even is a \"Full-Stack Software Engineer\"',
    'University only taught me how to Google the answers to all my problems',
    'I am a professional monkey'
  ];

  subTitle: string;

  ngOnInit() {
    this.subTitle = this.titleAddendums[Math.floor(Math.random() * this.titleAddendums.length)];
  }
}
