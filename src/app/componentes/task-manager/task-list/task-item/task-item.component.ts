import { Component, OnInit , Input} from '@angular/core';
import { Task } from './../../../../Task';
import { PruebaService } from './../../../../servicios/prueba.service';
import { Router } from '@angular/router';
import { MessageService } from './../../../../servicios/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()task: Task;

  constructor(private ts: PruebaService, private router: Router, private msg: MessageService) { }

  ngOnInit() {
  }

  delete() {
    console.log(this.task.id);
    this.ts.deleteTask(this.task.id).subscribe((data) => {
      this.router.navigateByUrl('task');
      this.msg.setMessage('something was deleted');
      console.log('task deleted: ' + data);
    });
  }

}
