import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsletterPage } from './newsletter';

@NgModule({
  declarations: [
    NewsletterPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsletterPage),
  ],
})
export class NewsletterPageModule {}
