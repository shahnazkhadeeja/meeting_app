import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { ConnectionsService } from '../connections.service';
import { FormsModule } from '@angular/forms';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { AttendanceComponent } from '../attendance/attendance.component';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.css']
})
export class ViewMeetingComponent implements OnInit {
  @ViewChild('report')
  pdfTable!: ElementRef;
  attendance:any;

  constructor(private matdialog:MatDialog,private formBuilder: FormBuilder,public connection:ConnectionsService , @Inject(MAT_DIALOG_DATA) public data: any,public http:HttpClient,public dialogRef: MatDialogRef<ViewMeetingComponent>) { }

  ngOnInit(): void {

    console.log(this.data)
  }

  


  onDismiss(){
    this.dialogRef.close(false);


  }
//report generation
  download(){

    console.log('download reached');
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 

  }
  view(){

    const dialogRef = this.matdialog.open(AttendanceComponent, {

      width: '50vw',
      height: '65vh',
      disableClose: true,
      data: {},
      closeOnNavigation: true,
      panelClass: 'my-dialog',
      restoreFocus: false
    });
  }
}
