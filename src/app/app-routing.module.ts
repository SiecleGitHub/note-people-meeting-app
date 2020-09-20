import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [
  { path: 'meeting', component: MeetingComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
