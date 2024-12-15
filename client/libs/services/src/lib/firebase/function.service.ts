import { inject, Injectable } from '@angular/core';
import {
  Auth,
} from '@angular/fire/auth';
import {
  Functions,
  httpsCallable,
  HttpsCallableResult,
} from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class FunctionService {
  private readonly auth = inject(Auth);
  private readonly function = inject(Functions);

  public get currentUser() {
    return this.auth.currentUser;
  }

  createPaymentLink = async (priceId: string): Promise<HttpsCallableResult<string>> => {
    const createPaymentLink = httpsCallable(this.function, 'onCreatePaymentLink');
    return await createPaymentLink({ priceId }) as HttpsCallableResult<string>;
  }
}
