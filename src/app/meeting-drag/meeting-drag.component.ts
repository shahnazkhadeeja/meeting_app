import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-meeting-drag',
  templateUrl: './meeting-drag.component.html',
  styleUrls: ['./meeting-drag.component.css']
})
export class MeetingDragComponent implements OnInit {

  error: any;
  imageSrc: string;
  dragAreaClass:any;
  draggedFiles: any;
  constructor() { }

  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
    
  }

  ngOnInit(): void {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      console.log(files[0].size,files[0].name,files[0].type);
      
      this.draggedFiles = files;
      console.log(this.draggedFiles);
    }}

    

  
}
