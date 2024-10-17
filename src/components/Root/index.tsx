import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import { Container, Flex } from '@chakra-ui/react';
import { menu } from '../../config';

export default function Root(): JSX.Element {
  return (
    <Container maxW="full" minH="100vh" p={0}>
      <Flex minH="100vh">
        <Flex flex={0} h="100vh">
          <Nav items={menu} />
        </Flex>
        <Flex flex={1} p={[3, 3, 10]}>
          <Outlet />
        </Flex>
      </Flex>
    </Container>
  );
}
