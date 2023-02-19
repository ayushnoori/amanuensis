import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from '@chakra-ui/react';

export type ModelCellNotFoundProps = {
  modelNameSingular: string;
};

export default function ModelCellNotFound({
  modelNameSingular,
}: ModelCellNotFoundProps) {
  return (
    <Alert status="warning" rounded="xl">
      <AlertIcon />
      <Box>
        <AlertTitle>
          We could&apos;t find what you&apos;re looking for
        </AlertTitle>
        <AlertDescription>{`${modelNameSingular} not found.`}</AlertDescription>
      </Box>
    </Alert>
  );
}
