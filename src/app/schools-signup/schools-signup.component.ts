import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../shared/classroom.service'
@Component({
  selector: 'app-schools-signup',
  templateUrl: './schools-signup.component.html',
  styleUrls: ['./schools-signup.component.scss']
})
export class SchoolsSignupComponent implements OnInit {

  nomEcole = '';
  phone = '';
  email = '';
  password = '';
  password2 = '';

  constructor(private classroomService : ClassroomService) { }

  ngOnInit() {
  }

  signUpAdmin(){
      if (this.password.length>=8 && this.password === this.password2){
      this.classroomService.addAdmin(this.nomEcole,this.phone,this.email,this.password)        
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

