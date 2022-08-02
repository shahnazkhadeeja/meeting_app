import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import { ConnectionsService } from '../connections.service';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  
  selected = [ 2, 8 ];

  constructor(private formBuilder: FormBuilder,public connection:ConnectionsService , @Inject(MAT_DIALOG_DATA) public data: any,public http:HttpClient,public dialogRef: MatDialogRef<ViewTaskComponent>) { }

  ngOnInit(): void {
    console.log('modal recvd data is:',this.data)
  }
  onDismiss(){
    this.dialogRef.close(false);


  }
}
