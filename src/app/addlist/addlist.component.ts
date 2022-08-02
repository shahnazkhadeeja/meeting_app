import { Component, Inject, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnectionsService } from '../connections.service';


@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  new_meeting: any = FormGroup;
 
  participants: any = [];
  emp_name: any;
  mode: any = 'add';
  id: any;
  name: any;
  meeting_data: any = {}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddlistComponent>, public connection: ConnectionsService, public router: Router) {
    this.mode = data.mode
    if (this.mode == 'edit') {
      this.id = data.id
      this.meeting_data = data.meeting
      // this.priority = this.new_meeting.priority
      console.log(this.id)
    }


    this.new_meeting = this.formBuilder.group({
      title: [this.meeting_data.title, [Validators.required]],
      date: [this.meeting_data.date, [Validators.required]],
      start_time: [this.meeting_data.start_time, [Validators.required]],
      //  task: [''],
      duration: [this.meeting_data.duration, [Validators.required]],
      location: [this.meeting_data.location, [Validators.required]],
      participant: [this.participants],
      agenda: [this.meeting_data.agenda],

    });

  }
  ngOnInit(): void {

  }
  onDismiss() {
    console.log('close button/cancel')
    this.dialogRef.close(false);
  }


  get NT() { return this.new_meeting.controls; }

  createList() {
    console.log('create list called')
    console.log(this.new_meeting.value.participant)
    let data_details = { title: this.new_meeting.value.title, date: this.new_meeting.value.date, location: this.new_meeting.value.location, start_time: this.new_meeting.value.start_time, duration: this.new_meeting.value.duration, agenda: this.new_meeting.value.agenda, id: this.meeting_data.id, mode: this.mode,partcipants:this.new_meeting.value.participant }
    console.log(this.meeting_data.id)
   
    let data = JSON.stringify(data_details);
    console.log(this.data)
    if (this.mode == 'add') {
      this.connection.createMeeting(data).subscribe(response => {
        if (response.status == 'success') {
          this.dialogRef.close('success');
        }
      });
    } else {
      console.log(data)
      this.connection.meetingUpdate(data).subscribe(response => {
        if (response.status == 'success') {
          this.dialogRef.close('success');
        }
      });
      // this.connection.createMeeting(data).subscribe(response =>{ this.router.navigate(['main/meeting'])});
    }
  }
  calldata() {
    this.connection.callParticipants().subscribe((response: any) => {
      this.participants = response.result;
      console.log("success")
      console.log(this.participants)


    });


  }

}


