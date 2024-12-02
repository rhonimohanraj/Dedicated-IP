import { Route } from '@angular/router'
import { DetailsComponent } from './details/details.component'
import { SecurityComponent } from './security/security.component'
import { MessagesComponent } from './messages/messages.component'
import { NotificationsComponent } from './notifications/notifications.component'
import { SavedItemsComponent } from './saved-items/saved-items.component'
import { CollectionsComponent } from './collections/collections.component'
import { PaymentComponent } from './payment/payment.component'

export const ACCOUNT_ROUTES: Route[] = [
  {
    path: 'details',
    component: DetailsComponent,
    data: { title: 'Account - Detail' },
  },
  {
    path: 'security',
    component: SecurityComponent,
    data: { title: 'Account - Security' },
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: { title: 'Account - Notifications' },
  },
  {
    path: 'messages',
    component: MessagesComponent,
    data: { title: 'Account - Messages' },
  },
  {
    path: 'saved-items',
    component: SavedItemsComponent,
    data: { title: 'Account - Saved Items' },
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    data: { title: 'Account - Collections' },
  },
  {
    path: 'payment-details',
    component: PaymentComponent,
    data: { title: 'Account - Payment Details' },
  },
]
