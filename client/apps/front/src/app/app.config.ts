import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core'
import {
  provideRouter,
  withInMemoryScrolling,
  type InMemoryScrollingFeature,
  type InMemoryScrollingOptions,
} from '@angular/router'
import { provideLottieOptions } from 'ngx-lottie'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule, provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { routes } from './app.routes'
import { IMAGE_CONFIG } from '@angular/common'
import { rootReducer } from './store'
import { AuthenticationEffects } from './store/authentication/authentication.effects'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FakeBackendProvider } from '@helpers/fake-backend'
import { ErrorInterceptor } from '@helpers/error.interceptor'
import { JwtInterceptor } from '@helpers/jwt.interceptor'

// Scroll
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideStore(rootReducer),
    provideEffects(AuthenticationEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    FakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
}
