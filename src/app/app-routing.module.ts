import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LeadershipComponent} from './about/leadership.component';
import { BeliefsComponent } from './about/beliefs/beliefs.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { OurVisionComponent } from './about/our-vision/our-vision.component';
import { ChildrenComponent } from './ministries/children/children.component';
import { YouthComponent } from './ministries/youth/youth.component';
import { AdultsAndFamilyComponent } from './ministries/adults-and-family/adults-and-family.component';
import { MissionsComponent } from './ministries/missions/missions.component';
import { OnlineGivingComponent } from './online-giving/online-giving.component';
import { GalleryComponent } from './gallery/gallery.component';
import {ImageDetailComponent} from './image-detail/image-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'beliefs', component: BeliefsComponent},
    {path: 'our-vision', component: OurVisionComponent},
    {path: 'leadership', component: LeadershipComponent},
    {path: 'children', component: ChildrenComponent},
    {path: 'youth', component: YouthComponent},
    {path: 'adults-and-family', component: AdultsAndFamilyComponent},
    {path: 'missions', component: MissionsComponent},
    {path: 'online-giving', component: OnlineGivingComponent},
    {path: 'events', component: EventsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: "image/:id", component: ImageDetailComponent},
    {path: 'contact', component: ContactComponent},
    
    { path: '**', component: PageNotFoundComponent }
  ],{scrollPositionRestoration:'top'})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
