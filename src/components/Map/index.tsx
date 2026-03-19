import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import { Box } from '@chakra-ui/react';
import { ActivityData } from '@/types';

const STYLE_URL =
  'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const COLORS = {
  terrain: '#1b1e35',
  roads: '#313556',
  water: '#242744',
  buildings: '#414673',
};

function customizeStyle(
  style: maplibregl.StyleSpecification,
): maplibregl.StyleSpecification {
  return {
    ...style,
    layers: style.layers.map((layer) => {
      const id = layer.id.toLowerCase();
      const sourceLayer =
        'source-layer' in layer ? (layer['source-layer'] ?? '') : '';

      // Water
      if (
        sourceLayer === 'water' ||
        sourceLayer === 'waterway' ||
        id.includes('water')
      ) {
        if (layer.type === 'fill') {
          return {
            ...layer,
            paint: { ...layer.paint, 'fill-color': COLORS.water },
          };
        }
        if (layer.type === 'line') {
          return {
            ...layer,
            paint: { ...layer.paint, 'line-color': COLORS.water },
          };
        }
      }

      // Roads / transportation
      if (
        sourceLayer === 'transportation' ||
        id.includes('road') ||
        id.includes('tunnel') ||
        id.includes('bridge') ||
        id.includes('motorway') ||
        id.includes('railway')
      ) {
        if (layer.type === 'line') {
          return {
            ...layer,
            paint: { ...layer.paint, 'line-color': COLORS.roads },
          };
        }
        if (layer.type === 'fill') {
          return {
            ...layer,
            paint: { ...layer.paint, 'fill-color': COLORS.roads },
          };
        }
      }

      // Buildings
      if (sourceLayer === 'building' || id.includes('building')) {
        if (layer.type === 'fill') {
          return {
            ...layer,
            paint: { ...layer.paint, 'fill-color': COLORS.buildings },
          };
        }
        if (layer.type === 'fill-extrusion') {
          return {
            ...layer,
            paint: { ...layer.paint, 'fill-extrusion-color': COLORS.buildings },
          };
        }
      }

      // Background
      if (layer.type === 'background') {
        return { ...layer, paint: { 'background-color': COLORS.terrain } };
      }

      // Land / terrain fills
      if (
        layer.type === 'fill' &&
        (sourceLayer === 'landcover' ||
          sourceLayer === 'landuse' ||
          id.includes('land') ||
          id.includes('park') ||
          id.includes('green') ||
          id.includes('earth'))
      ) {
        return {
          ...layer,
          paint: { ...layer.paint, 'fill-color': COLORS.terrain },
        };
      }

      return layer;
    }),
  };
}

const MARKER_ICONS: Record<string, string> = {
  like: '/markers/like.webp',
  comment: '/markers/msg.webp',
  newLeader: '/markers/top.webp',
};

function createMarkerElement(
  type?: 'like' | 'comment' | 'newLeader',
): HTMLElement {
  const el = document.createElement('div');
  const size = type ? 35 : 12;
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.backgroundSize = 'contain';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center';
  el.style.cursor = 'pointer';
  el.style.backgroundImage = `url(${type && MARKER_ICONS[type] ? MARKER_ICONS[type] : '/markers/default.webp'})`;
  return el;
}

export interface MapHandle {
  focusMarker: (id: string) => void;
}

interface Props {
  list: ActivityData[];
}

const Map = forwardRef<MapHandle, Props>(function Map({ list }, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<globalThis.Map<string, maplibregl.Marker>>(
    new globalThis.Map(),
  );

  useImperativeHandle(ref, () => ({
    focusMarker(id: string) {
      const marker = markersRef.current.get(id);
      const map = mapRef.current;
      if (!marker || !map) return;

      const lngLat = marker.getLngLat();
      map.flyTo({
        center: lngLat,
        zoom: 15,
        padding: { top: 0, bottom: 400, left: 300, right: 0 },
      });
      marker.getPopup()?.addTo(map).setLngLat(lngLat);
    },
  }));

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let cancelled = false;

    (async () => {
      const res = await fetch(STYLE_URL);
      const rawStyle: maplibregl.StyleSpecification = await res.json();
      if (cancelled) return;

      const map = new maplibregl.Map({
        container: containerRef.current!,
        style: customizeStyle(rawStyle),
        center: [-0.09, 51.505],
        zoom: 13,
        attributionControl: false,
      });

      mapRef.current = map;

      map.on('load', () => {
        const bounds = new maplibregl.LngLatBounds();

        list.forEach((data) => {
          const el = createMarkerElement(data.type);
          const hasInfo = data.name || data.message;
          const popup = new maplibregl.Popup({ offset: 15 }).setHTML(
            hasInfo
              ? `<b>${data.name ?? ''}</b><br/><em>${data.message ?? ''}</em>`
              : `<em>Anonymous click</em>`,
          );
          const marker = new maplibregl.Marker({ element: el })
            .setLngLat([data.location.lng, data.location.lat])
            .setPopup(popup)
            .addTo(map);

          markersRef.current.set(data.id, marker);
          bounds.extend([data.location.lng, data.location.lat]);
        });

        if (!bounds.isEmpty()) {
          map.fitBounds(bounds, {
            padding: { top: 10, bottom: 400, left: 300, right: 0 },
            maxZoom: 15,
          });
        }
      });
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  return (
    <Box
      position="absolute"
      w="200%"
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
      <Box ref={containerRef} style={{ height: '900px', width: '100%' }} />
    </Box>
  );
});

export default Map;
