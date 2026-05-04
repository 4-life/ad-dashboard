import { JSX } from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { AlertData } from '@/types';
import getTimeAgo from '@/utils/getTimeAgo';
import {
  MdAttachMoney,
  MdBarChart,
  MdCircle,
  MdNotifications,
  MdSettings,
} from 'react-icons/md';

const categoryIcons = {
  budget: MdAttachMoney,
  performance: MdBarChart,
  engagement: MdNotifications,
  system: MdSettings,
};

const severityColors = {
  critical: '#e5549a',
  warning: '#f6ad55',
  info: '#765cde',
};

interface Props {
  data: AlertData;
}

export default function AlertItem({ data }: Props): JSX.Element {
  const { title, message, severity, category, date, read, adName } = data;
  const color = severityColors[severity];
  const CategoryIcon = categoryIcons[category];

  return (
    <Flex
      w="full"
      p={5}
      bg="main.300"
      borderRadius={12}
      mb={4}
      opacity={read ? 0.6 : 1}
      borderLeft="3px solid"
      borderLeftColor={color}
      gap={4}
      alignItems="center"
    >
      <Flex
        boxSize={10}
        borderRadius="full"
        bg="main.400"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        <Icon as={CategoryIcon} color={color} boxSize={5} />
      </Flex>
      <Box flex={1}>
        <Flex alignItems="center" gap={2} mb={1}>
          <Text color="white" fontWeight={700} fontSize={14}>
            {title}
          </Text>
          {!read && <Icon as={MdCircle} boxSize={2} color={color} />}
        </Flex>
        <Text fontSize={13} mb={1}>
          {message}
        </Text>
        <Flex gap={3} alignItems="center">
          {adName && (
            <Text fontSize={12} color="main.100" fontWeight={600}>
              {adName}
            </Text>
          )}
          <Text fontSize={12} color="text.400">
            {getTimeAgo(date, false)}
          </Text>
        </Flex>
      </Box>
      <Box
        px={3}
        py={1}
        borderRadius={20}
        bg="main.400"
        fontSize={11}
        fontWeight={700}
        color={color}
        textTransform="uppercase"
        flexShrink={0}
      >
        {severity}
      </Box>
    </Flex>
  );
}
