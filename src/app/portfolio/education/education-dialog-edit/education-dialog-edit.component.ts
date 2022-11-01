import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DataService } from 'src/app/services/data.services';
import { JobsClass } from '../../../models/jobs.models';
import { EducationClass } from '../../../models/education.model';

@Component({
  selector: 'app-education-dialog-edit',
  templateUrl: './education-dialog-edit.component.html',
  styleUrls: ['./education-dialog-edit.component.css']
})
export class EducationDialogEditComponent implements OnInit {

  @Output() aboutChange = new EventEmitter<any>();

  constructor( @Inject(MAT_DIALOG_DATA) private data:any,  private education:DataService, private matDialogRef: MatDialogRef<EducationDialogEditComponent> ) { 
  }

  public statusMsg: string = '';
   public id:number=this.data.id
  public academy:string=this.data.academy
  public title:string=this.data.title
  public year_start:string=this.data.year_start
  public year_end:number=this.data.year_end
  public description:number=this.data.description

      ngOnInit(): void {
 
  }
  
  editForm(form:any){
     let a = form;
    const meEducation = new EducationClass(this.id, a.academy,a.title,a.year_start,a.year_end,a.description)
    this.education.saveEducation(meEducation).pipe()
    .subscribe( res => {
      if ( res.status){
        this.matDialogRef.close();
        this.aboutChange.emit(form);
      }
    }, catchError => {
      console.log(catchError)
      alert('Error al guardar')

    });
    
  }

  ngOnDestroy() {
    this.matDialogRef.close(this.data)
}

}


