import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly auth = inject(Auth);

  async signInWithEmailAndPassword(
    email: string,
    password: string,
  ) {
    try {
      const result = await signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      return result.user;
    } catch (error: unknown) {
      if ((error as firebase.FirebaseError).code) {
        switch ((error as firebase.FirebaseError).code) {
          case 'auth/user-not-found':
            throw Error('User not found');
          case 'auth/wrong-password':
            throw Error('Wrong password');
          default:
            throw Error('Invalid email or password');
        }
      }
      throw Error('An error occurred');
    }
  }
}
