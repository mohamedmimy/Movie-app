import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  myImages: string = 'assets/images/c3.png';
  // tslint:disable-next-line: no-inferrable-types
  isLogin: boolean = false;
  // tslint:disable-next-line: variable-name
  constructor(public _AuthService: AuthService)
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

  ngOnInit(): void {
  }

}
