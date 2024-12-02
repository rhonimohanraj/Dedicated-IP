type menuType = {
  key: string
  icon: string
  label: string
  url: string
}

export const sidebarMenu: menuType[] = [
  {
    key: 'account-details',
    icon: 'bx-cog',
    label: 'Account Details',
    url: '/account/details',
  },
  {
    key: 'account-security',
    icon: 'bx-lock-alt',
    label: 'Security',
    url: '/account/security',
  },
  {
    key: 'account-notifications',
    icon: 'bx-bell',
    label: 'Notifications',
    url: '/account/notifications',
  },
  {
    key: 'account-messages',
    icon: 'bx-chat',
    label: 'Messages',
    url: '/account/messages',
  },
  {
    key: 'account-saved-items',
    icon: 'bx-bookmark',
    label: 'Saved Items',
    url: '/account/saved-items',
  },
  {
    key: 'account-collections',
    icon: 'bx-collection',
    label: 'My Collections',
    url: '/account/collections',
  },
  {
    key: 'account-payment-details',
    icon: 'bx-credit-card-front',
    label: 'Payment Details',
    url: '/account/payment-details',
  },
  {
    key: 'account-sign-out',
    icon: 'bx-log-out',
    label: 'Sign Out',
    url: '/account/sign-in',
  },
]
