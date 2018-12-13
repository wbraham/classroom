import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { ClassroomService } from 'app/shared/classroom.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor( public location: Location) { }
  admin_uni_name = '';

  ngOnInit() {
    this.admin_uni_name = localStorage.getItem('admin_uni_name');
  }

  isAdmin(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(titlee === 'admin-dashboard'){
        return true;
    }
    else {
        return false;
    }
}
}
