import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap-commande',
  templateUrl: './recap-commande.component.html',
  styleUrls: ['./recap-commande.component.css']
})
export class RecapCommandeComponent implements OnInit{
  loading = true;
  checkbox = false;
  products: any[] = [
    {
      name : "produit 1",
      image : "https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_purple_1.jpg",
      price : "300",
      category : "Telephone"
    },
    {
      name : "produit 1",
      image : "https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_purple_1.jpg",
      price : "300",
      category : "Telephone"
    },
    {
      name : "produit 1",
      image : "https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_purple_1.jpg",
      price : "300",
      category : "Telephone"
    },
  ]

  ngOnInit(): void {
    this.loading = false;
    console.log(this.products[0].name)
  }

 


}
