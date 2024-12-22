import { inject, Injectable } from '@angular/core';
import {
  Auth,
} from '@angular/fire/auth';
import {collection, doc, Firestore, getDoc, getDocs} from '@angular/fire/firestore';
import { queryOptions } from '@tanstack/angular-query-experimental'
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface User {
  displayName: string;
  uid: string;
  stripeUid: string;
  photoURL: string;
  email: string;
}

export interface Server {
  id: string;
  name: string;
  username: string;
  password: string;
  status: 'pending' | 'active' | 'inactive' | 'deleted';
  domain: string;
  location: string;
  countryCode: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private readonly auth = inject(Auth);
  private readonly firestore = inject(Firestore);

  public get currentUser() {
    return this.auth.currentUser;
  }

  private async GetUser(): Promise<User> {
    const userDoc = doc(this.firestore, 'users', this.currentUser?.uid ?? '');
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
      return userSnap.data() as User;
    } else {
      throw Error('User not found');
    }
  }

  private async GetServers(): Promise<Server[]> {
    const serverCollection = collection(this.firestore, 'users', this.currentUser?.uid ?? '', 'servers');
    const serverSnap = await getDocs(serverCollection);

    const servers: Server[] = [];
    serverSnap.forEach((serverDoc) => {
      const server = { id: serverDoc.id, ...serverDoc.data() } as Server;
      server.domain = 'https://' + server.name + '.dedicated-ip.cloud';
      server.createdAt = (server.createdAt as unknown as Timestamp).toDate();
      servers.push(server);
    });

    servers.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return servers;
  }

  GetUserQuery() {
    return queryOptions({
      queryKey: ['user'],
      queryFn: () => this.GetUser()
    });
  }

  GetServerQuery() {
    return queryOptions({
      queryKey: ['server'],
      queryFn: () => this.GetServers()
    });
  }
}
