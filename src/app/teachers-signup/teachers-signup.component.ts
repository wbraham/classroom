import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'app/shared/classroom.service';

@Component({
  selector: 'app-teachers-signup',
  templateUrl: './teachers-signup.component.html',
  styleUrls: ['./teachers-signup.component.scss']
})
export class TeachersSignupComponent implements OnInit {

  nomComplet = '';
  email = '';
  password = '';
  password2 = '';

  constructor(private classroomService : ClassroomService) { }

  ngOnInit() {
  }

  signUpTeacher(){
    //var admin_id = Math.floor(Math.random() * 100000) + 1  ;
      if (this.password.length>=8 && this.password === this.password2){
      this.classroomService.addTeacher(this.nomComplet,this.email,this.password)        
      .subscribe(
        (res)=>{
            console.log(res);
            window.alert("Vous pouvez vous connecter avec votre compte maintenant");
            window.location.href = ("login");
        } ,
        (error) => {
          console.log(error);
          window.alert("Ce compte existe déja");
        }
      );
    } else {
      window.alert("Mot de passe très court ou simple à deviner, \n ajoutez des caractères spéciaux");
    }
  }

}
