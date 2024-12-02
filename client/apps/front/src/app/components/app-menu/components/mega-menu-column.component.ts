import { CommonModule } from '@angular/common'
import { Component, Input, type OnChanges } from '@angular/core'
import type { MenuItemType } from 'src/app/common/menu-items'
import { MenuItemComponent } from './menu-item.component'

@Component({
  selector: 'mega-menu-column',
  standalone: true,
  imports: [MenuItemComponent, CommonModule],
  styles: `
    :host(mega-menu-column) {
      display: contents;
    }
  `,
  template: `
    <div class="mega-dropdown-column pt-lg-3 pb-lg-4">
      <ul class="list-unstyled mb-0">
        @for (item of items; track $index; let first = $first) {
          @if (item.isHeading) {
            <h6
              class="px-3 mb-0 {{ labelClassName }}"
              [ngClass]="$index < 1 ? ' mt-0 pt-1' : 'mt-3'"
            >
              {{ item.label }}
            </h6>
          } @else {
            <menu-item
              [item]="item"
              [linkClassName]="'dropdown-item' + getActiveClass(item)"
            />
          }
        }
      </ul>
    </div>
  `,
})
export class MegaMenuColumnComponent {
  @Input() items!: MenuItemType[]
  @Input() ulClassName?: string
  @Input() labelClassName?: string
  @Input() activeMenuItems?: string[]

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems?.includes(item.key) ? ' active' : ''
  }

  constructor() {}
}
