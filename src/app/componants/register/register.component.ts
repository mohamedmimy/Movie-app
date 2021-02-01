import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  err: string;
// tslint:disable-next-line: variable-name
  constructor(public _AuthService: AuthService , public _Router: Router) { }

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl ( null , [Validators.required , Validators.minLength(3) , Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
    last_name: new FormControl ( null , [Validators.required , Validators.minLength(3) , Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
    age: new FormControl ( null , [Validators.required , Validators.min(10), ]),
    email: new FormControl ( null , [Validators.required, Validators.email]),
    password: new FormControl ( null , [Validators.required, Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
  });
  
  ngOnInit(): void {
  }

  getFormData(formData)
  {
    if ( formData.valid == true)
    {
       this._AuthService.signUp(formData.value).subscribe(data =>{

          if ( data.message == 'success')
         {
           this._Router.navigate(['/signin']);
         }
         else
         {
          this.err = 'mail is already existed ';
         }
        }
      );
    }
  }
}
