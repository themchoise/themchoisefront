import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {  MatToolbarModule} from '@angular/material/toolbar';
import {  MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { AboutComponent } from './portfolio/about/about.component';
import { DataService } from './services/data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginService } from './services/login.services';
import {MatGridListModule} from '@angular/material/grid-list';
import { AboutDialogEditComponent } from './portfolio/about/about-dialog-edit/about-dialog-edit.component';
import { MyjobsComponent } from './portfolio/myjobs/myjobs.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MyjobsDialogEditComponent } from './portfolio/myjobs/myjobs-dialog-edit/myjobs-dialog-edit.component';
import { EducationComponent } from './portfolio/education/education.component';
import { MatTableModule } from '@angular/material/table'  
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EducationDialogEditComponent } from './portfolio/education/education-dialog-edit/education-dialog-edit.component';



@NgModule({
  declarations: [AppComponent, AboutComponent, LoginComponent, PortfolioComponent, AboutDialogEditComponent, MyjobsComponent, SkillsComponent, MyjobsDialogEditComponent, EducationComponent, EducationDialogEditComponent
 ],
  imports: [
    RouterModule.forRoot([]),
    FormsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSliderModule,   
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MatGridListModule,
    MatTableModule,
        NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
    
  ],
  providers: [DataService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
