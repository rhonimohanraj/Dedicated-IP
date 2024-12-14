import { inject, Injectable } from '@angular/core';
import {
  Auth,
} from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private readonly auth = inject(Auth);
  private readonly firestore = inject(Firestore);

  public get currentUser() {
    return this.auth.currentUser;
  }
  async GetUser() {
    const userDoc = doc(this.firestore, 'users', this.currentUser?.uid);
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      throw Error('User not found');
    }
  }


}
