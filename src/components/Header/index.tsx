import { AddIcon, ChevronDownIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { User } from '@/types';
import { getAvatarUrl } from '@/utils/avatars';

interface Props {
  user: User;
  signOut?: () => void;
  create?: () => void;
  isMainPage?: boolean;
  pageTitle?: string;
}

export default function Header({
  user: { avatar, name, email },
  create,
  signOut,
  isMainPage,
  pageTitle,
}: Props): JSX.Element {
  return (
    <Flex justifyContent="space-between" alignItems="flex-start" mb={10}>
      <Box>
        {!!create && (
          <Button leftIcon={<AddIcon />} size="lg" mb={10} bg="main.100">
            Create
          </Button>
        )}
        {isMainPage && (
          <Heading color="gray.500" fontWeight={200} as="h1" size="2xl" mb={10}>
            Welcome,{' '}
            <Text as="span" color="white" fontWeight={900}>
              {name.split(' ')[0]}
            </Text>
          </Heading>
        )}
        {!!pageTitle && <Heading as="h1">{pageTitle}</Heading>}
      </Box>
      <Spacer />
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Flex alignItems="center" gap={2} cursor="pointer">
            <ChevronDownIcon fontSize={30} />
            <Text fontWeight={900} fontSize={16} mr={2}>
              {name}
            </Text>
            <Avatar name={name} src={getAvatarUrl(avatar)} cursor="pointer" />
          </Flex>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadow: 'none' }}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Text mb={4}>{email}</Text>
            <Button
              colorScheme="gray"
              onClick={signOut}
              rightIcon={<ExternalLinkIcon />}
            >
              Log Out
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
