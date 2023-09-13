import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/data/produit';
import { ProductService } from 'src/app/shared/services/productservice';
import { ArticleService } from 'src/app/shared/services/article.service';
import { Article } from 'src/app/shared/models/article';
@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {
  // products: Product[] | undefined;
  products: Produit[] | any;
  responsiveOptions: any[] | undefined;
  articles : Article[] | any;
  constructor(private productService: ProductService, private articleService : ArticleService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.articleService.getAllArticle().subscribe((resul) => {
      console.log()
      this.articles = resul as Article
      
      console.log(this.articles)
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

  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }


}

