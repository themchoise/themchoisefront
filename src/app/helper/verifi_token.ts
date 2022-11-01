import { Injectable } from "@angular/core";
import { TokenService } from '../services/tokenService';
import { Observable, tap } from 'rxjs';




@Injectable({ providedIn: 'root' })
export class VerifyToken {

  resp: boolean = false

  constructor(public tokenService: TokenService) { }

 
  //Read Data 
  async isLogged(){
    

    let token: string = localStorage.getItem('X-TOKEN') || '';
   
    if (token.length > 0) {
       this.tokenService.checkToken(token)
        .pipe( tap(res => {
          
          this.resp=res.status
        
        }))
        .subscribe();
    }
 
    return this.resp

  }



}