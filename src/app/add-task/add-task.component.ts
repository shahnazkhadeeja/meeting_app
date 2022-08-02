import { JsonPipe, LowerCasePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ConnectionsService } from '../connections.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  new_task: any = FormGroup;
 
  priority: any
  mode: any = 'add'
  id: any = ''
  
  task_data: any = {};
  participants:any=[ ]
  assigned_to: any;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddTaskComponent>, public http: HttpClient, public formBuilder: FormBuilder, public router: Router, public connect: ConnectionsService) {
     this.mode = data.mode
    if (this.mode == 'edit') {
      this.id = data.id
      this.task_data = data.task
      this.priority = this.task_data.priority
       this.assigned_to= this.participants
    }

// this.participants={id:'id',emp_name:'emp_name'}

  }

  ngOnInit(): void {




    this.new_task = this.formBuilder.group({
      task_title: [this.task_data.task_title, [Validators.required]],
      start_time: [this.task_data.time],
      assigned_to: [this.participants],
      priority: [this.priority],
      description: [this.task_data.description, [Validators.required]],
    });


  }
  onDismiss() {
    this.dialogRef.close(false);


  }

  get NT() { return this.new_task.controls; }



  createTask() {

    if (this.new_task.invalid) { return; }
   
    let data_details = { task_title: this.new_task.value.task_title, start_time: this.new_task.value.start_time, priority: this.priority, description: this.new_task.value.description, id: this.task_data.id, mode: this.mode ,assigned_to:this.new_task.value.assigned_to}
    let data = JSON.stringify(data_details);
     console.log("send data is",data);
    if (this.mode == 'add') {
      this.connect.taskCreate(data).subscribe(response => {
        if (response.status == 'success') {
          this.dialogRef.close('success');
        }
      });
    } else {
      this.connect.taskUpdate(data).subscribe(response => {
        if (response.status == 'success') {
          this.dialogRef.close('success');
        }
      });
    }



  }






  // test
  setPriority(value: any) {
    this.priority = value;

  }

  calldata() {
    this.connect.callParticipants().subscribe((response: any) => {
      this.participants = response.result;
      console.log("success")
      console.log(this.participants)


    });


  }


}
