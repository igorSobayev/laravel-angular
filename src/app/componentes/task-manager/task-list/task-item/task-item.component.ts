import { Component, OnInit , Input} from '@angular/core';
import { Task } from './../../../../Task';
import { PruebaService } from './../../../../servicios/prueba.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()task: Task;

  constructor(private ts: PruebaService, private router: Router) { }

  ngOnInit() {
  }

  delete() {
    console.log(this.task.id);
    this.ts.deleteTask(this.task.id).subscribe((data) => {
      this.router.navigateByUrl('task');
      console.log('task deleted: ' + data);
    });
  }

}
