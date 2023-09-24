import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import {ConnexionComponent} from "../../pages/connexion/connexion.component";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  showPopup : boolean = false


  ngOnInit() {
      this.items = [
          {
              label: 'CATEGORIE',
              // icon: 'pi pi-fw pi-file',
              items: [
                  {
                      label: 'HOMME',
                      routerLink: "/",

                  },
                  {
                      label: 'FEMME',
                      routerLink: "/"
                  },

              ]
          },
          {
            label: 'BOUTIQUE',
            routerLink : "/index/boutique",
          },

          {
            label: 'CO-CREATION',
            // icon: 'pi pi-fw pi-calendar'
          },

          {
            label: 'A PROPOS',
            // icon: 'pi pi-fw pi-power-off'
            routerLink:'/index/apropos'
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
                  routerLink: "/index/connexion",

              },
              {
                  label: 'INSCRIPTION',
                  routerLink: "/index/inscription"
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
          style : { fontSize: '20px' },
          
        },
        {
          label : '',
          icon: 'pi pi-search',
          style: { fontSize: '50' }
        }
      ];
  }

  openPopup(){
      this.showPopup = !this.showPopup
  }
}
