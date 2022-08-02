import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddlistComponent } from '../addlist/addlist.component';
import { Router } from '@angular/router';
import { ViewMeetingListComponent } from '../view-meeting-list/view-meeting-list.component';

@Component({
  selector: 'app-meeting-data',
  templateUrl: './meeting-data.component.html',
  styleUrls: ['./meeting-data.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeetingDataComponent implements OnInit {

  constructor(private matdialog: MatDialog) { }

  ngOnInit(): void {
  }
  addList(mode: any, meeting: any) {
    let sendData = { mode: 'add', meeting: {} }
    if (mode == 'edit') {
      sendData = { meeting: meeting, mode: mode }
    }

    const dialogRef = this.matdialog.open(AddlistComponent, {
      
      width: '60vw',
      height: '60vh',
      disableClose: true,
      data: sendData,
      closeOnNavigation: true,
      panelClass: 'my-class',

    });

    console.log('modal called');
  }

  viewList(){
    const dialogRef = this.matdialog.open(ViewMeetingListComponent, {
      
      width: '60vw',
      height: '100vh',
      disableClose: true,
      data: "hi",
      closeOnNavigation: true,
      panelClass: 'my-class',

    });

    console.log('modal called');
  }


  }


