import { Component, OnInit } from '@angular/core';

declare interface Routing {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: Routing[] = [
  { path: '/timer', title: 'My Class 0',  icon:'dashboard', class: '' },
  { path: '/my-tasks', title: 'My Class 1',  icon:'content_paste', class: '' },
  { path: '/my-tasks', title: 'My Class 2',  icon:'content_paste', class: '' },
  { path: '/my-tasks', title: 'My Class 3',  icon:'content_paste', class: '' },
  { path: '/my-tasks', title: 'My Class 4',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-teacher-sidebar',
  templateUrl: './teacher-sidebar.component.html',
  styleUrls: ['./teacher-sidebar.component.scss']
})
export class TeacherSidebarComponent implements OnInit {

  constructor() { }

  menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
