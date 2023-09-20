import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  constructor( private fb: FormBuilder, private userService : UserService){}
  inscriptionForm!: FormGroup;

  titre: string = "ISCRIPTION";
  users : User = {}
  ngOnInit(): void {

    this.inscriptionForm = this.fb.group({
      nom: ["", [Validators.required]],
      prenom: ["", [Validators.required]],
      telephone: ["", [Validators.required]],
      mail: ["", [Validators.required]],
      password: ["", [Validators.required]],
      passwordConfirm: ["", [Validators.required]],
    });
    // ...

  }

  enregistrer() {
   this.userService.createUser(this.inscriptionForm.value).subscribe(
  (data: User) => {
    // Traitement réussi
    this.users = data;
    console.log(data)
    this.inscriptionForm.reset()

  },
  (error) => {
    // Gestion des erreurs
    console.error('Une erreur s\'est produite lors de la création de l\'utilisateur : ', error);
    // Vous pouvez afficher un message d'erreur à l'utilisateur ici
  }
);

  }
}