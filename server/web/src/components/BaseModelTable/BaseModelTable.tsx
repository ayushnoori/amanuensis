import * as React from 'react';

import { HStack, IconButton } from '@chakra-ui/react';
import {
  createColumnHelper,
  Row,
  ColumnDef,
  VisibilityState,
} from '@tanstack/react-table';
import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi';

import DataTable from 'src/components/DataTable/DataTable';

export type BaseModelTableProps<T> = {
  title: string;
  columns: ColumnDef<T>[];
  data: T[];
  initialColumnVisibility?: VisibilityState;
  onRowView?: (row: Row<T>) => void;
  onRowEdit?: (row: Row<T>) => void;
  onRowDelete?: (row: Row<T>) => void;
};

export default function BaseModelTable<T>({
  title,
  columns,
  data,
  initialColumnVisibility,
  onRowView,
  onRowEdit,
  onRowDelete,
}: BaseModelTableProps<T>) {
  const columnHelper = createColumnHelper<T>();

  const columnsWithActions = !(onRowView || onRowEdit || onRowDelete)
    ? columns
    : [
        ...columns,
        columnHelper.display({
          id: 'actions',
          cell: ({ row }) => (
            <HStack spacing="1">
              {onRowView && (
                <IconButton
                  icon={<FiEye fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="View row details"
                  onClick={() => onRowView(row)}
                />
              )}
              {onRowEdit && (
                <IconButton
                  icon={<FiEdit2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Edit row"
                  onClick={() => onRowEdit(row)}
                />
              )}
              {onRowDelete && (
                <IconButton
                  icon={<FiTrash2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Delete row"
                  color="red.500"
                  onClick={() => onRowDelete(row)}
                />
              )}
            </HStack>
          ),
        }),
      ];

  return (
    <DataTable
      title={title}
      columns={columnsWithActions}
      data={data}
      initialColumnVisibility={initialColumnVisibility}
    />
  );
}
