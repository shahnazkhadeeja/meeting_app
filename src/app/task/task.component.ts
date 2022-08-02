import { Component, OnInit ,ViewChild} from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewTaskComponent } from '../view-task/view-task.component';
import { ConnectionsService } from '../connections.service';
import { DeleteBoxComponent } from '../delete-box/delete-box.component';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task_data: any;
  menu: any;
  loader: boolean = false;
  participants:any;
  page: any =0
  pageSize:any;
  resultsLength: any = 0

  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  constructor(private matdialog: MatDialog, public connect: ConnectionsService) {
    this.task_data = [];
  }

  ngOnInit(): void {
    this.viewTasks();
  }

  addTask(mode: any, task: any) {
    let sendData = { mode: 'add', task: {} }
    if (mode == 'edit') {
      sendData = { task: task, mode: mode }
    }
    const dialogRef = this.matdialog.open(AddTaskComponent, {
      width: '30vw',
      height: '70vh',
      disableClose: true,
      data: sendData,
      closeOnNavigation: true,
      panelClass: 'my-dialog',

    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == 'success') {
        this.viewTasks();
      }
    })
  }
  
  view(item:any) {
    
    let send={task_title:item.task_title, description:item.description,assigned_to:this.participants}
    console.log('send data is:',send);
    const dialogRef = this.matdialog.open(ViewTaskComponent, {

      width: '100vw',
      height: '65vh',
      disableClose: true,
      data: send,
      closeOnNavigation: true,
      panelClass: 'my-dialog',
      restoreFocus: false
    });
  }

  delete(id: any): void {
    let senData = { id: id }
    const dialogRef = this.matdialog.open(DeleteBoxComponent, {
      minWidth: '500px',
      maxWidth: '600px',
      maxHeight: '500px',
      minHeight: '300px',
      disableClose: true,
      data: {},
      closeOnNavigation: true,
      panelClass: 'my-dialog',


    });
    dialogRef.afterClosed().subscribe(dialogResult => {

      console.log(dialogResult);
      if (dialogResult) {

        this.connect.deletetask(senData).subscribe(
          response => {
            if (response.status == 'success') {
              this.viewTasks();
            }
          },
          error => {
            console.log(error);
          });

      }

    });
  }

  viewTasks() {
    this.loader = true
    this.connect.getTasks(this.page).subscribe(response => {
      this.loader = false
      this.task_data = response.result;
       this.participants=response.value;
       console.log(this.task_data);
       this.resultsLength = response.count;


    })

  }
  onclick(value: any, id: any) {
    this.loader = true
    let sendData = { status: value, id: id }
    this.connect.updateStatus(sendData).subscribe(response => {
      this.loader = false;
      if (response.status == 'success') {
        this.viewTasks();
      }

    })
  }

  pageChangeEvent(){
      
    this.page = this.paginator.pageIndex;
    this.page + 1;
    console.log(this.page)
    this.viewTasks();
}

paginate() {
  this.page = this.paginator.pageIndex
  this.page + 1
  this.viewTasks()
}

ngAfterViewInit() {
      
  this.task_data.paginator= this.paginator;
  
 this.viewTasks();
}
}
