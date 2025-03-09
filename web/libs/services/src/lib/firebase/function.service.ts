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

  createPaymentLink = async (productId: string, serverName: string): Promise<HttpsCallableResult<{
    url: string
  }>> => {
    const createPaymentLink = httpsCallable(this.function, 'onCreatePaymentLink',
      { limitedUseAppCheckTokens: true });
    return await createPaymentLink({ productId , serverName}) as HttpsCallableResult<{
      url: string
    }>;
  }

  createBillingPortal = async (): Promise<HttpsCallableResult<{
    url: string
  }>> => {
    const createBillingPortal = httpsCallable(this.function, 'onCreateBillingPortal',
      { limitedUseAppCheckTokens: true });
    return await createBillingPortal() as HttpsCallableResult<{
      url: string
    }>;
  }

  reverseProxy = async (domainName: string, functionName:string, body: any): Promise<HttpsCallableResult<string>> => {
    const reverseProxy = httpsCallable(this.function, 'onReverseProxy',
      { limitedUseAppCheckTokens: true });
    return await reverseProxy({domainName, functionName, body}) as HttpsCallableResult<string>;
  }
}
