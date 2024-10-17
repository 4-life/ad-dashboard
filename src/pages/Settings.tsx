import { Flex, Grid, GridItem } from '@chakra-ui/react';
import Header from '../components/Header';
import { user } from '../config';

export default function Settings(): JSX.Element {
  return (
    <Flex flex={1}>
      <Flex flex={1} flexDirection="column">
        <Header user={user} pageTitle="Settings" />
        <Grid
          h="full"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={10}
        >
          <GridItem rowSpan={2} colSpan={1} bg="gray.700" opacity={0.1} />
          <GridItem colSpan={2} bg="gray.700" opacity={0.1} />
          <GridItem colSpan={2} bg="gray.700" opacity={0.1} />
          <GridItem colSpan={4} bg="gray.700" opacity={0.1} />
        </Grid>
      </Flex>
    </Flex>
  );
}
