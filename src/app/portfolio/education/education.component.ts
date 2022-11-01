import { Component, ElementRef, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { EducationClass } from '../../models/education.model';
import { DataService } from '../../services/data.services';
import { TokenService } from '../../services/tokenService';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { EducationDialogEditComponent } from './education-dialog-edit/education-dialog-edit.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  isLogged:boolean = false;
  educationDataArr: any[] = [];
  displayedColumns: string[] = ['select','academy', 'title', 'year_start', 'year_end', 'description'];
      public  dataSource = new MatTableDataSource<EducationClass>();
    selection = new SelectionModel<EducationClass>(true, []);
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor( public educData:DataService, private matDiaLog: MatDialog, public verifiToken:TokenService,  private elementRef: ElementRef) { }

  openDialog(){
    
    this.matDiaLog.open(EducationDialogEditComponent,{
      data: this.r
    }).componentInstance.aboutChange.subscribe(result=> {
      if (result){
        this.educData.meEducation().pipe( tap(res => {
          // this.educationDataArr=res
          this.educationDataArr = res,
          this.dataSource.data = res;
        }    )).subscribe();
      }
    })
    }
    
   /** Whether the number of selected elements matches the total number of rows. */
   r: any
selected(row?: any):void{

  if ( !this.selection.isSelected(row)  ){
    this.r = row;
  }else{
    this.r = null
  }
  


}

  ngOnInit(): void {

    this.educData.meEducation().pipe( tap(res => {
      // this.educationDataArr=res
      this.educationDataArr = res,
      this.dataSource.data = res;
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


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EducationClass): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}



