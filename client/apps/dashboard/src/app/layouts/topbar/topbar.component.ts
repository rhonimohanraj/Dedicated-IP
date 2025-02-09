import { Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {SimplebarAngularModule} from "simplebar-angular";
import {FirebaseService, FunctionService} from "@dedicated-ip/service";
import {ToastService} from "../../services/toast/toast.service";
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  imports: [
    SimplebarAngularModule,
    NgbDropdownToggle,
    NgbDropdown,
    NgbDropdownMenu,
  ],
})
export class TopbarComponent {
  mode: string | undefined;
  @Output() mobileMenuButtonClicked = new EventEmitter();
  isDropdownOpen = false;

  constructor(private firebaseService: FirebaseService, private functionService: FunctionService, private toastService: ToastService, private eventService: EventService,
              private router: Router) { }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: Event) {
    document.querySelector('.hamburger-icon')?.classList.toggle('open')
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Topbar Light-Dark Mode Change
   */
  changeMode(mode: string) {
    this.mode = mode;
    this.eventService.broadcast('changeMode', mode);

    switch (mode) {
      case 'light':
        document.documentElement.setAttribute('data-bs-theme', "light");
        break;
      case 'dark':
        document.documentElement.setAttribute('data-bs-theme', "dark");
        break;
      default:
        document.documentElement.setAttribute('data-bs-theme', "light");
        break;
    }
  }

  get photoURL(): string {
    return '/images/user-illustarator-1.png';
    return this.firebaseService.currentUser?.photoURL ?? '/images/user-illustarator-1.png';
  }

  get displayName(): string {
    return this.firebaseService.currentUser?.displayName ?? '';
  }

  get email(): string {
    return this.firebaseService.currentUser?.email ?? '';
  }

  async onChangePassword(): Promise<void> {
    this.toastService.show("Sending email for changing password.", { classname: 'bg-info text-white', delay: 15000 });
    await this.firebaseService.sendPasswordResetEmail(this.email);
    this.toastService.show("Email sent, Check your email for instructions.", { classname: 'bg-success text-white', delay: 15000 });
  }

  async onBillingPortal(): Promise<void> {
    this.toastService.show("Creating billing portal for you, Please wait.", { classname: 'bg-info text-white', delay: 15000 });
    const result = await this.functionService.createBillingPortal();
    window.open(result.data, '_blank');
  }

  async onLogout(): Promise<void> {
    await this.firebaseService.signOut();
    await this.router.navigate(['/auth/login']);
  }

  windowScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "block";
      document.getElementById('page-topbar')?.classList.add('topbar-shadow');
    } else {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "none";
      document.getElementById('page-topbar')?.classList.remove('topbar-shadow');
    }
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
