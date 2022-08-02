import { Component,EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
}

}
