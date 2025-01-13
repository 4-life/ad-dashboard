import { ActivityData, User } from './types';

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
  avatar: '00',
  name: 'John Doe',
  email: 'johndoe@me.com',
};

export const activityData: ActivityData[] = [
  {
    id: '1',
    date: new Date(),
    name: 'John Doe',
    email: 'johndoe@me.com',
    avatar: '01',
    type: 'like',
    where: 'facebook',
    message: 'Liked your ad',
    location: {
      lat: 51.52699,
      lng: -0.07991,
    },
  },
  {
    id: '2',
    date: new Date(),
    location: {
      lat: 51.5401,
      lng: -0.08,
    },
  },
  {
    id: '3',
    date: new Date(),
    name: 'Dean Smith',
    email: 'smith@me.com',
    avatar: '02',
    where: 'instagram',
    type: 'comment',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: {
      lat: 51.535,
      lng: -0.099,
    },
  },
  {
    id: '4',
    date: new Date(),
    name: 'Kate Miller',
    email: 'miller@me.com',
    avatar: '03',
    where: 'facebook',
    type: 'newLeader',
    message: 'New leader for FB Cheat Sheet!',
    location: {
      lat: 51.515,
      lng: -0.0999,
    },
  },
  {
    id: '5',
    date: new Date(),
    location: {
      lat: 51.5178,
      lng: -0.09,
    },
  },
];
