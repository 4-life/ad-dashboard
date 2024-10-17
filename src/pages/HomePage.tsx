import { Flex } from '@chakra-ui/react';
import Map from '../components/Map';
import Header from '../components/Header';
import Activity from '../components/Activity';
import MainBanner from '../components/MainBanner';
import { activityData, user } from '../config';

function HomePage(): JSX.Element {
  const createHandler = (): void => {
    // do nothing
  };

  return (
    <Flex flex={1} flexDirection={['column', 'column', 'row']}>
      <Flex flex={1} flexDirection="column" zIndex="modal">
        <Header user={user} create={createHandler} isMainPage />
        <MainBanner />
      </Flex>
      <Flex w={['full', 'full', '35%']} position="relative" mt={-10} mr={-10}>
        <Map />
        <Activity data={activityData} />
      </Flex>
    </Flex>
  );
}

export default HomePage;
