import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Tag,
  Text,
  useBreakpoint,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Gradient from './Gradient';
import { BiHomeAlt2, BiPlanet } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { RiFilePaper2Line } from 'react-icons/ri';
import { TbMenuDeep, TbSettings2 } from 'react-icons/tb';

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
  const style = {
    boxSize: 6,
    color: 'text.500',
  };

  switch (icon) {
    case 'home':
      return <Icon as={BiHomeAlt2} {...style} />;
    case 'notify':
      return <Icon as={VscBellDot} {...style} />;
    case 'studio':
      return <Icon as={BiPlanet} {...style} />;
    case 'reports':
      return <Icon as={RiFilePaper2Line} {...style} />;
    case 'settings':
      return <Icon as={TbSettings2} {...style} />;
  }

  return <Icon as={BiHomeAlt2} {...style} />;
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
          icon={<TbMenuDeep />}
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
