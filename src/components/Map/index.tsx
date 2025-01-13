import { Box } from '@chakra-ui/react';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import 'leaflet/dist/leaflet.css';
import { ActivityData } from '@/types';
import { Icon } from 'leaflet';

const likeMarker = new Icon({
  iconUrl: '/markers/like.webp',
  iconSize: [35, 35],
  iconAnchor: [17, 17],
  popupAnchor: [0, -15],
});
const msgMarker = new Icon({
  iconUrl: '/markers/msg.webp',
  iconSize: [35, 35],
  iconAnchor: [17, 17],
  popupAnchor: [0, -15],
});
const topMarker = new Icon({
  iconUrl: '/markers/top.webp',
  iconSize: [35, 35],
  iconAnchor: [17, 17],
  popupAnchor: [0, -15],
});
const defaultMarker = new Icon({
  iconUrl: '/markers/default.webp',
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  popupAnchor: [0, -6],
});

interface Props {
  list: ActivityData[];
}

function getIcon(type?: 'like' | 'comment' | 'newLeader'): Icon {
  switch (type) {
    case 'like':
      return likeMarker;
    case 'comment':
      return msgMarker;
    case 'newLeader':
      return topMarker;
    default:
      return defaultMarker;
  }
}

export default function Map({ list }: Props): JSX.Element {
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
        {list.map((data) => (
          <Marker
            key={data.id}
            position={[data.location.lat, data.location.lng]}
            icon={getIcon(data.type)}
          >
            <Popup>
              <b>{data.name}</b>
              <br />
              <em>{data.message}</em>
              <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}
