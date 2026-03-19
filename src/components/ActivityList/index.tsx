import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ActivityData } from '@/types';
import ActivityItem from '../ActivityItem';

interface Props {
  list: ActivityData[];
  onSelect?: (id: string) => void;
}

export default function Activity({ list, onSelect }: Props): JSX.Element {
  return (
    <Flex
      alignItems="flex-start"
      flex={1}
      p={[0, 0, 10]}
      mt="500px"
      flexDirection="column"
      zIndex="modal"
    >
      <Box position="absolute" top={10} right={10} textAlign="right">
        <Text fontSize={25}>Live Map</Text>
        <Text>
          {list.length} People{' '}
          <Text color="gray.500" as="span">
            Viewed Your Ads Recently
          </Text>
        </Text>
      </Box>
      <Heading variant="h3" mb={10}>
        Activity
      </Heading>
      {list.map((data) => (
        <ActivityItem
          key={data.id}
          data={data}
          onSelect={() => onSelect?.(data.id)}
        />
      ))}
    </Flex>
  );
}
