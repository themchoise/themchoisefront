import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiData } from "../helper/api_data";





@Injectable({providedIn:'root'})
export class TokenService{
    constructor(private readonly httpClient: HttpClient){}
        //Read Data 
    checkToken(token:string):Observable<any>{
         return this.httpClient.get(`${apiData}token/validateToken`,{      
          headers:
          {
            'Content-Type': 'application/json',
            'Authorization': token?token:'' 
          }
       }).pipe(e=>e);
        }

}