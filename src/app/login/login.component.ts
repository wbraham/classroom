
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassroomService } from 'app/shared/classroom.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    test : Date = new Date();

    emaill ='';
    pass ='';

    constructor(public router: Router, private classroomService : ClassroomService) { }

    ngOnInit() {}

    login=() => {
        /*let element = <HTMLInputElement> document.getElementById("role");
        let role = element.value;
        localStorage.setItem('is_checked_verification',role.toString());
        if(role==="admin"){
          this.onGetAdmin(this.emaill,this.pass);
        } else if(role==="teacher"){
          this.onGetTeacher(this.emaill,this.pass);
        } else if(role==="student"){
            this.onGetStudent(this.emaill,this.pass);
        } else {
            window.alert("Veuillez selectionner un role")
        }*/
    }

    /*onGetAdmin(username,password){
        this.classroomService.getAdminAuth(username,password)        
        .subscribe(
          (res)=>{
              console.log(res);
              var objet = JSON.parse(res.text());
              //localStorage.setItem('id_token_admin',objet);
              if (objet!=null){
                console.log(objet);
                window.location.href = ("admin-dashboard");
              }else {
                console.log('Erreur authentification!');
                window.alert("Erreur authentification");
              }
          } ,
          (error) => {
            console.log(error);
          }
        );
    }

    onGetTeacher(username,password){
        this.classroomService.getTeacherAuth(username,password)        
        .subscribe(
          (res)=>{
              console.log(res);
              var objet = JSON.parse(res.text());
              //localStorage.setItem('id_token_admin',objet);
              if (objet!=null){
                console.log(objet);
                window.location.href = ("teacher-dashboard");
              }else {
                console.log('Erreur authentification!');
                window.alert("Erreur authentification");
              }
          } ,
          (error) => {
            console.log(error);
          }
        );
    }

    onGetStudent(username,password){
        this.classroomService.getStudentAuth(username,password)        
        .subscribe(
          (res)=>{
              console.log(res);
              var objet = JSON.parse(res.text());
              //localStorage.setItem('id_token_admin',objet);
              if (objet!=null){
                console.log(objet);
                window.location.href = ("student-dashboard");
              }else {
                console.log('Erreur authentification!');
                window.alert("Erreur authentification");
              }
          } ,
          (error) => {
            console.log(error);
          }
        );
    }*/
    
}
