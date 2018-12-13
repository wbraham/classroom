import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'app/shared/classroom.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-school-admin-management-dashboard',
  templateUrl: './school-admin-management-dashboard.component.html',
  styleUrls: ['./school-admin-management-dashboard.component.scss']
})
export class SchoolAdminManagementDashboardComponent implements OnInit {

  owner_id = '';
  admin_uni_name = '';
  myGroups: string[] = [];
  groups : [{
    nomgroupe : string,
    filiale : string,
    niveau : string,
    anneeuniversitaire : number,
    numerogroupe : number,
    owner_id : number
  }]

  constructor(private classroomService : ClassroomService) { }

  ngOnInit() {
    this.owner_id = localStorage.getItem('admin_id');
    this.admin_uni_name = localStorage.getItem('admin_uni_name');
    this.onDisplayGroups();
  }

  onDisplayGroups(){
    this.classroomService.displayGroups(this.owner_id)        
    .subscribe(
      (res : Response)=>{
        this.groups = JSON.parse(res.text());
          console.log(res);
          for (var x=0;x<this.groups.length;x++){
            this.myGroups.push(this.groups[x].nomgroupe+"$#"+this.groups[x].filiale+"$#"+
            this.groups[x].niveau+"$#"+this.groups[x].numerogroupe)
          }
      } ,
      (error) => {
        console.log(error);
      }
    );
}

  modifyGroup(){

  }

  supprimerGroup(){

  }

}
