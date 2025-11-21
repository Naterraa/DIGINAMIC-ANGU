import { Component } from '@angular/core';
import { TitreComponent } from '../titre/titre.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'page',
  imports: [TitreComponent, WelcomeComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
}

