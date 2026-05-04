import { JSX } from 'react';
import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import Header from '../components/Header';
import CampaignCard from '../components/CampaignCard';
import { campaignsData, user } from '../config';
import getSocialIcon from '../utils/getSocialIcon';

interface Creative {
  id: string;
  headline: string;
  body: string;
  cta: string;
  from: string;
  to: string;
  platform: string;
}

const creatives: Creative[] = [
  {
    id: 'cr1',
    headline: 'Summer Sale — Up to 50% Off',
    body: 'Limited time offer. Shop now and save big on selected items.',
    cta: 'Shop Now',
    from: '#765cde',
    to: '#a117bf',
    platform: 'facebook',
  },
  {
    id: 'cr2',
    headline: 'Master Facebook Ads',
    body: 'Download our free cheat sheet and boost your ROI today.',
    cta: 'Download',
    from: '#e5549a',
    to: '#765cde',
    platform: 'instagram',
  },
  {
    id: 'cr3',
    headline: 'Winter Campaign Launch',
    body: 'Be first to access exclusive winter deals for your audience.',
    cta: 'Learn More',
    from: '#3e1bbb',
    to: '#1c1f36',
    platform: 'google',
  },
];

export default function Studio(): JSX.Element {
  return (
    <Flex flex={1}>
      <Flex flex={1} flexDirection="column">
        <Header user={user} pageTitle="Studio" />

        <Flex gap={6} mb={8} alignItems="stretch">
          {campaignsData.map((c) => (
            <CampaignCard key={c.id} data={c} />
          ))}
        </Flex>

        <Box bg="main.300" borderRadius={16} p={6}>
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Box>
              <Heading as="h3" mb={1}>
                Ad Creatives
              </Heading>
              <Text fontSize={13} color="text.400">
                {creatives.length} assets
              </Text>
            </Box>
            <Button
              size="sm"
              bg="main.100"
              _hover={{ bg: 'purple.600' }}
              leftIcon={<MdAdd />}
            >
              New Creative
            </Button>
          </Flex>

          <Flex gap={5}>
            {creatives.map((c) => (
              <Flex
                key={c.id}
                flex={1}
                flexDirection="column"
                borderRadius={12}
                overflow="hidden"
              >
                <Flex
                  flexDirection="column"
                  justifyContent="flex-end"
                  p={5}
                  h={180}
                  bgGradient={`linear(to-br, ${c.from}, ${c.to})`}
                >
                  <Text color="white" fontWeight={700} fontSize={15} mb={1}>
                    {c.headline}
                  </Text>
                  <Text color="whiteAlpha.800" fontSize={12}>
                    {c.body}
                  </Text>
                </Flex>
                <Flex
                  bg="main.400"
                  p={4}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Flex alignItems="center" gap={2}>
                    <Icon
                      as={getSocialIcon(c.platform)}
                      boxSize={4}
                      color="text.400"
                    />
                    <Text
                      fontSize={12}
                      color="text.400"
                      textTransform="capitalize"
                    >
                      {c.platform}
                    </Text>
                  </Flex>
                  <Button size="xs" bg="main.100" _hover={{ bg: 'purple.600' }}>
                    {c.cta}
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
