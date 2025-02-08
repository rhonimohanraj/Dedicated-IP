import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: "2",
    label: 'Dashboard',
    icon: 'ri-dashboard-2-line',
    link: '/d/',
  },
  {
    id: "54",
    label: 'Shopping',
    isTitle: true
  },
  {
    id: "55",
    label: 'Create Server',
    icon: 'ri-stack-line',
    link: '/d/pricing',
  },
  {
    id: "96",
    label: 'Your Servers',
    isTitle: true
  },
];
