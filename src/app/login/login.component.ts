
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    test : Date = new Date();

    constructor(public router: Router) { }

    ngOnInit() {}

    login(){
        let element = <HTMLInputElement> document.getElementById("emaill");
        console.log(element.value)
        if (element.value==="admin"){
            window.location.href= ("admin-dashboard");
        } 
        else if (element.value==="teacher"){
            window.location.href= ("teacher-dashboard");
        } 
        else if (element.value==="student"){
            window.location.href= ("student-dashboard");
        } else {
            window.alert("Entrez une adresse email valide");
        }
    }
}
