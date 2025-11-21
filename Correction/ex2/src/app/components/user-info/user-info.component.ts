import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  name = signal('Jean Dupont');
  age = signal(25);

  isMajor = computed(() => this.age() >= 18);

  constructor() {
    effect(() => {
      console.log(`Utilisateur: ${this.name()}, Âge: ${this.age()}`);
    });

    effect(() => {
      if (!this.isMajor()) {
        console.error(`ERREUR: ${this.name()} est mineur (${this.age()} ans)`);
      }
    });
  }
}

