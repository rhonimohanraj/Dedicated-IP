import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AppSidebarComponent } from './app.sidebar.component';
import {FirebaseService, FunctionService} from '@dedicated-ip/service';
import { signOut } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    standalone: false
})
export class AppTopbarComponent {
    private readonly messageService = inject(MessageService);
    private readonly firebaseService = inject(FirebaseService);
    private readonly functionService = inject(FunctionService);
    private readonly router = inject(Router);
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('searchinput') searchInput!: ElementRef;
    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;
    constructor(public layoutService: LayoutService,public el: ElementRef) { }

    get photoURL(): string {
      return this.firebaseService.currentUser?.photoURL ?? '';
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    async onChangePassword(): Promise<void> {
      await this.firebaseService.sendPasswordResetEmail(this.firebaseService.currentUser!.email!);
      this.messageService.add({
        severity: 'success',
        summary: 'Email sent',
        detail: 'Check your email for instructions',
      });
    }

    async onBillingPortal(): Promise<void> {
      const result = await this.functionService.createBillingPortal();
      window.open(result.data, '_blank');
    }

    async onLogout(): Promise<void> {
      await this.firebaseService.signOut();
      await this.router.navigate(['/auth/login']);
    }
}
