import { Component, OnInit ,ViewChild,Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ConnectionsService } from '../connections.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBoxComponent } from '../delete-box/delete-box.component';
import { AddlistComponent } from '../addlist/addlist.component';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { merge,zip} from 'rxjs';
import {  catchError, map, startWith, switchMap } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ViewMeetingComponent } from '../view-meeting/view-meeting.component';

import{MatMenuTrigger} from '@angular/material/menu'
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-meeting-list',
  templateUrl: './view-meeting-list.component.html',
  styleUrls: ['./view-meeting-list.component.css']
})


export class ViewMeetingListComponent  {

  @ViewChild(MatMenuTrigger,{static:true})
  contextMenu: MatMenuTrigger;

  menuTopLeftPosition = { x: '0', y: '0' };

 meeting_data:any;
 resultsLength: any = 0
  page: any =0
  pageSize:any;
  displayedColumns = [
    'title',
    
    'start_time',
    'duration',
    'location',
    // 'agenda',
    // 'Options'
   
  ];
  data: any;


  constructor(public connect:ConnectionsService, private router:Router,private matdialog:MatDialog,public formbuilder:FormBuilder) { 
    this.meeting_data=[];
  }
  
  dataSource: any;
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;


  viewMeeting(){

    this.connect.getMeeting(this.page)
    .subscribe((response: any) => {
      this.data = response.result;
      console.log(this.data)
      this.resultsLength = response.count;
      
      
    });


  //   console.log(this.page)
  //   merge(this.paginator.page).pipe(startWith({}), switchMap(() => {
  //     return this.connect.getMeeting(this.paginator.pageIndex + 1);
  // }),
  //     map(data => {

  //         this.resultsLength = data.count;
  //         this.data=data.result;
          // console.log(this.data)
        
  //         return data.list;
  //     }),
  //     catchError((ee) => {
  //         console.log(ee)
  //         return observableOf([]);
  //     })
  //  ).subscribe(data => this.data =data.result);
  // console.log(this.data)

    }
      pageChangeEvent(){
      
      this.page = this.paginator.pageIndex;
      this.page + 1;
      console.log(this.page)
      this.viewMeeting();
  }
      
         
      
  

  
  
  delete(id: any): void {
    
    let senData = { id:id}
    console.log('delete called',senData);
    const dialogRef = this.matdialog.open( DeleteBoxComponent, {
      // minWidth: '500px',
      // maxWidth: '700px',
      minWidth: '500px',
      maxWidth: '600px',
      maxHeight: '500px',
      minHeight: '300px',
      disableClose: true,
      data: senData,
      closeOnNavigation: true,
      panelClass: 'my-dialog',


    });
    dialogRef.afterClosed().subscribe(dialogResult => {

      console.log(dialogResult);
      if (dialogResult) {

        this.connect.delete(senData).subscribe(
          response => {
            if (response.status == 'success') {
              this.viewMeeting();
            }
          },
          error => {
            console.log(error);
          });

      }

    });
  }

  createList(mode: any, meeting: any) {
      let sendData = { mode: 'edit', meeting: {} }
      if (mode == 'edit') {
        sendData = { meeting:meeting, mode:mode};
        console.log("Edit called");
        console.log(sendData)
      }
      const dialogRef = this.matdialog.open(AddlistComponent, {
        width: '60vw',
        maxHeight: '70vh',
        disableClose: true,
        data: sendData,
        closeOnNavigation: true,
        panelClass: 'my-dialog',
  
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult == 'success') {
          this.viewMeeting();
        }
      })
    }

    view(row:any){
      console.log('hi')
      let send={title:row.title,date:row.date,location:row.location,agenda:row.agenda}
    console.log('send data is:',send);
    const dialogRef = this.matdialog.open(ViewMeetingComponent, {

      width: '100vw',
      height: '65vh',
      disableClose: true,
      data: send,
      closeOnNavigation: true,
      panelClass: 'my-dialog',
      restoreFocus: false
    });
    }

    paginate() {
      this.page = this.paginator.pageIndex
      this.page + 1
      this.viewMeeting()
    }
  
  onContextMenu(event: MouseEvent,row:any) {
    event.preventDefault();
    console.log(row)
    this.menuTopLeftPosition.x = event.clientX +'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';
     this.contextMenu.menuData = {row:row};
    this.contextMenu.menu.focusFirstItem('mouse');
    
    this.contextMenu.openMenu()
  }
 

  
    
  ngAfterViewInit() {
      
    this.meeting_data.paginator= this.paginator;
    
   this.viewMeeting();
  }



}

