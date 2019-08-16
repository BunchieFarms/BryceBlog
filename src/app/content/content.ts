import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NewPostComponent } from './components/new-post/new-post.component';

@NgModule({
    declarations: [
        NewPostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [],
    providers: []
})

export class ContentModule { }
