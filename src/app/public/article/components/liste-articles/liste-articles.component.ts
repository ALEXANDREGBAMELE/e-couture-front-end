import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tous-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent {
  constructor( private router : Router){}
  
  goToDetails(){
    
    this.router.navigate(['/articles/detail']);
  }

  goToArticles(){
    alert('hello')
    this.router.navigate(['/articles']);
  }
}
