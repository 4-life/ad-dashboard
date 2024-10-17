export interface User {
  avatar: string;
  name: string;
  email: string;
}

export interface ActivityData {
  id: string;
  date: Date;
  name?: string;
  email?: string;
  avatar?: string;
  subject?: string;
  message?: string;
  isLike?: boolean;
}
