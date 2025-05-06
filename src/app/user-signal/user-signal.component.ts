import { Component, computed, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/'+ this.selectedUser().avatar)

  onSelectUser(){
    const randomIndexNew = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndexNew]);
    
    console.log('Clicked!');
  }
}
