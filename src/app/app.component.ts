import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { phrases } from '../assets/js/phrases';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.ngOnInit();
        }
    });
  }

  subTitle: string;

  ngOnInit() {
    this.subTitle = phrases[Math.floor(Math.random() * phrases.length)];
  }
}
