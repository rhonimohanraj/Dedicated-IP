import { computed, Injectable, Signal, signal } from '@angular/core';
import { fetchAndActivate, getRemoteConfig, getBoolean } from '@angular/fire/remote-config';
import { getString } from '@firebase/remote-config';
import { Product, ProductDto } from '../DTO/product.dto';

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService {
  public initialized = signal(false);

  constructor() {
    fetchAndActivate(getRemoteConfig()).then(() => {
      this.initialized.set(true);
    });
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
        const productDto = JSON.parse(getString(getRemoteConfig(), 'Products')) as ProductDto;
        return productDto.Products;
      }
      return [];
    });
  }
}
