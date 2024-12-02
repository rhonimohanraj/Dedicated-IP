import { Component, inject, type OnInit } from '@angular/core'
import { sidebarMenu } from './data'
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-account-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, NgbTooltipModule, NgbCollapseModule],
  templateUrl: './account-sidebar.component.html',
  styles: ``,
})
export class AccountSidebarComponent implements OnInit {
  menuList = sidebarMenu
  currentPath!: string
  isCollapsed = true

  private router = inject(Router)

  ngOnInit(): void {
    this.currentPath = window.location.pathname

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentPath = event.url
        this.isCollapsed = true
      }
    })
  }
}
