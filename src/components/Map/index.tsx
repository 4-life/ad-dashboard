import { Box } from '@chakra-ui/react';
import { Marker } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import 'leaflet/dist/leaflet.css';

export default function Map(): JSX.Element {
  return (
    <Box
      position="absolute"
      w="140%"
      h="800px"
      top="0"
      right="0"
      overflow="hidden"
      _after={{
        content: '""',
        position: 'absolute',
        top: -650,
        right: '-65%',
        width: '190%',
        h: '200%',
        bgGradient: 'radial(transparent, main.500, main.500)',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{
          height: '900px',
          width: '100%',
          marginTop: '0px',
          background: '#000',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>
          &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </Box>
  );
}
