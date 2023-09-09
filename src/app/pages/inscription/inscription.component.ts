import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscription = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    mail: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),

  })
  // chiffrement


  titre: string = "ISCRIPTION";

  ngOnInit(): void {
    // ...

  }

  hello() { alert("Hello worl!") }

  enregistrer() {
    // Récupère les données du formulaire
    const data = this.inscription.value;
    
    // Affiche les données du formulaire
    console.log("Nom : ", data.nom);
    console.log("Prénom : ", data.prenom);
    console.log("Telephone : ", data.telephone);
    console.log("Mail : ", data.mail);
    console.log("Mot de passe : ", data.password);
    console.log("Password Confirme : ", data.passwordConfirm);
  }
}