import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'app/shared/classroom.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  filiale = '';
  niveau = '';
  anneeuniversitaire = '';
  numerogroupe = '';
  nomgroupe = '';
  owner_id = '';
  admin_uni_name = '';

  constructor(private classroomService : ClassroomService) { }

  ngOnInit() {
    this.owner_id = localStorage.getItem('admin_id');
    this.admin_uni_name = localStorage.getItem('admin_uni_name');
  }

  addGroup(){
    if (this.filiale!=null && this.niveau!=null && this.anneeuniversitaire!=null && this.numerogroupe!=null && this.nomgroupe!=null){
      this.classroomService.addGroup(this.nomgroupe,this.filiale,this.niveau,this.anneeuniversitaire,this.numerogroupe,this.owner_id)        
      .subscribe(
        (res)=>{
            console.log(res);
            window.alert("Groupe ajouté avec succès");
        } ,
        (error) => {
          console.log(error);
          window.alert("Ce groupe existe déja");
        }
      );
    } else {
      window.alert("Mot de passe très court ou simple à deviner, \n ajoutez des caractères spéciaux");
    }
  }

}
