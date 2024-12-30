import { Box, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { ActivityData } from '@/types';
import { MdCircle } from 'react-icons/md';
import getTimeAgo from '@/utils/getTimeAgo';
import getSocialIcon from '@/utils/getSocialIcon';
import { ChevronRightIcon } from '@chakra-ui/icons';
import ActivityAvatar from '../ActivityAvatar';

interface Props {
  data: ActivityData;
}

export default function ActivityView({ data }: Props): JSX.Element {
  const { name, date, message, where } = data;

  return (
    <Flex
      w="full"
      p={5}
      bg="main.300"
      borderRadius={12}
      mb={4}
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap={4}>
        <ActivityAvatar data={data} />
        <Box>
          <Flex alignItems="center" gap={2}>
            <Text color="white" fontWeight={600}>
              {name || 'Someone clicked your ad!'}
            </Text>
            <Icon boxSize={2} as={MdCircle} />
            <Text>{getTimeAgo(date, !message)}</Text>
          </Flex>
          <Text>{message}</Text>
        </Box>
      </Flex>
      <Flex alignItems="center" gap={2}>
        {where && (
          <Icon boxSize={5} as={getSocialIcon(where)} color="main.100" />
        )}
        <IconButton
          variant="solid"
          fontSize="20px"
          aria-label="View more"
          icon={<ChevronRightIcon boxSize={8} color="gray.500" />}
        />
      </Flex>
    </Flex>
  );
}
