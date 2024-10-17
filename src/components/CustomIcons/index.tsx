import { Icon, IconProps } from '@chakra-ui/react';
import {
  MdOutlineInsertDriveFile,
  MdOutlineSettings,
  MdOutlineHome,
  MdNotificationsNone,
  MdOutlinePanoramaPhotosphere,
  MdOutlineMenu,
} from 'react-icons/md';

import MediumIcon from './MediumIcon';
import LinkedinIcon from './LinkedinIcon';
import ExternalIcon from './ExternalIcon';

export function HomeIcon({ ...rest }: IconProps): JSX.Element {
  return <Icon as={MdOutlineHome} {...rest} />;
}

export function NotifyIcon({ ...rest }: IconProps): JSX.Element {
  return <Icon as={MdNotificationsNone} {...rest} />;
}

export function PlanetIcon({ ...rest }: IconProps): JSX.Element {
  return <Icon as={MdOutlinePanoramaPhotosphere} {...rest} />;
}

export function SettingsIcon({ ...rest }: IconProps): JSX.Element {
  return <Icon as={MdOutlineSettings} {...rest} />;
}

export function ReportIcon({ ...rest }: IconProps): JSX.Element {
  return <Icon as={MdOutlineInsertDriveFile} {...rest} />;
}

export function MenuIcon({ ...rest }: IconProps): JSX.Element {
  return <Icon as={MdOutlineMenu} {...rest} />;
}

export { MediumIcon, LinkedinIcon, ExternalIcon };
