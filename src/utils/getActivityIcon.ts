import { ActivityData } from '@/types';
import { IconType } from 'react-icons';
import { BiSolidComment } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { RiVipCrownFill } from 'react-icons/ri';

export default function getActivityIcon(name: ActivityData['type']): IconType {
  if (name === 'comment') {
    return BiSolidComment;
  }

  if (name === 'newLeader') {
    return RiVipCrownFill;
  }

  return FaHeart;
}
