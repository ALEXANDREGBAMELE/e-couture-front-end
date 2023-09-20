import {Component, OnInit} from '@angular/core';
import {PhotoService} from "../../shared/services/photo.service";
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit{
  images: any[] | undefined;
  articles : Article[] | any;

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }
  _activeIndex: number = 2;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  constructor(private photoService: PhotoService, private articleService : ArticleService) {}
  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    
    this.articleService.getAllArticle().subscribe((data) =>{
      this.articles = data as Article;
    })
  }

 

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }



}
