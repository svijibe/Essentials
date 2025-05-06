import { Component, computed, signal, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user-signal',
  standalone: true,
  imports: [],
  templateUrl: './user-signal.component.html',
  styleUrl: './user-signal.component.css'
})
export class UserSignalComponent {
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })
  
  onSelectUser(){
    console.log('Clicked!');
  }
}
