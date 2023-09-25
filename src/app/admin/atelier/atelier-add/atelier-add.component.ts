import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atelier } from 'src/app/shared/models/atelier';
import { AtelierService } from 'src/app/shared/services/atelier.service';

@Component({
  selector: 'app-atelier-add',
  templateUrl: './atelier-add.component.html',
  styleUrls: ['./atelier-add.component.css']
})
export class AtelierAddComponent implements OnInit{
  // les RegExp
  blockSpace: RegExp = /[^s]/;
  blockChars: RegExp = /^[^<>*!]+$/;

  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  constructor(private fb: FormBuilder, private atelierService: AtelierService) { }
  enregistrerAtelierForm!: FormGroup;

  ateliers: Atelier = {}
  ngOnInit(): void {
    this.enregistrerAtelierForm = this.fb.group({
      nom_atelier: ["", [Validators.required]],
      adresse: ["", [Validators.required]],
      ville: ["", [Validators.required]],
      description: ["", [Validators.required]],
      password: ["", [Validators.required]],
      image: ["", [Validators.required]]
    });
   }

  enregistrer() {

    if (!this.selectedFile) {
      console.error('Aucun fichier sélectionné.');
      return;}

      this.atelierService.createAtelier(this.enregistrerAtelierForm.value).subscribe(
        (data: Atelier) => {
          // Traitement réussi
          this.ateliers = data;
          console.log(data)
          alert("succes")
          this.enregistrerAtelierForm.reset()

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
