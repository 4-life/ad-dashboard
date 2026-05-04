import { ActivityData, AlertData, User } from './types';

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

const min15 = 15 * 60 * 1000;
const hour2 = 2 * 60 * 60 * 1000;
const hour5 = 5 * 60 * 60 * 1000;
const hour8 = 8 * 60 * 60 * 1000;
const hour24 = 24 * 60 * 60 * 1000;
const hour26 = 26 * 60 * 60 * 1000;

export const alertsData: AlertData[] = [
  {
    id: 'a1',
    date: new Date(Date.now() - min15),
    title: 'Budget Limit Reached',
    message: 'Your daily budget for "Summer Sale" has been exhausted.',
    severity: 'critical',
    category: 'budget',
    read: false,
    adName: 'Summer Sale',
  },
  {
    id: 'a2',
    date: new Date(Date.now() - hour2),
    title: 'CTR Drop Detected',
    message: 'Click-through rate dropped 32% compared to yesterday.',
    severity: 'warning',
    category: 'performance',
    read: false,
    adName: 'FB Cheat Sheet',
  },
  {
    id: 'a3',
    date: new Date(Date.now() - hour5),
    title: 'New Comment on Ad',
    message: 'Dean Smith commented: "Lorem ipsum dolor sit amet."',
    severity: 'info',
    category: 'engagement',
    read: true,
    adName: 'FB Cheat Sheet',
  },
  {
    id: 'a4',
    date: new Date(Date.now() - hour8),
    title: 'Ad Approval Needed',
    message: 'Your updated ad is pending review before going live.',
    severity: 'critical',
    category: 'system',
    read: false,
    adName: 'Winter Campaign',
  },
  {
    id: 'a5',
    date: new Date(Date.now() - hour24),
    title: 'Budget at 80%',
    message: 'You\'ve used 80% of your weekly budget for "Winter Campaign".',
    severity: 'warning',
    category: 'budget',
    read: true,
    adName: 'Winter Campaign',
  },
  {
    id: 'a6',
    date: new Date(Date.now() - hour26),
    title: 'Impression Spike',
    message: 'Your ad received 3× the usual impressions in the past hour.',
    severity: 'info',
    category: 'performance',
    read: true,
    adName: 'Summer Sale',
  },
];
