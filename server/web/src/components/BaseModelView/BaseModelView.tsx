import { ReactNode } from 'react';

import {
  Box,
  Button,
  HStack,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from '@chakra-ui/react';

import ModelDataWrapper from 'src/components/ModelDataWrapper/ModelDataWrapper';

export type BaseModelViewProps = {
  title: string;
  subtitle: string;
  data: {
    propertyId: string;
    label: string;
    value?: ReactNode;
  }[];
  onDelete?: () => void;
  onEdit?: () => void;
};

export default function BaseModelView({
  title,
  subtitle,
  data,
  onDelete,
  onEdit,
}: BaseModelViewProps) {
  return (
    <ModelDataWrapper title={title} subtitle={subtitle}>
      <Stack spacing="5">
        <Box overflowX="auto">
          <Table>
            <Tbody>
              {data.map(({ propertyId, label, value }) => (
                <Tr key={propertyId}>
                  <Th>{label}</Th>
                  <Td>{value}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        {(onDelete || onEdit) && (
          <HStack
            spacing="3"
            justifyContent="flex-end"
            px={{ base: '4', md: '6' }}
          >
            {onDelete && (
              <Button aria-label="Delete" colorScheme="red" onClick={onDelete}>
                Delete
              </Button>
            )}
            {onEdit && (
              <Button aria-label="Edit" colorScheme="blue" onClick={onEdit}>
                Edit
              </Button>
            )}
          </HStack>
        )}
      </Stack>
    </ModelDataWrapper>
  );
}
