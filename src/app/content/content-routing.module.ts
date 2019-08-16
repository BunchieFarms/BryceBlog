import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './components/new-post/new-post.component';

const routes: Routes = [
    { path: 'newPost', component: NewPostComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule { }
