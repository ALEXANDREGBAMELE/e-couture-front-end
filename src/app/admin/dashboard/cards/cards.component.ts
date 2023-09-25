import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  users = [
    { count: 2000, label: 'Users 1', style: { backgroundColor: 'red' } },
    { count: 3000, label: 'Users 2', style: { backgroundColor: 'green' } },
    { count: 1500, label: 'Users 3', style: { backgroundColor: 'blue' } },
    { count: 2500, label: 'Users 4', style: { backgroundColor: 'yellow' } },
    { count: 1800, label: 'Users 5', style: { backgroundColor: 'black' } }
  ];
  
}
