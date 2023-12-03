import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  showPopup: boolean = false


  ngOnInit() {
    this.items = [
      {
        label: 'CATEGORIE',
        // icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Robe',
            routerLink: "/",

          },
          {
            label: 'Chemise',
            routerLink: "/"
          },
          {
            label: 'Pantalon',
            routerLink: "/",

          },
          {
            label: 'Veste',
            routerLink: "/",

          },
          {
            label: 'Haut Feminin',
            routerLink: "/",

          },

        ]
      },
      {
        label: 'ATELIER',
        routerLink: "/atelier",
      },

      {
        label: 'CO-CREATION',
        // icon: 'pi pi-fw pi-calendar'
      },

      {
        label: 'A PROPOS',
        // icon: 'pi pi-fw pi-power-off'
        routerLink: '/apropos'
      },

      {
        label: '',
        icon: 'pi pi-fw pi-user',
        // command: () => {
        //   this.openPopup();
        // }
        items: [
          {
            label: 'CONNEXION',
            routerLink: "/connexion",

          },
          {
            label: 'INSCRIPTION',
            routerLink: "/inscription"
          },
          {
            label: 'PROFILE',
            routerLink: "/"
          },
          {
            label: 'DECONNEXION',
            routerLink: "/"
          }

        ]
      },

      {
        label: '',
        icon: 'pi pi-bell',
        style: { fontSize: '20px' },

      },
      {
        label: '',
        icon: 'pi pi-search',
        style: { fontSize: '50' }
      }
    ];
  }

  openPopup() {
    this.showPopup = !this.showPopup
  }

  constructor( private router : Router){}
  
  goToHome(){
    
    this.router.navigate(['/']);
  }

}
