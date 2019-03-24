import { Component, OnInit } from '@angular/core';
import { PruebaService } from './../../../servicios/prueba.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  title: string;

  constructor(private ts: PruebaService) { }

  ngOnInit() {
  }

  add(e: any): void {
    e.preventDefault();
    console.log(this.title);
    this.ts.addTast(this.title).subscribe((data) => {
      console.log("task added")
    });
  }

}
