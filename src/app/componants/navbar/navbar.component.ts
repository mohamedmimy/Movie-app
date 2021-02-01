import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  myImages: string = 'assets/images/c3.png';
  isLogin: boolean = false;
  constructor(public _AuthService: AuthService, public _Router:Router)
  {
    _AuthService.userData.subscribe(data =>
      {
        if (data)
      {
        this.isLogin = true;
      }
      else
      {
        this.isLogin = false;
      }
      });
  }
  logOut()
      {
        localStorage.clear()
        this._Router.navigate(['/signin'])
        this.isLogin = false;
      }
  ngOnInit(): void {
  }

}
