import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modele-article',
  templateUrl: './modele-article.component.html',
  styleUrls: ['./modele-article.component.css']
})
export class ModeleArticleComponent {

  carouselData: any[] = [];

  constructor( private router : Router){}
  
  goToDetails(){
    
    this.router.navigate(['/articles/detail']);
  }

  goToArticles(){
    this.router.navigate(['/articles']);
  }
 }
