import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from "@tinymce/tinymce-angular";


import { TaskComponent } from './task/task.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MeetingDataComponent } from './meeting-data/meeting-data.component';

import { AddlistComponent } from './addlist/addlist.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ViewMeetingListComponent } from './view-meeting-list/view-meeting-list.component';
import { StatusDragComponent } from './status-drag/status-drag.component';
import { DeleteBoxComponent } from './delete-box/delete-box.component';
import { MeetingDragComponent } from './meeting-drag/meeting-drag.component';
import { DragDropDirective } from './drag-drop.directive';
import { ImagDragComponent } from './imag-drag/imag-drag.component';
import { LoaderComponent } from './loader/loader.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
import { AttendanceComponent } from './attendance/attendance.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainPageComponent,
    MainSidenavComponent,
    MainHeaderComponent,
    MeetingDataComponent,

    AddlistComponent,
    AddTaskComponent,
    ViewTaskComponent,
    ViewMeetingListComponent,
    StatusDragComponent,
    DeleteBoxComponent,
    MeetingDragComponent,
    DragDropDirective,
    ImagDragComponent,
    LoaderComponent,
    AgendaComponent,
    ViewMeetingComponent,
    AttendanceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgSelectModule,
    MatCardModule,
    MatTableModule,
    DragDropModule,
    HttpClientModule,
    MatPaginatorModule,
    EditorModule

  ],
  providers: [{ provide:LocationStrategy,useClass:HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
