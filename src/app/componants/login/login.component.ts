import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err: string;
  // tslint:disable-next-line: variable-name
  constructor(public _AuthService: AuthService , public _Router: Router) { }

  signinForm: FormGroup = new FormGroup({
    email: new FormControl ( null , [Validators.required, Validators.email]),
    password: new FormControl ( null , [Validators.required, Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
  });

  ngOnInit(): void {
  }
  getFormData(formData)
  {
    if ( formData.valid == true)
    {

      this._AuthService.signIn(formData.value).subscribe(res =>
        {
          if (res.message == 'success')
          {
            localStorage.setItem("TOKEN", res.token)
            this._AuthService.saveUserData(res.user , res.token);
            this._Router.navigate(['/home']);
          }
          else
          {
            this.err = 'Email Or userName is unCourrcet';
          }
        }
      );
    }
  }

}
