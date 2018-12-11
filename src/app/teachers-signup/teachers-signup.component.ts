import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-signup',
  templateUrl: './teachers-signup.component.html',
  styleUrls: ['./teachers-signup.component.scss']
})
export class TeachersSignupComponent implements OnInit {
  test : Date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
