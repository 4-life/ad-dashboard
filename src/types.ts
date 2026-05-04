export interface User {
  avatar: string;
  name: string;
  email: string;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface ActivityData {
  id: string;
  date: Date;
  location: Location;
  name?: string;
  email?: string;
  avatar?: string;
  message?: string;
  where?: string;
  type?: 'like' | 'comment' | 'newLeader';
}

export interface AlertData {
  id: string;
  date: Date;
  title: string;
  message: string;
  severity: 'critical' | 'warning' | 'info';
  category: 'budget' | 'performance' | 'engagement' | 'system';
  read: boolean;
  adName?: string;
}
