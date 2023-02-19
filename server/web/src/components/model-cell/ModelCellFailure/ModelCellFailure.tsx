import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from '@chakra-ui/react';

import { CellFailureProps } from '@redwoodjs/web';

export default function ModelCellFailure({ error }: CellFailureProps) {
  return (
    <Alert status="error" rounded="xl">
      <AlertIcon />
      <Box>
        <AlertTitle>An error ocurred</AlertTitle>
        <AlertDescription>
          {error.message ??
            'Something went wrong while processing your request.'}
        </AlertDescription>
      </Box>
    </Alert>
  );
}
