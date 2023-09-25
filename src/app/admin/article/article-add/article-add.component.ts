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
}

