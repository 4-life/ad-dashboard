import { IconType } from 'react-icons';
import {
  GrFacebookOption,
  GrGoogle,
  GrInstagram,
  GrStatusUnknown,
} from 'react-icons/gr';

export default function getSocialIcon(name?: string): IconType {
  if (!name) {
    return GrStatusUnknown;
  }

  if (name === 'facebook') {
    return GrFacebookOption;
  }

  if (name === 'instagram') {
    return GrInstagram;
  }

  if (name === 'google') {
    return GrGoogle;
  }

  return GrStatusUnknown;
}
