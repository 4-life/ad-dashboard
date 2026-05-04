import { JSX } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  Progress,
  Switch,
  Text,
} from '@chakra-ui/react';
import {
  MdAccountCircle,
  MdCreditCard,
  MdExtension,
  MdNotifications,
} from 'react-icons/md';
import Header from '../components/Header';
import { user } from '../config';
import { getAvatarUrl } from '../utils/avatars';
import getSocialIcon from '../utils/getSocialIcon';

const navItems = [
  { id: 'profile', label: 'Profile', icon: MdAccountCircle },
  { id: 'billing', label: 'Billing', icon: MdCreditCard },
  { id: 'notifications', label: 'Notifications', icon: MdNotifications },
  { id: 'integrations', label: 'Integrations', icon: MdExtension },
];

const planUsage = [
  { label: 'Campaigns', used: 3, total: 10 },
  { label: 'Team Members', used: 1, total: 5 },
  { label: 'Monthly Spend', used: 592, total: 2000 },
];

const platforms = [
  { id: 'facebook', label: 'Facebook Ads', connected: true },
  { id: 'instagram', label: 'Instagram', connected: true },
  { id: 'google', label: 'Google Ads', connected: false },
];

export default function Settings(): JSX.Element {
  return (
    <Flex flex={1}>
      <Flex flex={1} flexDirection="column">
        <Header user={user} pageTitle="Settings" />

        <Grid
          templateRows="repeat(2, auto)"
          templateColumns={['1fr', '1fr', 'repeat(5, 1fr)']}
          gap={6}
        >
          <GridItem
            rowSpan={[1, 1, 2]}
            colSpan={1}
            bg="main.300"
            borderRadius={16}
            p={5}
          >
            <Flex flexDirection="column" alignItems="center" mb={8} mt={2}>
              <Avatar
                name={user.name}
                src={getAvatarUrl(user.avatar)}
                size="lg"
                mb={3}
              />
              <Text color="white" fontWeight={700}>
                {user.name}
              </Text>
              <Text fontSize={12} color="text.400">
                {user.email}
              </Text>
            </Flex>

            <Flex flexDirection="column" gap={1}>
              {navItems.map((item) => (
                <Flex
                  key={item.id}
                  alignItems="center"
                  gap={3}
                  px={4}
                  py={3}
                  borderRadius={10}
                  cursor="pointer"
                  _hover={{ bg: 'main.400' }}
                >
                  <Icon as={item.icon} boxSize={5} color="text.400" />
                  <Text fontSize={14}>{item.label}</Text>
                </Flex>
              ))}
            </Flex>
          </GridItem>

          <GridItem colSpan={[1, 1, 2]} bg="main.300" borderRadius={16} p={6}>
            <Heading as="h3" mb={6}>
              Profile
            </Heading>
            <Flex flexDirection="column" gap={4}>
              <FormControl>
                <FormLabel fontSize={13} color="text.400">
                  Full Name
                </FormLabel>
                <Input
                  defaultValue={user.name}
                  bg="main.400"
                  border="none"
                  _focus={{
                    boxShadow: 'none',
                    border: '1px solid',
                    borderColor: 'main.100',
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={13} color="text.400">
                  Email
                </FormLabel>
                <Input
                  defaultValue={user.email}
                  bg="main.400"
                  border="none"
                  _focus={{
                    boxShadow: 'none',
                    border: '1px solid',
                    borderColor: 'main.100',
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={13} color="text.400">
                  Timezone
                </FormLabel>
                <Input
                  defaultValue="UTC+0 — London"
                  bg="main.400"
                  border="none"
                  _focus={{
                    boxShadow: 'none',
                    border: '1px solid',
                    borderColor: 'main.100',
                  }}
                />
              </FormControl>
              <Button
                alignSelf="flex-start"
                bg="main.100"
                _hover={{ bg: 'purple.600' }}
                mt={2}
              >
                Save Changes
              </Button>
            </Flex>
          </GridItem>

          <GridItem colSpan={[1, 1, 2]} bg="main.300" borderRadius={16} p={6}>
            <Heading as="h3" mb={6}>
              Plan
            </Heading>
            <Flex alignItems="center" gap={3} mb={6}>
              <Text color="white" fontWeight={700} fontSize={20}>
                Pro
              </Text>
              <Badge colorScheme="purple" borderRadius={20} px={3} py={1}>
                Active
              </Badge>
            </Flex>

            <Flex flexDirection="column" gap={4} mb={6}>
              {planUsage.map((item) => {
                const pct = (item.used / item.total) * 100;
                return (
                  <Box key={item.label}>
                    <Flex justifyContent="space-between" mb={2}>
                      <Text fontSize={13} color="text.400">
                        {item.label}
                      </Text>
                      <Text fontSize={13} color="white">
                        {item.used} / {item.total}
                      </Text>
                    </Flex>
                    <Progress
                      value={pct}
                      size="sm"
                      colorScheme="purple"
                      borderRadius={4}
                      bg="main.400"
                    />
                  </Box>
                );
              })}
            </Flex>

            <Button
              variant="outline"
              borderColor="main.100"
              color="main.100"
              _hover={{ bg: 'main.200' }}
            >
              Upgrade Plan
            </Button>
          </GridItem>

          <GridItem colSpan={[1, 1, 4]} bg="main.300" borderRadius={16} p={6}>
            <Heading as="h3" mb={6}>
              Connected Platforms
            </Heading>
            <Flex gap={4} flexDirection={['column', 'row']}>
              {platforms.map((p) => (
                <Flex
                  key={p.id}
                  flex={1}
                  bg="main.400"
                  borderRadius={12}
                  p={5}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center" gap={3}>
                    <Icon as={getSocialIcon(p.id)} boxSize={5} />
                    <Box>
                      <Text color="white" fontWeight={600} fontSize={14}>
                        {p.label}
                      </Text>
                      <Text
                        fontSize={12}
                        color={p.connected ? 'green.400' : 'text.400'}
                      >
                        {p.connected ? 'Connected' : 'Not connected'}
                      </Text>
                    </Box>
                  </Flex>
                  <Switch isChecked={p.connected} colorScheme="purple" />
                </Flex>
              ))}
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
