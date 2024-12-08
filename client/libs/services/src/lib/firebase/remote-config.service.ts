import { computed, Injectable, Signal, signal } from '@angular/core';
import {
  fetchAndActivate,
  getRemoteConfig,
  getBoolean,
} from '@angular/fire/remote-config';
import { getString } from '@firebase/remote-config';
import { Product, ProductDto } from '../DTO/product.dto';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RemoteConfigService {
  public initialized = signal(false);

  constructor() {
    fromPromise(
      fetchAndActivate(getRemoteConfig()).then(() => {
        this.initialized.set(true);
      }),
    )
      .pipe(
        retry({
          count: 10,
          delay: 1000,
          resetOnSuccess: true,
        }),
      )
      .subscribe();
  }

  getString(key: string): Signal<string | null> {
    return computed(() => {
      if (this.initialized()) {
        return getString(getRemoteConfig(), key);
      }
      return null;
    });
  }

  getProducts(): Signal<Product[]> {
    return computed(() => {
      if (this.initialized()) {
        const productDto = JSON.parse(
          getString(getRemoteConfig(), 'Products'),
        ) as ProductDto;
        return productDto.Products;
      }
      return [];
    });
  }
}
