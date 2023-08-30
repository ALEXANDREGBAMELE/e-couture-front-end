import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  // visible: boolean = false;
  value: string | undefined;
  titre : string = "Connexion";

  @Input() visible : boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

    
}
