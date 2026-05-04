import { JSX } from 'react';
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Progress,
  Text,
} from '@chakra-ui/react';
import { MdEdit, MdPause, MdPlayArrow } from 'react-icons/md';
import { CampaignData } from '@/types';
import getSocialIcon from '@/utils/getSocialIcon';

const statusColor: Record<CampaignData['status'], string> = {
  active: 'green',
  paused: 'yellow',
  draft: 'gray',
};

const fmt = new Intl.NumberFormat('en', { notation: 'compact' });

interface Props {
  data: CampaignData;
}

export default function CampaignCard({ data }: Props): JSX.Element {
  const { name, platform, status, budget, spent, impressions, clicks } = data;

  const spentPct = budget > 0 ? (spent / budget) * 100 : 0;
  const ctrRaw = impressions > 0 ? (clicks / impressions) * 100 : 0;
  const ctr = `${ctrRaw.toFixed(2)}%`;

  return (
    <Flex
      flex={1}
      flexDirection="column"
      bg="main.300"
      borderRadius={16}
      p={6}
      gap={5}
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Text color="white" fontWeight={700} fontSize={18} mb={1}>
            {name}
          </Text>
          <Flex alignItems="center" gap={2}>
            <Icon as={getSocialIcon(platform)} boxSize={4} color="text.400" />
            <Text fontSize={13} color="text.400" textTransform="capitalize">
              {platform}
            </Text>
          </Flex>
        </Box>
        <Badge
          colorScheme={statusColor[status]}
          borderRadius={20}
          px={3}
          py={1}
          textTransform="capitalize"
        >
          {status}
        </Badge>
      </Flex>

      <Box>
        <Flex justifyContent="space-between" mb={2}>
          <Text fontSize={13} color="text.400">
            Budget
          </Text>
          <Text fontSize={13} color="white">
            ${spent} / ${budget}
          </Text>
        </Flex>
        <Progress
          value={spentPct}
          size="sm"
          colorScheme="purple"
          borderRadius={4}
          bg="main.400"
        />
      </Box>

      <Flex gap={4}>
        <Flex
          flex={1}
          bg="main.400"
          borderRadius={12}
          p={4}
          flexDirection="column"
          alignItems="center"
        >
          <Text fontSize={22} fontWeight={700} color="white">
            {impressions > 0 ? fmt.format(impressions) : '—'}
          </Text>
          <Text fontSize={12} color="text.400">
            Impressions
          </Text>
        </Flex>
        <Flex
          flex={1}
          bg="main.400"
          borderRadius={12}
          p={4}
          flexDirection="column"
          alignItems="center"
        >
          <Text fontSize={22} fontWeight={700} color="white">
            {impressions > 0 ? ctr : '—'}
          </Text>
          <Text fontSize={12} color="text.400">
            CTR
          </Text>
        </Flex>
        <Flex
          flex={1}
          bg="main.400"
          borderRadius={12}
          p={4}
          flexDirection="column"
          alignItems="center"
        >
          <Text fontSize={22} fontWeight={700} color="white">
            {clicks > 0 ? fmt.format(clicks) : '—'}
          </Text>
          <Text fontSize={12} color="text.400">
            Clicks
          </Text>
        </Flex>
      </Flex>

      <Flex gap={3} mt="auto">
        <Button
          flex={1}
          size="sm"
          bg="main.400"
          _hover={{ bg: 'main.200' }}
          leftIcon={<MdEdit />}
        >
          Edit
        </Button>
        <Button
          flex={1}
          size="sm"
          bg={status === 'active' ? 'orange.800' : 'main.100'}
          _hover={{ bg: status === 'active' ? 'orange.700' : 'purple.600' }}
          leftIcon={status === 'active' ? <MdPause /> : <MdPlayArrow />}
          isDisabled={status === 'draft'}
        >
          {status === 'active' ? 'Pause' : 'Resume'}
        </Button>
      </Flex>
    </Flex>
  );
}
