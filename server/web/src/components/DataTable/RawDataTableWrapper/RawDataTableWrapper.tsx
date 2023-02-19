import { PropsWithChildren, useState } from 'react';

import {
  Box,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Text,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  HStack,
  ButtonGroup,
  Button,
  Select,
} from '@chakra-ui/react';
import { Table } from '@tanstack/react-table';
import { debounce } from 'lodash';
import { FiSearch } from 'react-icons/fi';

import Card from 'src/components/Card/Card';

export type RawDataTableBaseProps<T> = PropsWithChildren<{
  table: Table<T>;
  title?: string;
  globalFilter: string;
  setGlobalFilter: (newGlobalFilter: string) => void;
}>;

export default function RawDataTableWrapper<T>({
  table,
  title,
  globalFilter,
  setGlobalFilter,
  children,
}: RawDataTableBaseProps<T>) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const rowCount = table.getPrePaginationRowModel().rows.length;
  const pageStartItemIndex =
    table.getState().pagination.pageIndex *
      table.getState().pagination.pageSize +
    1;
  const pageEndItemIndex = Math.min(
    (table.getState().pagination.pageIndex + 1) *
      table.getState().pagination.pageSize,
    rowCount,
  );

  const [search, setSearch] = useState(globalFilter);
  const debouncedSetGlobalFilter = debounce(
    (newValue: string) => setGlobalFilter(newValue),
    250,
  );
  const onSearchUpdate = (newValue: string) => {
    setSearch(newValue);
    debouncedSetGlobalFilter(newValue);
  };

  return (
    <Card>
      <Stack spacing="5">
        <Box px={{ base: '4', md: '6' }} pt="5">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
          >
            <Text fontSize="lg" fontWeight="medium">
              {title}
            </Text>
            <InputGroup maxW="xs">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="muted" boxSize="5" />
              </InputLeftElement>
              <Input
                placeholder="Search"
                value={search ?? ''}
                onChange={(e) => onSearchUpdate(e.target.value)}
              />
            </InputGroup>
          </Stack>
        </Box>
        <Box overflowX="auto">{children}</Box>
        <Box px={{ base: '4', md: '6' }} pb="5">
          <HStack spacing="3" justify="space-between">
            {!isMobile && (
              <HStack spacing="1">
                <Text color="muted" fontSize="sm">
                  Showing {pageStartItemIndex} to {pageEndItemIndex} of{' '}
                  {rowCount} results
                </Text>
                <Text color="muted" fontSize="sm">
                  |
                </Text>
                <Select
                  variant="unstyled"
                  color="muted"
                  fontSize="sm"
                  width="auto"
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize} per page
                    </option>
                  ))}
                  <option value={rowCount}>Show every result</option>
                </Select>
              </HStack>
            )}
            <ButtonGroup
              spacing="3"
              justifyContent="space-between"
              width={{ base: 'full', md: 'auto' }}
              variant="secondary"
            >
              <Button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </ButtonGroup>
          </HStack>
        </Box>
      </Stack>
    </Card>
  );
}
