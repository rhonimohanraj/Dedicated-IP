import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import type { MenuItemType } from 'src/app/common/menu-items'

@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [RouterModule],
  styles: `
    :host(menu-item) {
      display: contents;
    }
  `,
  template: `
    <li [class]="itemClassName">
      <a
        routerLink="{{ item.url }}"
        [class]="linkClassName"
        [target]="item.target ?? '_self'"
      >
        {{ item.label }}
        @if (item.isNew) {
          <span class="badge bg-success ms-2">New</span>
        }
      </a>
    </li>
  `,
})
export class MenuItemComponent {
  @Input() item!: MenuItemType
  @Input() linkClassName?: string
  @Input() itemClassName?: string
}
