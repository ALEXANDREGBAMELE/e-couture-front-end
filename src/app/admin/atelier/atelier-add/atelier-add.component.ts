import { PropertyRead } from '@angular/compiler';
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
  atelierFile: any;
  imgUrl: any;
  public imagePath: any;
  public message!: string;

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0] as File;
  // }

  constructor(private fb: FormBuilder, private atelierService: AtelierService) { }
  enregistrerAtelierForm!: FormGroup;

  ateliers: Atelier = {}
  ngOnInit(): void {
    this.enregistrerAtelierForm = this.fb.group({
      nomAtelier: ["", [Validators.required]],
      adresse: ["", [Validators.required]],
      ville: ["", [Validators.required]],
      descriptionAtelier: ["", [Validators.required]],
      image: ["", [Validators.required]]
    });
    console.log(this.enregistrerAtelierForm.value)
  }



  enregistrer() {
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
        console.error('Une erreur s\'est produite lors de la création de l\'Atelier : ', error);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
      
    );
    console.log(this.enregistrerAtelierForm.value)
  }

  //Ctte methode permet d'uploader une image
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.atelierFile = file;

      var mineType = event.target.files[0].type
      if (mineType.match(/image\/*/) == null) {
        this.message = "ne supporte que les images";
        return
      }

      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgUrl = reader.result;
      }
    }




  }
}
