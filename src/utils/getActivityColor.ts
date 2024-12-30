import { ActivityData } from '@/types';

export default function getActivityColor(name: ActivityData['type']): string {
  if (name === 'comment') {
    return '#765cde';
  }

  if (name === 'newLeader') {
    return '#f05d80';
  }

  return '#ff855f';
}
