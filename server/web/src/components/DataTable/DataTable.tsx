import { useState } from 'react';

import {
  compareItems,
  RankingInfo,
  rankItem,
} from '@tanstack/match-sorter-utils';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  FilterFn,
  SortingFn,
  sortingFns,
  Row,
  FilterMeta,
  VisibilityState,
} from '@tanstack/react-table';

import RawDataTable from './RawDataTable/RawDataTable';
import RawDataTableWrapper from './RawDataTableWrapper/RawDataTableWrapper';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface SortingFns {
    fuzzy: SortingFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

export function fuzzyFilter<T>(
  row: Row<T>,
  columnId: string,
  value: string,
  addMeta: (meta: FilterMeta) => void,
): boolean {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
}

export function fuzzySort<T>(rowA: Row<T>, rowB: Row<T>, columnId: string) {
  let dir = 0;

  // Only sort by rank if the column has ranking information
  if (
    rowA.columnFiltersMeta[columnId]?.itemRank !== undefined &&
    rowB.columnFiltersMeta[columnId]?.itemRank !== undefined
  ) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId].itemRank,
      rowB.columnFiltersMeta[columnId].itemRank,
    );
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
}

type DataTableBaseProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  initialColumnVisibility?: VisibilityState;
};

export type DataTableProps<T> = DataTableBaseProps<T> & {
  bare?: boolean;
  initialPageSize?: number;
  title?: string;
};

export default function DataTable<T>({
  // Base props
  data,
  columns,
  initialColumnVisibility,
  bare,
  initialPageSize,
  // Wrapper props
  title,
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable<T>({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    sortingFns: {
      fuzzy: fuzzySort,
    },
    initialState: {
      pagination: {
        pageSize: initialPageSize ?? data.length,
      },
      columnVisibility: initialColumnVisibility,
    },
    // Sorting & Filtering
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    // Pipelines
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const bareDataTable = <RawDataTable table={table} />;

  return bare ? (
    bareDataTable
  ) : (
    <RawDataTableWrapper
      title={title}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
      table={table}
    >
      {bareDataTable}
    </RawDataTableWrapper>
  );
}
