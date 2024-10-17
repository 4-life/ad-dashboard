import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import { user } from '../config';

export default function Reports(): JSX.Element {
  return (
    <Flex flex={1}>
      <Flex flex={1} flexDirection="column">
        <Header user={user} pageTitle="Reports" />
        <Flex gap={10} mb={10}>
          <Box w="full" h={600} bg="gray.700" opacity={0.1}></Box>
          <Box w="full" h={200} bg="gray.700" opacity={0.1}></Box>
          <Box w="full" h={500} bg="gray.700" opacity={0.1}></Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
