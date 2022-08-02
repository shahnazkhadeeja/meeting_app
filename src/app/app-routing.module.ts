import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MeetingDataComponent } from './meeting-data/meeting-data.component';
import { ViewMeetingListComponent } from './view-meeting-list/view-meeting-list.component';
import { TaskComponent } from './task/task.component';
import { StatusDragComponent } from './status-drag/status-drag.component';
import { MeetingDragComponent } from './meeting-drag/meeting-drag.component';
import { ImagDragComponent } from './imag-drag/imag-drag.component';
import { LoaderComponent } from './loader/loader.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
   {
      path: 'main'
      ,
      component: MainPageComponent,

      children: [
         {
            path: 'meeting',
            component: MeetingDataComponent,
         },
         {
            path: 'viewmeeting',
            component: ViewMeetingListComponent

         },

         {
            path: 'task',

            component: TaskComponent
         },
         {
            path: 'status',

            component:StatusDragComponent
         },
         {
            path: 'agenda',

            component:AgendaComponent
         }
      ]
   },
   {
      path:'drag',
      component:MeetingDragComponent
   }, {
      path:'image-drag',
      component:ImagDragComponent
   },
   {
      path: 'loader',

      component:LoaderComponent
   }

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
