import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/data/articles';
import { ProductService } from 'src/app/shared/services/productservice';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})

export class UserIndexComponent implements OnInit{
  user!: User[] | any;

  constructor(private userService : UserService) {}

  ngOnInit() {
      this.userService.getAllUsers().subscribe((data) => {
          this.user = data;
          console.log(data)
      });
  }
  

}
