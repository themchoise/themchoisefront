import { Component,OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ApiService } from '../services/ApiService';
import { TokenService } from '../services/tokenService';
import { VerifyToken } from '../helper/verifi_token';
  import { ViewportScroller } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ApiService],

})
export class PortfolioComponent implements OnInit  {

 

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  goToLink(url: string){
    window.open(url, "_blank");
}

handleRoute():void{
  this.router.navigateByUrl('/login');
}

handleLogOut():void{
  localStorage.removeItem('X-TOKEN');
  location.reload();
}

public isLogged:boolean = false;

 constructor(private observer: BreakpointObserver, private viewportScroller: ViewportScroller, private router: Router, private apiService:ApiService,  public verifiToken:TokenService ) {}

public onClick(elementId: string): void{ 

  this.viewportScroller.scrollToAnchor(elementId)
  ; } 

 ngOnInit(): void {
  
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
  
  use(message:string){
    this.apiService.alerTest(message);
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1200px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

}
