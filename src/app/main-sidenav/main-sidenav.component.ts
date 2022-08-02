import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.css']
})
export class MainSidenavComponent implements OnInit {

  constructor() { }
  isExpanded=true;
  ngOnInit(): void {
  }

}
