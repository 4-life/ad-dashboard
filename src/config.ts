import { User } from './types';

const menu = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    icon: 'home',
  },
  {
    title: 'Alerts',
    link: '/alerts',
    icon: 'notify',
    alertsNumber: 3,
  },
  {
    title: 'Studio',
    link: '/studio',
    icon: 'studio',
  },
  {
    title: 'Reports',
    link: '/reports',
    icon: 'reports',
  },
  {
    title: 'Settings',
    link: '/settings',
    icon: 'settings',
  },
];

export { menu };

export const user: User = {
  avatar: './avatar.webp',
  name: 'John Doe',
  email: 'johndoe@me.com',
};

export const activityData = [
  {
    id: '1',
    date: new Date(),
    name: 'John Doe',
    email: 'johndoe@me.com',
    avatar: './avatar.webp',
    subject: 'Your report has been approved',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
