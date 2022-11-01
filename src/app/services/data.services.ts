import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiData } from "../helper/api_data";
import { JobsClass } from "../models/jobs.models";
import { MePersona } from "../models/me.models";
import { catchError } from 'rxjs/operators';
import { EducationClass } from '../models/education.model';


let token: string = localStorage.getItem('X-TOKEN') || '';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': token ? token : ''
  })
};


@Injectable({ providedIn: 'root' })
export class DataService {


  constructor(private readonly httpClient: HttpClient) { }

  //Read Data 
  meData(): Observable<any> {
    return this.httpClient.get(`${apiData}ver/portFolioData`, {

      headers:
      {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }
    });
  }


  //Read Data 
  meJobs(): Observable<any> {
    return this.httpClient.get(`${apiData}jobs/listJobs`, {
      headers:
      {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }
    });
  }

  //Read Data 
  meEducation(): Observable<any> {
    return this.httpClient.get(`${apiData}education/listEducation`, {
      headers:
      {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }
    });
  }



  // Save About Me 
  saveAboutMe(meGatoPan: MePersona): Observable<any> {

    return this.httpClient.put(`${apiData}edit/portFolioData`, meGatoPan, httpOptions).pipe(e => e);
  }

  // Save Jobs
  saveJobs(gatopanJobs: JobsClass): Observable<any> {


    return this.httpClient.put(`${apiData}edit/kingKongJobs`, gatopanJobs, httpOptions).pipe(e => e);
  }

  
  // Save Education
  saveEducation(gatopanEducation: EducationClass): Observable<any> {
    return this.httpClient.put(`${apiData}edit/education`, gatopanEducation, httpOptions).pipe(e => e);
  }





}