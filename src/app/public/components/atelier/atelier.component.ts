import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/data/produit';
import { ProductService } from 'src/app/shared/services/productservice';
import { ArticleService } from 'src/app/shared/services/article.service';
import { Article } from 'src/app/shared/models/article';
import { Atelier } from 'src/app/shared/models/atelier';
import { AtelierService } from 'src/app/shared/services/atelier.service';
@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {
  // products: Product[] | undefined;
  responsiveOptions: any[] | undefined;
  ateliers : Atelier[] | any;
  constructor( private atelierService : AtelierService) { }

  ngOnInit() {

    this.atelierService.getAllAtelier().subscribe((resul) => {
      this.ateliers = resul as Atelier
      console.log(resul)
    })

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}

