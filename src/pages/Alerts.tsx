import { JSX } from 'react';
import { Box, Flex, Heading, Icon, Switch, Text } from '@chakra-ui/react';
import {
  MdCheckCircle,
  MdError,
  MdNotificationsActive,
  MdWarning,
} from 'react-icons/md';
import Header from '../components/Header';
import AlertItem from '../components/AlertItem';
import { alertsData, user } from '../config';

interface StatCardProps {
  label: string;
  value: number;
  icon: React.ElementType;
  color: string;
}

function StatCard({ label, value, icon, color }: StatCardProps): JSX.Element {
  return (
    <Flex
      flex={1}
      bg="main.300"
      borderRadius={12}
      p={5}
      gap={4}
      alignItems="center"
    >
      <Flex
        boxSize={12}
        borderRadius="full"
        bg="main.400"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        <Icon as={icon} color={color} boxSize={6} />
      </Flex>
      <Box>
        <Text fontSize={24} fontWeight={700} color="white">
          {value}
        </Text>
        <Text fontSize={13} color="text.400">
          {label}
        </Text>
      </Box>
    </Flex>
  );
}

const notificationSettings = [
  {
    label: 'Budget Alerts',
    desc: 'Spending thresholds & limits',
    defaultChecked: true,
  },
  {
    label: 'Performance Alerts',
    desc: 'CTR, impressions & metrics',
    defaultChecked: true,
  },
  {
    label: 'Engagement Alerts',
    desc: 'Likes, comments & shares',
    defaultChecked: false,
  },
  {
    label: 'System Alerts',
    desc: 'Ad status & approvals',
    defaultChecked: true,
  },
  {
    label: 'Email Notifications',
    desc: 'Send alerts to your email',
    defaultChecked: false,
  },
];

export default function Alerts(): JSX.Element {
  const total = alertsData.length;
  const critical = alertsData.filter((a) => a.severity === 'critical').length;
  const unread = alertsData.filter((a) => !a.read).length;
  const resolved = alertsData.filter((a) => a.read).length;

  return (
    <Flex flex={1}>
      <Flex flex={1} flexDirection="column">
        <Header user={user} pageTitle="Alerts" />

        <Flex gap={6} mb={8}>
          <StatCard
            label="Total Alerts"
            value={total}
            icon={MdNotificationsActive}
            color="#765cde"
          />
          <StatCard
            label="Critical"
            value={critical}
            icon={MdError}
            color="#e5549a"
          />
          <StatCard
            label="Unread"
            value={unread}
            icon={MdWarning}
            color="#f6ad55"
          />
          <StatCard
            label="Resolved"
            value={resolved}
            icon={MdCheckCircle}
            color="#68d391"
          />
        </Flex>

        <Flex gap={8} alignItems="flex-start">
          <Box flex={2}>
            <Heading as="h3" mb={6}>
              Recent Alerts
            </Heading>
            {alertsData.map((alert) => (
              <AlertItem key={alert.id} data={alert} />
            ))}
          </Box>

          <Box flex={1} bg="main.300" borderRadius={12} p={6}>
            <Heading as="h3" mb={6}>
              Notification Settings
            </Heading>
            {notificationSettings.map((item) => (
              <Flex
                key={item.label}
                justifyContent="space-between"
                alignItems="center"
                mb={5}
              >
                <Box>
                  <Text fontWeight={600} color="white" fontSize={14}>
                    {item.label}
                  </Text>
                  <Text fontSize={12} color="text.400">
                    {item.desc}
                  </Text>
                </Box>
                <Switch
                  defaultChecked={item.defaultChecked}
                  colorScheme="purple"
                />
              </Flex>
            ))}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
