import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Tag,
  Text,
  useBreakpoint,
} from '@chakra-ui/react';
import {
  HomeIcon,
  MenuIcon,
  NotifyIcon,
  PlanetIcon,
  ReportIcon,
  SettingsIcon,
} from '../CustomIcons';
import { useLocation } from 'react-router-dom';
import Gradient from './Gradient';

interface Props {
  items: {
    title: string,
    icon?: string,
    link: string,
    alertsNumber?: number,
  }[];
}

const menuItem = 'menu';

const initMenu = (bp: string): boolean => {
  if (bp === 'sm' || bp === 'base') {
    return false;
  }

  const value = localStorage.getItem(menuItem);
  if (value === null) {
    return true;
  }

  return Boolean(value);
};

const getIcon = (icon?: string): JSX.Element => {
  switch (icon) {
    case 'home':
      return <HomeIcon boxSize={6} color="text.500" />;
    case 'notify':
      return <NotifyIcon boxSize={6} color="text.500" />;
    case 'studio':
      return <PlanetIcon boxSize={6} color="text.500" />;
    case 'reports':
      return <ReportIcon boxSize={6} color="text.500" />;
    case 'settings':
      return <SettingsIcon boxSize={6} color="text.500" />;
  }

  return <HomeIcon boxSize={6} />;
};

export default function Nav({ items }: Props): JSX.Element {
  const bp = useBreakpoint({ ssr: false });
  const [isOpen, setIsOpen] = useState<boolean>(initMenu(bp));
  const params = useLocation();

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
    localStorage.setItem(menuItem, isOpen ? '' : '1');
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      p={6}
      px={isOpen ? 6 : 0}
      transition="all 0.3s ease"
      bg="main.500"
    >
      <Gradient isFull={!isOpen} />
      <Flex
        justifyContent={isOpen ? 'space-between' : 'center'}
        alignItems="center"
        mb={100}
        pl={isOpen ? 6 : 0}
        mt={5}
        minH={50}
      >
        <Box height={50}>
          {isOpen && <Image src="/logo.png" alt="logo" h="full" />}
        </Box>

        <IconButton
          icon={<MenuIcon />}
          aria-label="menu"
          variant="outline"
          border="none"
          fontSize={30}
          _hover={{ bg: 'main.200' }}
          _active={{ bg: 'main.200' }}
          onClick={toggleMenu}
          sx={{ WebkitTapHighlightColor: 'transparent' }}
        />
      </Flex>

      <Box>
        {items.map(({ title, icon, link, alertsNumber }) => (
          <Link
            href={link}
            key={title}
            sx={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Button
              variant="ghost"
              leftIcon={getIcon(icon)}
              iconSpacing={5}
              py={7}
              px={isOpen ? 8 : 5}
              pr={isOpen ? 16 : 0}
              size="lg"
              w="full"
              justifyContent="flex-start"
              _hover={{ bg: 'main.200' }}
              _active={{ bg: 'main.200' }}
              textTransform="uppercase"
              mb={4}
              borderRadius={20}
              isActive={link === params.pathname}
              fontSize="small"
              letterSpacing={2}
              maxW={isOpen ? 300 : 64}
              transition="all 0.3s ease"
              sx={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Text as="span" overflow="hidden" width={isOpen ? 'full' : '0px'}>
                {title}
              </Text>
              {alertsNumber ? (
                <Tag
                  size={isOpen ? 'md' : 'sm'}
                  borderRadius="full"
                  position="absolute"
                  right={isOpen ? 5 : 0}
                  bg="customRed"
                  fontSize={isOpen ? 16 : 12}
                  top={isOpen ? 'auto' : 0}
                >
                  {alertsNumber}
                </Tag>
              ) : null}
            </Button>
          </Link>
        ))}
      </Box>

      {!isOpen && (
        <Box
          height={50}
          position="absolute"
          bottom={5}
          margin="auto"
          left={0}
          right={0}
          width={50}
        >
          <Image src="/logo.png" alt="logo" h="full" />
        </Box>
      )}
    </Box>
  );
}
