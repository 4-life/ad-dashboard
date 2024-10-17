import { Box, Button, Image, Text } from '@chakra-ui/react';
import { MdOutlinePlayArrow } from 'react-icons/md';

export default function MainBanner(): JSX.Element {
  return (
    <Box position="relative" maxW={800}>
      <Box
        p={10}
        bg="main.300"
        borderRadius={12}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: '-90px',
          w: '400px',
          h: '400px',
          zIndex: [-1, -1, 0],
          bg: 'radial-gradient(var(--chakra-colors-gradient-200) 0%, transparent 70%)',
        }}
      >
        <Box mb={10}>
          <Text display="inline">🔥 Available now!</Text>{' '}
          <Text display="inline" color="gray.500">
            Free ads training
          </Text>
        </Box>
        <Text fontSize={25} fontWeight={900} textTransform="capitalize" mb={4}>
          How 1 Ad Turned this failling startUp <br /> into an 8-figure buisness{' '}
          in 10 months
        </Text>
        <Text
          color="gray.500"
          fontWeight={900}
          textTransform="capitalize"
          mb={4}
        >
          (that only took 6 minuts to create)
        </Text>

        <Text mb={8} color="gray.500" fontWeight={200}>
          This beginner-frendly training reveals a secret strategy
          <br />
          that&apos;s generating jaw dropping results for countless entepreneurs
        </Text>

        <Button
          p={6}
          textTransform="uppercase"
          size="lg"
          fontSize={16}
          fontWeight={900}
          borderRadius={20}
          rightIcon={<MdOutlinePlayArrow fontSize={22} />}
          bg="radial-gradient(ellipse at bottom,
          var(--chakra-colors-main-100), var(--chakra-colors-gradient-100))"
          _hover={{
            bg: `radial-gradient(ellipse at bottom,
          var(--chakra-colors-main-100), var(--chakra-colors-main-100))`,
          }}
        >
          Watch now
        </Button>
      </Box>
      <Image
        src="./rocket.png"
        position="absolute"
        top={5}
        right={-10}
        zIndex={1}
        display={['none', 'block']}
      />
    </Box>
  );
}
