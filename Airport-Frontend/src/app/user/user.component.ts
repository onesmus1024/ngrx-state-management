import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../Interfaces';
import { Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user:User = {
    Name:'onesmus',
    Email:'onesmus@gmail.com',
    Password:'12345'
  }
  // constructor(private store : Store<{user:User}>){
  //   this.store.select('user').subscribe(data=>{
  //     this.user=data
  //   })
  // }

}
