import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";
import { map } from 'rxjs/operators';

// headers
const httpOptions = {
    headers: new Headers({
      'Accept':  'application/json',
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class ClassroomService {

  constructor(private http: Http) {}

  token = localStorage.getItem('user_token');

  // adding tasks to database
  addAdmin(nomEcole,phone,email,password){
    return this.http.post('http://localhost:3000/api/admins',{
        "nom_etablissement": nomEcole,
        "phone": phone,
        "email": email,
        "password": password
    },httpOptions)
      .pipe(map(res =>  res));
  }

  addTeacher(nomComplet,email,password){
    return this.http.post('http://localhost:3000/api/teachers',{
        "name": nomComplet,
        "email": email,
        "password": password
    },httpOptions)
      .pipe(map(res =>  res));
  }

  addUserToUserTable(email,password){
    return this.http.post('http://localhost:3000/api/Users',{
      'email': email,
      'password' : password
  },httpOptions)
      .pipe(map(res =>  res));
  }

  getUserAuth(email,password){
    return this.http.post('http://localhost:3000/api/Users/login',{
      'email': email,
      'password' : password
  },httpOptions)
      .pipe(map(res =>  res));
  }

  getAdmin(email){
    return this.http.get('http://localhost:3000/api/admins?filter[where][email]='+email)
        .pipe(map(res =>  res));
  }

  getTeacher(email){
    return this.http.get('http://localhost:3000/api/teachers?filter[where][email]='+email)
        .pipe(map(res =>  res));
  }

  getStudent(email){
    return this.http.get('http://localhost:3000/api/students?filter[where][email]='+email)
        .pipe(map(res =>  res));
  }

  logOutUser(){
    return this.http.post('http://localhost:3000/api/Users/logout',{
        'access_token': this.token,
    })
      .pipe(map(res =>  res));
  } 

  addGroup(nomgroupe,filiale,niveau,anneeuniversitaire,numerogroupe,owner_id){
    return this.http.post('http://localhost:3000/api/groupes',{
        'nomgroupe': nomgroupe,
        'filiale' : filiale,
        'niveau' : niveau,
        'anneeuniversitaire' : anneeuniversitaire,
        'numerogroupe' : numerogroupe,
        'owner_id' : owner_id
    },httpOptions)
      .pipe(map(res =>  res));
  }

  updateGroup(nomgroupe,filiale,niveau,anneeuniversitaire,numerogroupe,owner_id){
    return this.http.post('http://localhost:3000/api/groupes',{
        'nomgroupe': nomgroupe,
        'filiale' : filiale,
        'niveau' : niveau,
        'anneeuniversitaire' : anneeuniversitaire,
        'numerogroupe' : numerogroupe,
        'owner_id' : owner_id
    },httpOptions)
      .pipe(map(res =>  res));
    }

    /*deleteGroup(id){
        return this.http.post('http://localhost:3000/api/groupes',{
            'nomgroupe': nomgroupe,
            'filiale' : filiale,
            'niveau' : niveau,
            'anneeuniversitaire' : anneeuniversitaire,
            'numerogroupe' : numerogroupe,
            'owner_id' : owner_id
        },httpOptions)
          .pipe(map(res =>  res));
    }*/

    displayGroups(ownerId){
        return this.http.get('http://localhost:3000/api/groupes?filter[where][owner_id]='+ownerId,httpOptions)
          .pipe(map(res =>  res));
    }
}