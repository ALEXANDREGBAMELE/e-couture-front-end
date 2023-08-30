import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../shared/data/produit";
import {ProduitService} from "../../../shared/services/produit.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits!: Produit[];
  constructor(private productService: ProduitService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.produits = data);
  }

}
