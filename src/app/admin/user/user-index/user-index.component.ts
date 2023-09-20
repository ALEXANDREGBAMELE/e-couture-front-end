import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';


import { Product } from 'src/app/shared/data/articles';
import { ProductService } from 'src/app/shared/services/productservice';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})

export class UserIndexComponent implements OnInit{
  users!: User[] | any;

  constructor(private userService : UserService) {}
  form! : FormGroup  
  ngOnInit() {
      this.userService.getAllUsers().subscribe((data) => {
          this.users = data;
          console.log(data)
      });

  }
  

}
