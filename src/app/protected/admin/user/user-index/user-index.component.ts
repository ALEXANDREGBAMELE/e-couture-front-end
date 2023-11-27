import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';


import { Product } from 'src/app/shared/data/articles';
import { ProductService } from 'src/app/shared/services/productservice';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})

export class UserIndexComponent implements OnInit {
  users!: User[] | any;
  user !: User
  items: MenuItem[] | undefined;
  constructor(private userService: UserService) { }
  form!: FormGroup

  ngOnInit() {

    this.getAllUsers();

    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
  ];

  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data as User;
      console.log(this.users[1].userId)

    });
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.userId).subscribe((resl) => {
      console.log("Utilisateur supprimé avec succès");
      // Après la suppression, actualisez la liste en excluant l'utilisateur supprimé
      location.reload
    },
      (error) => {
        console.error("Erreur lors de la suppression de l'utilisateur :", error);
      })
  }
}