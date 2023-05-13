import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { VerifyToken } from 'src/app/helper/verifi_token';
import { DataService } from '../../services/data.services';
import { LoginService } from '../../services/login.services';
import { AboutDialogEditComponent } from './about-dialog-edit/about-dialog-edit.component';
import { TokenService } from '../../services/tokenService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  isLogged:boolean = false;
  loading:boolean = true;
  mePersonaData: any


  constructor( private readonly dataService: DataService, public loginService:LoginService, public verifiToken:TokenService, private matDiaLog: MatDialog) { }

  openDialog(){
  
  this.matDiaLog.open(AboutDialogEditComponent,{
    data: this.mePersonaData.about_me
  }).componentInstance.aboutChange.subscribe(result=> this.mePersonaData.about_me=result)
  }

  ngOnInit(): void {
   let token:string = localStorage.getItem('X-TOKEN') || '' ;

    if (token.length > 0){
      this.verifiToken.checkToken(token)
      .pipe(
        tap(res => 
          this.isLogged=res.status
        )
      )
      .subscribe();
         }
    this.dataService.meData().pipe(
      tap( res =>{
        this.mePersonaData = res[0]
     
      }
         )
    )
    .subscribe();
  
 }

 
}

