import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Analytics } from '@angular/fire/analytics';

@Component({
  selector: 'lib-firebase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firebase.component.html',
})
export class FirebaseComponent {
  private analytics = inject(Analytics);
}
