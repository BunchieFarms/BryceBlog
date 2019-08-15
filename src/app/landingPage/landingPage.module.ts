import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
    declarations: [
        MainPageComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [],
    providers: []
})

export class LandingPageModule { }
