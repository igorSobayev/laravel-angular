import { Component, OnInit } from '@angular/core';
import { PruebaService } from './../../../servicios/prueba.service';
import { MessageService } from './../../../servicios/message.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  title: string = '';
  formSubmitted: boolean = false;

  constructor(private ts: PruebaService, private msg: MessageService) { }

  ngOnInit() {
  }

  add(e: any): void {
    this.formSubmitted = true;
    e.preventDefault();
    console.log(this.title);
    this.ts.addTast(this.title).subscribe((data) => {
      console.log("task added");
      this.title = '';
      this.formSubmitted = false;
      this.msg.setMessage("something happen");
    });
  }

}
