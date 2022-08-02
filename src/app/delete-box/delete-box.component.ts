import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import { ConnectionsService } from '../connections.service';

@Component({
  selector: 'app-delete-box',
  templateUrl: './delete-box.component.html',
  styleUrls: ['./delete-box.component.css']
})
export class DeleteBoxComponent implements OnInit {

  constructor(public connect:ConnectionsService  , public dialogRef: MatDialogRef< DeleteBoxComponent>,) { }

  ngOnInit(): void {
  }

onSuccess(){

  this.dialogRef.close(true);

}
onDismiss(){
  this.dialogRef.close(false);


}
}
