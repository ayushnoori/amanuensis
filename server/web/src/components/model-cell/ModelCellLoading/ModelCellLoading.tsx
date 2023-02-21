import { Skeleton, Stack } from '@chakra-ui/react';

export default function ModelCellLoading() {
  return (
    <Stack>
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
    </Stack>
  );
}
