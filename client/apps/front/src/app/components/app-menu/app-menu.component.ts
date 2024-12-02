import { Component, Input } from '@angular/core'
import {
  findAllParent,
  findMenuItem,
  getMenuItemFromURL,
  getMenuItems,
} from 'src/app/helpers/utils'
import { MenuItemComponent } from './components/menu-item.component'
import { MegaMenuColumnComponent } from './components/mega-menu-column.component'
import { splitArray } from 'src/app/utils'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import type { MenuItemType } from 'src/app/common/menu-items'
import { CommonModule } from '@angular/common'
import { basePath } from '@states/constants'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuItemComponent,
    MegaMenuColumnComponent,
    NgbDropdownModule,
    CommonModule,
  ],
  templateUrl: './app-menu.component.html',
})
export class AppMenuComponent {
  @Input() theme: string = ''
  menuItems = getMenuItems()
  splitArray = splitArray

  activeMenuItems?: string[]
  trimmedURL = location.pathname?.replaceAll(basePath !== '' ? basePath + '/' : '', '/')
  matchingMenuItem: MenuItemType | undefined

  ngOnInit(): void {
    if (this.menuItems)
      this.matchingMenuItem = getMenuItemFromURL(
        this.menuItems,
        this.trimmedURL
      )
    if (this.matchingMenuItem) {
      const activeMt = findMenuItem(this.menuItems, this.matchingMenuItem.key)
      if (activeMt) {
        this.activeMenuItems = [
          activeMt.key,
          ...findAllParent(this.menuItems, activeMt),
        ]
      }
    }
  }

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems?.includes(item.key) ? ' active' : ''
  }
}
