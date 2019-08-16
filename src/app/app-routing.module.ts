import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { LandingPageRoutingModule } from './landingPage/landingPage-routing.module';
import { ContentRoutingModule } from './content/content-routing.module';

@NgModule({
  imports: [
    LandingPageRoutingModule,
    ContentRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']);
    };
  }
}
