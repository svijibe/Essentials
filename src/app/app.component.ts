import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { UserSignalComponent } from "./user-signal/user-signal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,  UserSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
