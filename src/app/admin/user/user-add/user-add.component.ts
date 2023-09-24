import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  // les RegExp
  blockSpace: RegExp = /[^s]/;
  blockChars: RegExp = /^[^<>*!]+$/;


  constructor(private fb: FormBuilder, private userService: UserService) { }
  inscriptionForm!: FormGroup;

  titre: string = "ISCRIPTION";
  users: User = {}
  ngOnInit(): void {

    this.inscriptionForm = this.fb.group({
      nom: ["", [Validators.required]],
      prenom: ["", [Validators.required]],
      telephone: ["", [Validators.required]],
      mail: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
    // ...

  }

  enregistrer() {
    this.userService.createUser(this.inscriptionForm.value).subscribe(
      (data: User) => {
        // Traitement réussi
        this.users = data;
        console.log(data)
        alert("succes")
        this.inscriptionForm.reset()

      },
      (error) => {
        // Gestion des erreurs
        alert("erreur")
        console.error('Une erreur s\'est produite lors de la création de l\'utilisateur : ', error);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    );

  }
}
