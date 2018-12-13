import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';

@Component({
    selector: 'app-navigation-admin',
    templateUrl: './navigation-admin.component.html',
    styleUrls: ['./navigation-admin.component.scss']
})
export class NavigationAdminComponent implements OnInit {

    constructor(private classroomService : ClassroomService) { }

    ngOnInit() {}

    disconnectMe(){
        this.classroomService.logOutUser()        
        .subscribe(
          (res)=>{
            console.log(res);
            window.location.href = ("landing");
          } ,
          (error) => {
            console.log(error);
            window.alert("Erreur de déconnexion");
          }
        );
    }
}
