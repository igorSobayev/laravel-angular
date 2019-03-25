import { Component, OnInit } from '@angular/core';
import { Task } from './../../../Task';
import { PruebaService } from './../../../servicios/prueba.service';
import { MessageService } from './../../../servicios/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private ts: PruebaService, private router: Router, private msg: MessageService) { }

  ngOnInit() {
    this.getTasks();
    this.msg.getMessage().subscribe((data) => {
      this.getTasks();
    });
  }

  getTasks() {
    this.ts.getAllTasks().subscribe((all) => {
      this.tasks = all;
      this.router.navigateByUrl('task');
      console.log(this.tasks);
    });
  }

}
