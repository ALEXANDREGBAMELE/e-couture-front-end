import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  // les RegExp
  blockSpace: RegExp = /[^s]/;
  blockChars: RegExp = /^[^<>*!]+$/;

  atelierFile: any;
  imgUrl: any;
  public imagePath: any;
  public message!: string;


  constructor(private fb: FormBuilder, private articleService: ArticleService) { }
  enregistrerForm!: FormGroup;

  titre: string = "ISCRIPTION";
  artices: Article = {}
  ngOnInit(): void {

    this.enregistrerForm = this.fb.group({
      libelle: ["", [Validators.required]],
      description: ["", [Validators.required]],
      couleur: ["", [Validators.required]],
      prix: ["", [Validators.required]],
      quantite: ["", [Validators.required]],
    });
    // ...

  }

  enregistrer() {
    this.articleService.createArticle(this.enregistrerForm.value).subscribe(
      (data: Article) => {
        // Traitement réussi
        this.artices = data;
        console.log(data)
        alert("succes")
        this.enregistrerForm.reset()

      },
      (error) => {
        // Gestion des erreurs
        alert("erreur")
        console.error('Une erreur s\'est produite lors de la création de l\'utilisateur : ', error);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    );
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

