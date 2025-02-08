import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {ToastsContainerComponent} from "../../services/toast/toast-container.componenet";
import {TopbarComponent} from "./topbar/topbar.component";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    ToastsContainerComponent,
    TopbarComponent
  ],
  templateUrl: './layout.component.html'
})

export class LayoutComponent implements OnInit {

  isCondensed = false;
  getsize = 'lg';

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.router.events.subscribe((event: any) => {
      if (document.documentElement.getAttribute('data-preloader') == 'enable') {
        if (event instanceof NavigationEnd) {
          // Update the attribute state based on the current route or any other conditions
          if (event.url !== '/disabled-route') {
            (document.getElementById("preloader") as HTMLElement).style.opacity = "1";
            (document.getElementById("preloader") as HTMLElement).style.visibility = "";
            setTimeout(() => {
              (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
              (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
            }, 1000);
          } else {
            (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
            (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
          }
        }
      }
    });

    this.handlePreloader(this.activatedRoute.snapshot.routeConfig?.path);
    if (document.documentElement.getAttribute('data-sidebar-size') == 'lg') {
      window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth <= 767) {
          document.documentElement.setAttribute('data-sidebar-size', '');
          document.querySelector('.hamburger-icon')?.classList.add('open')
        }
        else if (document.documentElement.clientWidth <= 1024) {
          document.documentElement.setAttribute('data-sidebar-size', 'sm');
          document.querySelector('.hamburger-icon')?.classList.add('open')
        }
        else if (document.documentElement.clientWidth >= 1024) {
          if (document.documentElement.getAttribute('data-layout-width') == 'fluid') {
            document.documentElement.setAttribute('data-sidebar-size', 'lg');
            document.querySelector('.hamburger-icon')?.classList.remove('open')
          }
        }
      })
    }
  }
  private handlePreloader(route: any) {
    if (route !== '/disabled-route') {
      (document.getElementById("preloader") as HTMLElement).style.opacity = "1";
      (document.getElementById("preloader") as HTMLElement).style.visibility = "";
      setTimeout(() => {
        (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
        (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
      }, 1000);
    } else {
      (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
      (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
    }
  }



  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    const currentSIdebarSize = document.documentElement.getAttribute("data-sidebar-size");
    if (document.documentElement.clientWidth >= 767) {
      if (currentSIdebarSize == null) {
        if (document.documentElement.getAttribute('data-sidebar-size') == null || document.documentElement.getAttribute('data-sidebar-size') == "lg") {
          document.documentElement.setAttribute('data-sidebar-size', 'sm');
        } else {
          document.documentElement.setAttribute('data-sidebar-size', 'lg');
        }
      } else if (currentSIdebarSize == "md") {
        if (document.documentElement.getAttribute('data-sidebar-size') == "md") {
          document.documentElement.setAttribute('data-sidebar-size', 'sm');
        } else {
          document.documentElement.setAttribute('data-sidebar-size', 'md');
        }
      } else {
        if (document.documentElement.getAttribute('data-sidebar-size') == "sm") {
          document.documentElement.setAttribute('data-sidebar-size', 'lg');
        } else {
          document.documentElement.setAttribute('data-sidebar-size', 'sm');
        }
      }
    }

    if (document.documentElement.clientWidth <= 767) {
      document.body.classList.toggle('vertical-sidebar-enable');
    }
    this.isCondensed = !this.isCondensed;
  }

  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.style.visibility = "visible";

    }
  }

  onResize(event: any) {
    if (document.body.getAttribute('layout') == "twocolumn") {
      if (event.target.innerWidth <= 767) {
        this.eventService.broadcast('changeLayout', 'vertical');
      } else {
        this.eventService.broadcast('changeLayout', 'twocolumn');
        document.body.classList.remove('twocolumn-panel');
        document.body.classList.remove('vertical-sidebar-enable');
      }
    }

  }
}
