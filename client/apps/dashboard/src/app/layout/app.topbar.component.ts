import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AppSidebarComponent } from './app.sidebar.component';
import { FirebaseService } from '@dedicated-ip/service';
import { signOut } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    standalone: false
})
export class AppTopbarComponent {

    private readonly firebaseService = inject(FirebaseService);
    private readonly router = inject(Router);
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('searchinput') searchInput!: ElementRef;
    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;
    searchActive: boolean = false;
    constructor(public layoutService: LayoutService,public el: ElementRef) { }
    activateSearch() {
        this.searchActive = true;
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 100);
    }

    deactivateSearch() {
        this.searchActive = false;
    }
    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    onSidebarButtonClick() {
        this.layoutService.showSidebar();
    }

    async onLogout(): Promise<void> {
      await this.firebaseService.signOut();
      await this.router.navigate(['/auth/login']);
    }
}
