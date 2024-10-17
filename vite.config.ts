import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) {
              return 'vendor_icons';
            } else if (id.includes('@chakra-ui')) {
              return 'vendor_chakra';
            } else if (id.includes('framer-motion')) {
              return 'vendor_framer-motion';
            } else if (id.includes('react-dom')) {
              return 'vendor_react-dom';
            }

            return 'vendor'; // all other package goes here
          }
        },
      },
    },
  },
});
