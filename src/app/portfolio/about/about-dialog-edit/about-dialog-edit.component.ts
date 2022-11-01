import { Component, Inject,Injectable, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MePersona } from 'src/app/models/me.models';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-about-dialog-edit',
  templateUrl: './about-dialog-edit.component.html',
  styleUrls: ['./about-dialog-edit.component.css']
})
export class AboutDialogEditComponent implements OnInit, OnDestroy {

  @Output() aboutChange = new EventEmitter<string>();

  constructor( @Inject(MAT_DIALOG_DATA) private data:string,  private editAboutMe:DataService, private matDialogRef: MatDialogRef<AboutDialogEditComponent> ) { 
  }

  public candy:string = this.data;
  public statusMsg: string = '';
    
  ngOnInit(): void {
  }
  
  editForm(form:any){
    const meData = new MePersona(1, 'Maximiliano', 'Joyce', form.about_me);
    this.editAboutMe.saveAboutMe(meData).pipe()
    .subscribe( res => {
      if ( res.status){
        this.matDialogRef.close();
        this.aboutChange.emit(form.about_me);
      }
    });
  }

  ngOnDestroy() {
    this.matDialogRef.close(this.data)
}

}
