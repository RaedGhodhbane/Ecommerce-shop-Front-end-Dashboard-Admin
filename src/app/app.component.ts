import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { tokenGetter } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showMenu = false
  clrVerticalNavCollapsed: boolean = false;


  constructor(private router: Router) {
    console.log('token',tokenGetter())
    this.router.events.subscribe((event: any) => {
      if (event.url) {
      
        if (event.url === '/auth/login') {
          this.showMenu = false;
        } else {
          if (event.url === '') {
            if (tokenGetter().length == 0) {
              console.log("tokenGetter().length",tokenGetter().length  )
              this.showMenu = false;
              this.router.navigate(['auth/login']);
            }
            else {
              this.showMenu = true;
              this.router.navigate(['dashboard']);

            }
          }
          else {
            this.showMenu = true;
          }
        }
      }
    });
  }
}
