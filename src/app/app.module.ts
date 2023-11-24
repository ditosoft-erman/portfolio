import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstSectionComponent } from './first-section/first-section';
import { FineWorksComponent } from './fine-works/fine-works.component';
import { ProductAndVideoComponent } from './product-and-video/product-and-video.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileVidComponent } from './profile-vid/profile-vid.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { EatSleepEditRepeatSectionComponent } from './eat-sleep-edit-repeat-section/eat-sleep-edit-repeat-section.component';

@NgModule({
  declarations: [AppComponent, FirstSectionComponent, FineWorksComponent, ProductAndVideoComponent, AboutMeComponent, ProfileComponent, ProfileVidComponent, FormSectionComponent, EatSleepEditRepeatSectionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
