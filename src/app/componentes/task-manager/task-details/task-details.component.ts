import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from './../../../Task';
import { PruebaService } from './../../../servicios/prueba.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;


  constructor(private actRoute: ActivatedRoute, private ts: PruebaService) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data) => {
      // Necesario para evitar que se inicialice vacío el objeto y provoque un error
      this.task = {
        id: '',
        title: '',
        status: false,
        date: new Date()
      }

      this.ts.getOne(data.id).subscribe((tsk) => {
        this.task = tsk;
        console.log(this.task.title);
      })
    })
  }

}
