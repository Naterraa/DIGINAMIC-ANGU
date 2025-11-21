import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'user-page',
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  firstName = signal('Jean');
  lastName = signal('Dupont');
  age = signal(28);
  email = signal('jean.dupont@example.com');
  city = signal('Paris');

  constructor() {
    effect(() => {
      console.log('=== Récapitulatif utilisateur ===');
      console.log(`Prénom: ${this.firstName()}`);
      console.log(`Nom: ${this.lastName()}`);
      console.log(`Âge: ${this.age()} ans`);
      console.log(`Email: ${this.email()}`);
      console.log(`Ville: ${this.city()}`);
      console.log('================================');
    });
  }

  updateFirstName(value: string) {
    this.firstName.set(value);
  }

  updateLastName(value: string) {
    this.lastName.set(value);
  }

  updateAge(value: number) {
    this.age.set(value);
  }

  updateEmail(value: string) {
    this.email.set(value);
  }

  updateCity(value: string) {
    this.city.set(value);
  }
}

