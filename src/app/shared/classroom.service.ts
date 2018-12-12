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

  // adding tasks to database
  addAdmin(nomEcole,phone,email,password){
    let contentBody = JSON.stringify({
        "nom_etablissement": nomEcole,
        "phone": phone,
        "email": email,
        "password": password
    });
    return this.http.post('http://localhost:3000/api/admins',contentBody,httpOptions)
      .pipe(map(res =>  res));
  }

  addTeacher(nomComplet,email,password){
    let contentBody = JSON.stringify({
        "name": nomComplet,
        "email": email,
        "password": password
    });
    return this.http.post('http://localhost:3000/api/teachers',contentBody,httpOptions)
      .pipe(map(res =>  res));
  }

  // retrieving tasks from database by date
  /*getTasks(){
    return this.http.get('http://localhost:3000/api/tasks?filter[order]=starttime%20DESC',httpOptions)
      .pipe(map(res =>  res));
  }

  findTask(searchDescription){
    return this.http.get('http://localhost:3000/api/tasks?filter[where][description]='+searchDescription,httpOptions)
      .pipe(map(res =>  res));
  }*/
}