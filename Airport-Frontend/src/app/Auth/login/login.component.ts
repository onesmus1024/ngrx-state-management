import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ErrorComponent } from 'src/app/error/error.component';
import { Store } from '@ngrx/store';
import { LoginUser } from 'src/app/Interfaces';
import * as UserActions from '../../State/Actions/user.actions'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ErrorComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  error=null
  constructor(private fb:FormBuilder, private authentication:AuthenticationService, private auth :AuthService,
    private router:Router,private store : Store<{user:LoginUser}>
    ){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, Validators.required]
    })
  }

  submitForm(){
    if(this.form.valid){
      this.store.dispatch(UserActions.login({Email:this.form.value.Email,Password:this.form.value.Password}))
      this.auth.login()
      this.router.navigate([''])
    
    }
  }


  Close(){
    this.error=null
  }

 
}
