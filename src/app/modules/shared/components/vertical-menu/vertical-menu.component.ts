import { Component } from '@angular/core';
import { Menu } from '../../interfaces/menu.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
})
export class VerticalMenuComponent {
  public isCollapsed: boolean = false;
  public isUserCollapsed: boolean = false;

  public menus: Menu[] = [
    {
      id: '1',
      name: 'Clientes',
      icon: 'cliente',
      menus: [
        {
          id: '1.1',
          name: 'Buscar',
          redirectTo: '/home/client/search',
        },
        {
          id: '1.2',
          name: 'Administrar',
          redirectTo: '/home/client/list',
        }
      ]
    },
    /*{
      id: '2',
      name: 'Productos',
      icon: 'producto',
      menus: [
        {
          id: '2.1',
          name: 'Crear',
          redirectTo: '',
        }
      ]
    },*/
    {
      id: '3',
      name: 'Facturas',
      icon: 'factura',
      menus: [
        {
          id: '1.1',
          name: 'Crear',
          redirectTo: '/home/invoice/create',
        }
      ]
    },
    /* {
       id: '4',
       name: 'Informes',
       icon: 'informe'
     }*/
  ];

  public constructor(private authService: AuthService) { }

  public onCollapse() {
    this.isUserCollapsed = !this.isUserCollapsed;
    this.isCollapsed = this.isUserCollapsed;
    this.onCollapseAll();
  }

  public onCollapseSubMenu(menu: Menu) {
    menu.isCollapsed = !menu.isCollapsed;
  }

  public onMouseEnter() {
    if (this.isUserCollapsed) this.isCollapsed = false;
  }

  public onMouseLeave() {
    if (this.isUserCollapsed) {
      this.isCollapsed = true;
      this.onCollapseAll();
    }
  }

  public onLogout() {
    this.authService.logout();
  }

  private onCollapseAll() {
    this.menus.forEach((menu: Menu) => menu.isCollapsed = false);
  }
}
