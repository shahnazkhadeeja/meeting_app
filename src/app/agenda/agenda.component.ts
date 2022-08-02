import { Component, OnInit } from '@angular/core';
import { Validators , FormGroup, FormBuilder,FormControl} from '@angular/forms';
import { ConnectionsService } from '../connections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  statusbar: false;
  agenda_data: any = {}
  content:any;
  constructor(private formBuilder: FormBuilder,public connection: ConnectionsService, public router: Router) 
  { 
  this.agenda_data= this.formBuilder.group({
    title: [this.agenda_data.title, [Validators.required]],
    content: [this.agenda_data.content, [Validators.required]],
    
  });
 

}

  ngOnInit(): void
   {

  }
  createList(){
console.log("hi");
console.log(this.agenda_data.value);
let data_details = { title: this.agenda_data.value.title, content: this.agenda_data.value.content}
console.log(data_details)
let data = JSON.stringify(data_details);
this.connection.createAgenda(data).subscribe(response =>{ this.router.navigate(['main/meeting'])});
  }

 
}
