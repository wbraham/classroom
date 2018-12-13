import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-navigation-teacher',
  templateUrl: './navigation-teacher.component.html',
  styleUrls: ['./navigation-teacher.component.scss']
})
export class NavigationTeacherComponent implements OnInit {

  constructor(private classroomService : ClassroomService) { }

  ngOnInit() {
  }

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
