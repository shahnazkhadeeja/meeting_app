import { Component, OnInit } from '@angular/core';

import {FileHandle } from '../file-handle'; 

@Component({
  selector: 'app-imag-drag',
  templateUrl: './imag-drag.component.html',
  styleUrls: ['./imag-drag.component.css']
})
export class ImagDragComponent implements OnInit {

  uploadedFiles:FileHandle[];  

  constructor() {
    
  }  
  ngOnInit(): void {}  
  // filesDropped(files: FileHandle[]) {  
  //     this.uploadedFiles = files;  
  //}  
}   

