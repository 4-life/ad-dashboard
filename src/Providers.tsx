import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from './theme';

export default function Providers(): JSX.Element {
  return (
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  );
}
