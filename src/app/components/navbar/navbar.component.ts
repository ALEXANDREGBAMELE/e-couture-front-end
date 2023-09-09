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
            routerLink : "/boutique",
          },

          {
            label: 'CO-CREATION',
            // icon: 'pi pi-fw pi-calendar'
          },

          {
            label: 'A PROPOS',
            // icon: 'pi pi-fw pi-power-off'
            routerLink:'/apropos'
          },

        {
          label: '',
          icon: 'pi pi-fw pi-user',
            // command: () => {
            //   this.openPopup();
            // }
            items: [
              {
                  label: 'SE CONNECTER',
                  routerLink: "/login",

              },
              {
                  label: 'S\'INSCRIRE',
                  routerLink: "/register"
              },
              {
                label: 'SE DECONNECTER',
                routerLink: "/"
            },

          ]
        },

        {
          label: '',
          icon: 'pi pi-fw pi-bell',
        },
      ];
  }

  openPopup(){
      this.showPopup = !this.showPopup
  }
}
