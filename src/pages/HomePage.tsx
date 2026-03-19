import { useRef } from 'react';
import { Flex } from '@chakra-ui/react';
import Map, { MapHandle } from '@/components/Map';
import Header from '@/components/Header';
import MainBanner from '@/components/MainBanner';
import ActivityList from '@/components/ActivityList';
import { activityData, user } from '@/config';

function HomePage(): JSX.Element {
  const mapRef = useRef<MapHandle>(null);

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
        <Map ref={mapRef} list={activityData} />
        <ActivityList
          list={activityData}
          onSelect={(id) => mapRef.current?.focusMarker(id)}
        />
      </Flex>
    </Flex>
  );
}

export default HomePage;
