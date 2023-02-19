import { Text, Link as ChakraLink } from '@chakra-ui/react';

import { Link } from '@redwoodjs/router';

export type ModelCellEmptyProps = {
  modelPluralName: string;
  newModelRoute: string;
};

export default function ModelCellEmpty({
  modelPluralName,
  newModelRoute,
}: ModelCellEmptyProps) {
  return (
    <Text textAlign="center">
      {`No ${modelPluralName} yet. `}
      <ChakraLink
        as={Link}
        to={newModelRoute}
        color="blue.400"
        textDecoration="underline"
      >
        Create one?
      </ChakraLink>
    </Text>
  );
}
