import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/Interfaces';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user : User = {
    Name:'',
    Email:'',
    Password:''
  }

  updateUserForm = this.fb.group({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  constructor(private store : Store<{user:User}>,private fb : FormBuilder){
    this.store.select('user').subscribe(data=>{
      this.user = {
        Name:"onesmus",
        Email:"ones@gmail.com",
        Password:"12345"
      }
      this.updateUserForm.patchValue({
        name: this.user.Name,
        email: this.user.Email,
        password: this.user.Password
      })
    })
  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.updateUserForm.value);
  }



}
