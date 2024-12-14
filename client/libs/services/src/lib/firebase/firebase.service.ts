import { inject, Injectable } from '@angular/core';
import {
  Auth,
  confirmPasswordReset, createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword, signInWithPopup, updatePassword,
  verifyPasswordResetCode
} from '@angular/fire/auth';
import { GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly auth = inject(Auth);

  public get currentUser() {
    return this.auth.currentUser;
  }

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
      if ((error as FirebaseError).code) {
        switch ((error as FirebaseError).code) {
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

  async createUserWithEmailAndPassword(
    email: string,
    password: string,
  ) {
    try {
      const result = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      return result.user;
    } catch (error: unknown) {
      if ((error as FirebaseError).code) {
        switch ((error as FirebaseError).code) {
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

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    return result.user;
  }

  async signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    return result.user;
  }

  async signInWithGithub() {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    return result.user;
  }

  async signInWithTwitter() {
    const provider = new TwitterAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    return result.user;
  }

  async signOut() {
    await this.auth.signOut();
  }

  async sendPasswordResetEmail(email: string) {
    await sendPasswordResetEmail(this.auth, email);
  }

  async verifyPasswordResetCode(code: string) {
    return verifyPasswordResetCode(this.auth, code);
  }

  async confirmPasswordReset(code: string, newPassword: string) {
    await confirmPasswordReset(this.auth, code, newPassword);
  }

  async updatePassword(newPassword: string) {
    await updatePassword(this.auth.currentUser!, newPassword);
  }
}
