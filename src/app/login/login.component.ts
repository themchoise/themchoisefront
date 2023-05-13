import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../services/login.services';
import { LoginClass } from '../models/login.models';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public statusMsg: string = 'Login';

  constructor( private dialogRef:MatDialog, private startLogin:LoginService, private router:Router) { }
  
  openDialog(){
    this.dialogRef.open(LoginComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

  ngOnInit(): void {
  }

  saveInlocal(token:string):void{
    if (token){
      localStorage.removeItem('X-TOKEN');
      localStorage.setItem('X-TOKEN', token);
    }
  
  }
     
    login(form:any){ 
      const loginData = new LoginClass(form.login, form.password)
          this.startLogin.loginBackend(loginData).subscribe(
            response=>{
              if ( response.ok ){
                this.statusMsg='Login Ok';

                this.saveInlocal(response.token);
                this.router.navigate(['/']);
              }else{
                this.statusMsg='Error de Acceso'
                setTimeout(() => {
                  this.statusMsg='Login'
                }, 2000);
              }
            },
            error=>(null)
          )
      
    }
}
