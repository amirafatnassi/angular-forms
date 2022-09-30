import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tdf';
  topics = ['angular', 'react', 'vue'];
  userModel = new User('rob', 'rob@test.com', 343232, '', 'morning', true);
}
