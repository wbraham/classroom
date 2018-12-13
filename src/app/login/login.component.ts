
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassroomService } from 'app/shared/classroom.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    test : Date = new Date();
    roleChoisi: string;
    roles: string[] = ['admin', 'teacher', 'student'];
    emaill ='';
    pass ='';

    lesUsers : [{
      email : string,
      id : number,
      nom_etablissement : string,
      phone : string,
      password : string
    }]

    constructor(public router: Router, private classroomService : ClassroomService) { }

    ngOnInit() {}

    login=() => {
        if(this.roleChoisi==="admin"){
          this.onGetAdmin(this.emaill,this.pass);
        } else if(this.roleChoisi==="teacher"){
          this.onGetTeacher(this.emaill,this.pass);
        } else if(this.roleChoisi==="student"){
            this.onGetStudent(this.emaill,this.pass);
        } else {
            window.alert("Veuillez selectionner un role")
        }
    }

    onGetAdmin(username,password){
        this.classroomService.getUserAuth(username,password)        
        .subscribe(
          (res)=>{
              console.log(res);
              var objet = JSON.parse(res.text());
              if (objet!=null){
                console.log(objet);
                localStorage.setItem('user_token',objet);
                this.classroomService.getAdmin(username)        
                .subscribe(
                  (res : Response)=>{
                    this.lesUsers = JSON.parse(res.text());
                      if (objet!=null){
                        for (var x=0;x<this.lesUsers.length;x++){
                          localStorage.setItem('admin_id',this.lesUsers[x].id+'');
                          localStorage.setItem('admin_uni_name',this.lesUsers[x].nom_etablissement);
                         }
                        window.location.href = ("admin-dashboard");
                        console.log(objet);
                      }else {
                        console.log('Erreur authentification!');
                        window.alert("Erreur authentification");
                      }
                  } ,
                  (error) => {
                    console.log(error);
                  }
                );
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
        this.classroomService.getUserAuth(username,password)        
        .subscribe(
          (res : Response)=>{
              console.log(res);
              var objet = JSON.parse(res.text());
              if (objet!=null){
                localStorage.setItem('user_token',objet);
                this.classroomService.getAdmin(username)        
                .subscribe(
                  (res : Response)=>{
                    this.lesUsers = JSON.parse(res.text());
                      if (objet!=null){
                        for (var x=0;x<this.lesUsers.length;x++){
                          localStorage.setItem('teacher_id',this.lesUsers[x].id+'');
                         }
                        window.location.href = ("teacher-dashboard");
                        console.log(objet);
                      }else {
                        console.log('Erreur authentification!');
                        window.alert("Erreur authentification");
                      }
                  } ,
                  (error) => {
                    console.log(error);
                  }
                );
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
        this.classroomService.getUserAuth(username,password)        
        .subscribe(
          (res)=>{
              console.log(res);
              var objet = JSON.parse(res.text());
              localStorage.setItem('user_token',objet);
              if (objet!=null){
                console.log(objet);
                this.classroomService.getAdmin(username)        
                .subscribe(
                  (res : Response)=>{
                    this.lesUsers = JSON.parse(res.text());
                      if (objet!=null){
                        for (var x=0;x<this.lesUsers.length;x++){
                          localStorage.setItem('student_id',this.lesUsers[x].id+'');
                         }
                        window.location.href = ("student-dashboard");
                        console.log(objet);
                      }else {
                        console.log('Erreur authentification!');
                        window.alert("Erreur authentification");
                      }
                  } ,
                  (error) => {
                    console.log(error);
                  }
                );
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
    
}
