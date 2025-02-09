import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, signal } from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import {SimplebarAngularModule} from "simplebar-angular";
import {NgClass} from "@angular/common";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import {FirestoreService} from "@dedicated-ip/service";
import {injectQueryClient, QueryObserver} from "@tanstack/angular-query-experimental";

@Component({
  selector: 'app-sidebar',
  imports: [
    SimplebarAngularModule,
    NgClass,
    NgbCollapse,
    RouterLink
  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  private readonly queryClient = injectQueryClient();

  menuItems = signal<Array<MenuItem>>([]);
  toggle: any = true;
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(private router: Router, private fireStore: FirestoreService) {}

  ngOnInit(): void {
    const unsubscribe = new QueryObserver(this.queryClient, this.fireStore.GetServerQuery()).subscribe(result => {
      if (result.isSuccess) {
        this.menuItems.set(MENU);
        result.data.filter((server) => server.status === "active").forEach((server) => {
          this.menuItems.update((value)=>{
            value.push({
              label: server.name,
              icon: 'ri-server-line',
              isCollapsed:true,
              id: server.id,
              subItems: [
                {
                  label: 'Control Panel',
                  click: () => {
                    this.openControlPanel(server.domain, server.username, server.password);
                  }
                }
              ]
            });
            return value;
          });
        });
        unsubscribe();
      }
    });
    this.router.events.subscribe((event) => {
      if (document.documentElement.getAttribute('data-layout') != "twocolumn") {
        if (event instanceof NavigationEnd) {
          this.initActiveMenu();
        }
      }
    });
  }

  openControlPanel(domain: string, username: string, password: string): void {
    // create hidden form and submit then delete it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = domain + '/login';
    form.target = '_blank';
    const usernameField = document.createElement('input');
    usernameField.type = 'text';
    usernameField.name = 'username';
    usernameField.value = username;
    form.appendChild(usernameField);
    const passwordField = document.createElement('input');
    passwordField.type = 'password';
    passwordField.name = 'password';
    passwordField.value = password;
    form.appendChild(passwordField);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  /***
   * Activate droup down set
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this.initActiveMenu();
    }, 0);
  }

  removeActivation(items: any) {
    items.forEach((item: any) => {
      item.classList.remove("active");
    });
  }

  toggleItem(item: any) {
    this.menuItems().forEach((menuItem: any) => {

      if (menuItem == item) {
        menuItem.isCollapsed = !menuItem.isCollapsed
      } else {
        menuItem.isCollapsed = true
      }
      if (menuItem.subItems) {
        menuItem.subItems.forEach((subItem: any) => {

          if (subItem == item) {
            menuItem.isCollapsed = !menuItem.isCollapsed
            subItem.isCollapsed = !subItem.isCollapsed
          } else {
            subItem.isCollapsed = true
          }
          if (subItem.subItems) {
            subItem.subItems.forEach((childitem: any) => {

              if (childitem == item) {
                childitem.isCollapsed = !childitem.isCollapsed
                subItem.isCollapsed = !subItem.isCollapsed
                menuItem.isCollapsed = !menuItem.isCollapsed
              } else {
                childitem.isCollapsed = true
              }
              if (childitem.subItems) {
                childitem.subItems.forEach((childrenitem: any) => {

                  if (childrenitem == item) {
                    childrenitem.isCollapsed = false
                    childitem.isCollapsed = false
                    subItem.isCollapsed = false
                    menuItem.isCollapsed = false
                  } else {
                    childrenitem.isCollapsed = true
                  }
                })
              }
            })
          }
        })
      }
    });
  }

  activateParentDropdown(item: any) {
    item.classList.add("active");
    const parentCollapseDiv = item.closest(".collapse.menu-dropdown");

    if (parentCollapseDiv) {
      parentCollapseDiv.parentElement.children[0].classList.add("active");
      if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse")) {
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse").previousElementSibling.classList.add("active");
        }
      }
      return false;
    }
    return false;
  }

  updateActive(event: any) {
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      this.removeActivation(items);
    }
    this.activateParentDropdown(event.target);
  }

  initActiveMenu() {
    const pathName = window.location.pathname;

    const active = this.findMenuItem(pathName, this.menuItems())
    this.toggleItem(active)
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      const activeItems = items.filter((x: any) => x.classList.contains("active"));
      this.removeActivation(activeItems);

      const matchingMenuItem = items.find((x: any) => {
          const path = x.pathname
          return path === pathName;
      });
      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }


  private findMenuItem(pathname: string, menuItems: any[]): any {
    for (const menuItem of menuItems) {
      if (menuItem.link && menuItem.link === pathname) {
        return menuItem;
      }

      if (menuItem.subItems) {
        const foundItem = this.findMenuItem(pathname, menuItem.subItems);
        if (foundItem) {
          return foundItem;
        }
      }
    }

    return null;
  }
  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    const sidebarsize = document.documentElement.getAttribute("data-sidebar-size");
    if (sidebarsize == 'sm-hover-active') {
      document.documentElement.setAttribute("data-sidebar-size", 'sm-hover');

    } else {
      document.documentElement.setAttribute("data-sidebar-size", 'sm-hover-active')
    }
  }

  /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.body.classList.remove('vertical-sidebar-enable');
  }
}
