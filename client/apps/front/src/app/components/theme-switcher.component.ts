import { Component, Input, type OnDestroy } from '@angular/core'
import type { Subscription } from 'rxjs'
import { ThemeModeService } from 'src/app/core/services/theme-mode.service'

@Component({
  selector: 'component-theme-switcher',
  standalone: true,
  imports: [],
  styles: `
    :host(component-theme-switcher) {
      display: contents;
    }
  `,
  template: `
    <div
      class="form-check form-switch mode-switch pe-lg-1 ms-auto me-4"
      data-bs-toggle="mode"
    >
      <input
        type="checkbox"
        class="form-check-input"
        id="theme-mode"
        [defaultChecked]="isDarkMode"
        (click)="themeModeService.toggleTheme()"
      />
      <label class="form-check-label d-none d-sm-block" for="theme-mode"
        >Light</label
      >
      <label class="form-check-label d-none d-sm-block" for="theme-mode"
        >Dark</label
      >
    </div>
  `,
})
export class ThemeSwitcherComponent implements OnDestroy {
  isDarkMode = false
  isDarkSubscription!: Subscription

  constructor(public themeModeService: ThemeModeService) {
    this.isDarkSubscription = this.themeModeService.isDarkMode$.subscribe(
      (value) => {
        this.isDarkMode = value
      }
    )
  }

  ngOnDestroy(): void {
    if (this.isDarkSubscription) {
      this.isDarkSubscription.unsubscribe()
    }
  }
}
