import { Component, signal } from '@angular/core';

@Component({
  selector: 'welcome-with-name',
  imports: [],
  templateUrl: './welcome-with-name.component.html',
  styleUrl: './welcome-with-name.component.css'
})
export class WelcomeWithNameComponent {
  name = signal('Angular');
}

