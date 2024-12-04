import { computed, Injectable, Signal, signal } from '@angular/core';
import { fetchAndActivate, getRemoteConfig, getBoolean } from '@angular/fire/remote-config';

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

  getBoolean(key: string): Signal<boolean | null> {
    return computed(() => {
      if (this.initialized()) {
        return getBoolean(getRemoteConfig(), key);
      }
      return null;
    });
  }
}
