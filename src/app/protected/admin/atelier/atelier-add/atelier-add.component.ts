import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atelier } from 'src/app/shared/models/atelier';
import { AtelierService } from 'src/app/shared/services/atelier.service';

@Component({
  selector: 'app-atelier-add',
  templateUrl: './atelier-add.component.html',
  styleUrls: ['./atelier-add.component.css']
})
export class AtelierAddComponent implements OnInit {
  // les RegExp
  blockSpace: RegExp = /[^s]/;
  blockChars: RegExp = /^[^<>*!]+$/;

  selectedFile: File | null = null;
  imgUrl: any;
  public imagePath: any;
  public message!: string;

  constructor(private fb: FormBuilder, private atelierService: AtelierService) { }
  enregistrerAtelierForm!: FormGroup;

  ngOnInit(): void {
    this.enregistrerAtelierForm = this.fb.group({
      nomAtelier: ["", [Validators.required]],
      adresse: ["", [Validators.required]],
      ville: ["", [Validators.required]],
      descriptionAtelier: ["", [Validators.required]],
      image: ["", [Validators.required]]
    });
  }

  enregistrer() {
    
    // if (this.enregistrerAtelierForm.invalid) {
    //   // Gérer le cas où le formulaire est invalide (champs manquants, etc.)
    //   console.log('les champs sont invalident')
    //   return;
    // }

    // Créez un objet FormData
    // const formData = new FormData();

    // // Ajoutez les champs du formulaire à formData
    // for (const [key, value] of Object.entries(this.enregistrerAtelierForm.value)) {
    //   if (key === 'image' && value instanceof File) {
    //     // Si la clé est 'image' et que la valeur est une instance de File
    //     formData.append(key, value, value.name); // Utilisez la surcharge de FormData pour le champ de fichier
    //   } else {
    //     formData.append(key, value as string);
    //   }
    // }
    
    // Ajoutez l'image téléchargée à formData
    // if (this.selectedFile) {
    //   formData.append('image', this.selectedFile);
    // }

    this.atelierService.createAtelier(this.enregistrerAtelierForm.value).subscribe(
      (data: Atelier) => {
        // Traitement réussi
        console.log(data);
        this.enregistrerAtelierForm.reset();
        this.selectedFile = null;
      },
      (error) => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite lors de la création de l\'Atelier : ', error);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    );
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];

      var mineType = this.selectedFile!.type
      if (!mineType.startsWith('image/')) {
        this.message = "Ne supporte que les images";
        return;
      }

      var reader = new FileReader();
      this.imagePath = this.selectedFile;
      reader.readAsDataURL(this.selectedFile!);
      reader.onload = (_event) => {
        this.imgUrl = reader.result;
      }
    }
  }
}
