import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import { Container, Flex } from '@chakra-ui/react';
import { alertsData, menu } from '../../config';

export default function Root(): JSX.Element {
  return (
    <Container maxW="full" p={0}>
      <Flex h="100vh" overflowY="scroll">
        <Flex flex={0} h="100vh" position="sticky" top="0" zIndex={9999}>
          <Nav
            items={menu}
            alertsCount={alertsData.filter((a) => !a.read).length}
          />
        </Flex>
        <Flex flex={1} p={[3, 3, 10]} minW={0} overflowX="hidden">
          <Outlet />
        </Flex>
      </Flex>
    </Container>
  );
}
