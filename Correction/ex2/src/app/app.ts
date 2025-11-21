import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeWithNameComponent } from './components/welcome-with-name/welcome-with-name.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPageComponent } from './components/user-page/user-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeWithNameComponent, UserInfoComponent, UserPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ex2');
}
