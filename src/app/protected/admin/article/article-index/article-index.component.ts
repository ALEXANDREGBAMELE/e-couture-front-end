import { Component,OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article.service';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-article-index',
  templateUrl: './article-index.component.html',
  styleUrls: ['./article-index.component.css']
})
export class ArticleIndexComponent implements OnInit{
  articles : Article[] | any;
  items: MenuItem[] | undefined;

  constructor(private articleService : ArticleService){}
  ngOnInit(): void {
    this.articleService.getAllArticle().subscribe((data) =>{
      this.articles = data as Article
      const datas = data;
      console.log("les donnees sont : ", datas)
     console.log(JSON.stringify(datas))
    })
  }

  deleleArticle(article : Article){

  }

}
