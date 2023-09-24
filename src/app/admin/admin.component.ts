import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Accueil',
                icon: 'pi  pi-home',

            },
            {
                label: 'Tableau de bord',
                icon: 'pi  pi-chart-bar',

            },
           
            {
                label: 'Articles',
                icon: 'pi pi-fw  pi-cart-plus',
                items: [
                    {
                        label: 'Prete a porter',
                        icon: 'pi pi-fw ',
                        routerLink : '/admin/article'
                    },
                    {
                        label: 'Precommander',
                        icon: 'pi pi-fw '
                    },
                    {
                        label: 'Maeriaux',
                        icon: 'pi pi-fw',
                        items: [
                            {
                                label: 'Tissu',
                                icon: '',
                            },
                            {
                                label: 'Pagne',
                                icon: '',
                            }
                        ]
                    },
                    
                ]
            },
            {
                label: 'Utilisateurs',
                icon: 'pi pi-fw pi-users',
                
                items : [
                    {
                        label: 'Liste utilisateurs ',
                        routerLink: '/admin/user',
                    },
                    {
                        label: 'Couturier',
                        routerLink: '',
                    },
                    {
                        label: 'Administrateur',
                        routerLink: '',
                    }
                ]

            },
            {
                label: 'Evenements',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            // {
            //     separator: true
            // },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}
//   sidebarVisible = false;

//   toggleSidebar() {
//     this.sidebarVisible = !this.sidebarVisible;
//   }
// }
