import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent {

  constructor( private router : Router){}
  
  goToCommande(){
    
    this.router.navigate(['articles/commande/recapt']);
  }
 
  
}
