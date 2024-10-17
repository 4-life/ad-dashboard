import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ActivityData } from '../../types';

interface Props {
  data: ActivityData[];
}

export default function Activity({ data }: Props): JSX.Element {
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
          {data.length} People{' '}
          <Text color="gray.500" as="span">
            Viewed Your Ads Recently
          </Text>
        </Text>
      </Box>
      <Heading variant="h3" mb={10}>
        Activity
      </Heading>
      {data.map((d) => (
        <Box w="full" p={5} bg="main.300" borderRadius={12} key={d.id}>
          <Text>{d.name}</Text>
        </Box>
      ))}
    </Flex>
  );
}
