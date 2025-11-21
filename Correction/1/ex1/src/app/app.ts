import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageComponent } from './components/page/page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, WelcomeComponent, PageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ex1');
}
