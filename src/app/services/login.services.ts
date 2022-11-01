import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError  } from "rxjs";
import { catchError } from 'rxjs/operators';
import { apiData } from "../helper/api_data";
import { LoginClass } from '../models/login.models';
import { TokenService } from './tokenService';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};



@Injectable()
export class LoginService{
    constructor(private httpClient: HttpClient ){}
    
   
  
    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }

 
    //Read Data 
    loginBackend(login:LoginClass):Observable<any>{
      
      console.log(login.getData())
         return this.httpClient.post<LoginClass>(`${apiData}login`,login.getData(),httpOptions).pipe(
          catchError(err => err)
         );
        }

}