import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.services';
import { tap } from 'rxjs';
import { JobsClass } from 'src/app/models/jobs.models';
import { TokenService } from 'src/app/services/tokenService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyjobsDialogEditComponent } from './myjobs-dialog-edit/myjobs-dialog-edit.component';


@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {

  isLogged:boolean = false;

  jobsDataArr: JobsClass[] = [];

  constructor(public jobsData:DataService,  public verifiToken:TokenService, private matDiaLog: MatDialog ) {  }

 
  openDialog(indexOfelement:number){
    if (indexOfelement===-1){
      this.matDiaLog.open(MyjobsDialogEditComponent, {data:[]
      }).componentInstance.aboutChange.subscribe(result=> location.reload());
    }else{
      this.matDiaLog.open(MyjobsDialogEditComponent,{
        data: this.jobsDataArr[indexOfelement]
      }).componentInstance.aboutChange.subscribe(result=> this.jobsDataArr[indexOfelement]=result)
    }
    
    }


    removeItem(indexOfelement:number){
      this.jobsData.removeJobs(this.jobsDataArr[indexOfelement]).pipe()
      .subscribe( res => {
        if ( res.status){
       alert('Dato Eliminado Correctamente')
       location.reload()
        }
      },(catchError) => {
        alert('Error al Eliminar')
      });
      
      
      }



  ngOnInit(): void {
    this.jobsData.meJobs().pipe( tap(res => {
      this.jobsDataArr=res
    }    )).subscribe();

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
  
 
  }



}
