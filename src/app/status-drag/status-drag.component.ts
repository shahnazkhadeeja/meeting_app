import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ConnectionsService } from '../connections.service';
import { Router } from '@angular/router';
import { id } from 'date-fns/locale';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-status-drag',
  templateUrl: './status-drag.component.html',
  styleUrls: ['./status-drag.component.css']
})
export class StatusDragComponent implements OnInit {

  not_started: any = [];

  progress: any = [];
  completed: any = [];
  cancelled: any = [];
  task_data: any = {}
  not_s: any;
  p: any
  com: any;
  canc: any;
  constructor(public connect: ConnectionsService, public router: Router) {
    this.task_data = [];
    


  }
  ngOnInit(): void {
  
  this.getTaskdata();
  }

  drop(event: CdkDragDrop<string[]>) {



    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,

      );


      this.not_s = event.container.data[event.currentIndex]


      this.p = event.container.id

      let send = { status: this.p, task_id: this.not_s.id }
      this.connect.updateTaskStatus(send).subscribe(response => {

        if (response.status == 'success') {
          this.getTaskdata();
        }

      })

    }
  }

  getTaskdata() {

    this.connect.getStatusTasks().subscribe({
      next: (response: any) => {
        this.not_started= response.not_started;

        this.progress = response.progress;
        this.completed = response.completed;
        this.cancelled = response.cancel;

      }

    })

  }


}
  // constructor() { }

  // ngOnInit(): void {
  // }

