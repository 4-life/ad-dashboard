/**
 * Custom icon feature
 * See: https://v2.chakra-ui.com/docs/components/icon/usage#creating-your-custom-icons
 */
import { Icon } from '@chakra-ui/react';

export default function ExternalIcon(): JSX.Element {
  return (
    <Icon viewBox="0 0 16 16">
      <path
        d="M4 12L12 4M12 4H6.66667M12 4V9.33333"
        stroke="#89A3D6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
