import { Component, Inject,Injectable, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MePersona } from 'src/app/models/me.models';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.services';
import { JobsClass } from '../../../models/jobs.models';
import { EducationClass } from '../../../models/education.model';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-myjobs-dialog-edit',
  templateUrl: './myjobs-dialog-edit.component.html',
  styleUrls: ['./myjobs-dialog-edit.component.css']
})
export class MyjobsDialogEditComponent implements OnInit {

  



  @Output() aboutChange = new EventEmitter<any>();

  constructor( @Inject(MAT_DIALOG_DATA) private data:any,  private editJobs:DataService, private matDialogRef: MatDialogRef<MyjobsDialogEditComponent> ) { 
  }

  public statusMsg: string = '';

  public id:number = this.data.id;
  public company = this.data.company
  public job_title = this.data.job_title
  public job_desc = this.data.job_desc
  public year_start = this.data.year_start
  public year_end = this.data.year_end

    
  ngOnInit(): void {

  


  }
  
  editForm(form:any){
    
     let a = form;
    const meJobs = new JobsClass(this.id, a.company,a.job_title,a.job_desc,a.year_start,a.year_end)
    this.editJobs.saveJobs(meJobs).pipe()
  
    .subscribe( res => {
      if ( res.status){
        this.matDialogRef.close();
        this.aboutChange.emit(form);
      }
    }, catchError => {
      alert('Error al guardar')
    });
    
  }

  ngOnDestroy() {
    this.matDialogRef.close(this.data)
}

}



