import { Box, Button, Text } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;

  return (
    <Box
      display="flex"
      alignItems="center"
      height="100vh"
      justifyContent="center"
      flexDirection="column"
    >
      <Text as="h4" textAlign="center" mb={2}>
        Sorry, an unexpected error has occurred.
        <Text textAlign="center" mt={2}>
          {error.statusText || error.message}
        </Text>
      </Text>
      <Button as="a" variant="link" href="/">
        Home
      </Button>
    </Box>
  );
}
