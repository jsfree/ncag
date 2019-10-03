import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ImageService } from './shared/image.service';
import {ImageFilterPipe} from './shared/filter.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadershipComponent } from './about/leadership.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BeliefsComponent } from './about/beliefs/beliefs.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import {ChildrenComponent} from './ministries/children/children.component';
import { YouthComponent } from './ministries/youth/youth.component';
import { AdultsAndFamilyComponent } from './ministries/adults-and-family/adults-and-family.component';
import { MissionsComponent } from './ministries/missions/missions.component';
import { OurVisionComponent } from './about/our-vision/our-vision.component';
import { OnlineGivingComponent } from './online-giving/online-giving.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadershipComponent,
    FooterComponent,
    NavbarComponent,
    BeliefsComponent,
    HomeComponent,
    PageNotFoundComponent,
    EventsComponent,
    ContactComponent,
    ChildrenComponent,
    YouthComponent,
    AdultsAndFamilyComponent,
    MissionsComponent,
    OurVisionComponent,
    OnlineGivingComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
