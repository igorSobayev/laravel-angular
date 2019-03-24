import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.querySelector("#nm").value;
    const pass = target.querySelector("#ps").value;

    if(name === pass) {
      this.router.navigateByUrl('task');
    }
  }

}
