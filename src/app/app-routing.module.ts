import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component:PortfolioComponent},
  { path: 'login', component:LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
