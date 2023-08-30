import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getData() {
    return [
      {
        itemImageSrc: 'https://i.pinimg.com/236x/4b/ce/97/4bce9759c72b17a16ea407ebaa1e44ce.jpg',
        thumbnailImageSrc: 'https://www.vlisco.com/media/catalog/product/cache/bbd733f406dd975f233b643d1f56cf29/v/l/vl_fi_vl00633.291_r_00.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
        price: "5000",
        routerlink : "/detail"
      },
      {
        itemImageSrc: 'https://i.pinimg.com/1200x/49/72/97/4972971040f5ff74b127fe318c1028d9.jpg',
        thumbnailImageSrc: 'https://www.shutterstock.com/image-vector/textile-fashion-african-print-fabric-260nw-1149923612.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
        price: "5000",
        routerlink : "/detail"
      },
      {
        itemImageSrc: 'https://royaumedafrique.fr/cdn/shop/products/Ensemble-Jupe-et-haut-en-Pagne-Wax_grande.jpg',
        thumbnailImageSrc: 'https://s.alicdn.com/@sc04/kf/HTB1ShE6PFXXXXXoXFXXq6xXFXXX8.jpg_100x100xz.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
        price: "5000",
        routerlink : "/detail"
      },
      {
        itemImageSrc: 'https://ilovemyafrica.com/cdn/shop/products/26pouhhces-943806_720x.jpg',
        thumbnailImageSrc: 'https://i.pinimg.com/236x/b6/a4/8e/b6a48ecc0b75d2ce75e2bf68639fbcab.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
        price: "5000",
        routerlink : "/detail"
      },
      {
        itemImageSrc: 'https://i.pinimg.com/564x/52/ae/9a/52ae9ac4d7bf464496d8f1e1a78b379d.jpg',
        thumbnailImageSrc: 'https://i.pinimg.com/736x/0f/40/bd/0f40bd3c08a56205e8e3f5d06e4e8fe8.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
        price: "5000",
        routerlink : "/detail"
      },
    ];
  }
  getImages() {
    return Promise.resolve(this.getData());
  }
}
