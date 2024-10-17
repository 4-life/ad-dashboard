import { Box } from '@chakra-ui/react';

interface Props {
  isFull?: boolean;
}

export default function Gradient({ isFull }: Props): JSX.Element {
  return (
    <Box
      position="absolute"
      width={isFull ? '100%' : '50%'}
      height="50%"
      right={0}
      top={0}
      bgGradient="linear(to-t, gradient.100, gradient.200)"
      opacity={0.7}
      overflow="hidden"
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        w: '200%',
        h: 'full',
        bg: 'radial-gradient(transparent 0%, var(--chakra-colors-main-500) 70%)',
      }}
      zIndex={-1}
      transition="all 0.2s ease"
    />
  );
}
