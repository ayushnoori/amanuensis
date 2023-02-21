import { useEffect } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { Table as TableType, flexRender } from '@tanstack/react-table';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';

export type RawDataTableProps<T> = {
  table: TableType<T>;
};

export default function RawDataTable<T>({ table }: RawDataTableProps<T>) {
  // const rerender = React.useReducer(() => ({}), {})[1];

  return (
    <Table>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <HStack
                    spacing="3"
                    cursor={header.column.getCanSort() ? 'pointer' : undefined}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {/* <Checkbox /> */}
                    <HStack spacing="1">
                      {/* Wrap in span to prevent non-render when inside HStack */}
                      <span>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </span>
                      {header.column.getIsSorted() === 'asc' && (
                        <Icon as={IoArrowUp} color="muted" boxSize="4" />
                      )}
                      {header.column.getIsSorted() === 'desc' && (
                        <Icon as={IoArrowDown} color="muted" boxSize="4" />
                      )}
                    </HStack>
                  </HStack>
                )}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <Tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <Th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    )}
              </Th>
            ))}
          </Tr>
        ))}
      </Tfoot>
    </Table>
  );
}
