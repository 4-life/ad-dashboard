import { JSX } from 'react';
import {
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Header from '../components/Header';
import { campaignsData, user } from '../config';
import getSocialIcon from '../utils/getSocialIcon';
import { CampaignData } from '../types';

const statusColor: Record<CampaignData['status'], string> = {
  active: 'green',
  paused: 'yellow',
  draft: 'gray',
};

const fmt = new Intl.NumberFormat('en', { notation: 'compact' });

function getCtr(clicks: number, impressions: number): string {
  if (impressions === 0) {
    return '—';
  }
  const ratio = clicks / impressions;
  return `${(ratio * 100).toFixed(2)}%`;
}

export default function Reports(): JSX.Element {
  const totalSpent = campaignsData.reduce((sum, c) => sum + c.spent, 0);
  const totalImpressions = campaignsData.reduce(
    (sum, c) => sum + c.impressions,
    0,
  );
  const totalClicks = campaignsData.reduce((sum, c) => sum + c.clicks, 0);
  const avgCtr = getCtr(totalClicks, totalImpressions);

  const stats = [
    { label: 'Total Spend', value: `$${totalSpent}` },
    { label: 'Impressions', value: fmt.format(totalImpressions) },
    { label: 'Clicks', value: fmt.format(totalClicks) },
    { label: 'Avg CTR', value: avgCtr },
  ];

  return (
    <Flex flex={1}>
      <Flex flex={1} flexDirection="column">
        <Header user={user} pageTitle="Reports" />

        <Flex gap={6} mb={8}>
          {stats.map((s) => (
            <Box key={s.label} flex={1} bg="main.300" borderRadius={12} p={5}>
              <Text fontSize={24} fontWeight={700} color="white">
                {s.value}
              </Text>
              <Text fontSize={13} color="text.400">
                {s.label}
              </Text>
            </Box>
          ))}
        </Flex>

        <Box bg="main.300" borderRadius={16} p={6}>
          <Heading as="h3" mb={6}>
            Campaign Breakdown
          </Heading>
          <Table variant="unstyled" size="sm">
            <Thead>
              <Tr>
                <Th color="text.400">Campaign</Th>
                <Th color="text.400">Status</Th>
                <Th color="text.400" isNumeric>
                  Budget
                </Th>
                <Th color="text.400" isNumeric>
                  Spent
                </Th>
                <Th color="text.400" isNumeric>
                  Impressions
                </Th>
                <Th color="text.400" isNumeric>
                  Clicks
                </Th>
                <Th color="text.400" isNumeric>
                  CTR
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {campaignsData.map((c) => (
                <Tr key={c.id} borderTop="1px solid" borderColor="main.400">
                  <Td py={4}>
                    <Flex alignItems="center" gap={3}>
                      <Icon
                        as={getSocialIcon(c.platform)}
                        color="text.400"
                        boxSize={4}
                      />
                      <Text color="white" fontWeight={600}>
                        {c.name}
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Badge
                      colorScheme={statusColor[c.status]}
                      textTransform="capitalize"
                      borderRadius={20}
                      px={3}
                    >
                      {c.status}
                    </Badge>
                  </Td>
                  <Td isNumeric>${c.budget}</Td>
                  <Td isNumeric>${c.spent}</Td>
                  <Td isNumeric>
                    {c.impressions > 0 ? fmt.format(c.impressions) : '—'}
                  </Td>
                  <Td isNumeric>{c.clicks > 0 ? fmt.format(c.clicks) : '—'}</Td>
                  <Td isNumeric>{getCtr(c.clicks, c.impressions)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Flex>
  );
}
