import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_RowData,
  MRT_ColumnDef,
} from "material-react-table";

interface CustomTableProps<T extends MRT_RowData> {
  data: T[];
  columns: MRT_ColumnDef<T>[];
  columnPinning?: string[];
}
/**
 * READ advance example here
 * https://www.material-react-table.com/docs/examples/advanced
 */
const CustomTable = <T extends MRT_RowData>({
  data,
  columns,
  columnPinning,
}: CustomTableProps<T>) => {
  const table = useMaterialReactTable<T>({
    data,
    columns,
    enableFullScreenToggle: false,
    enableRowNumbers: true,
    // enableRowSelection: true,
    rowNumberDisplayMode: "original",
    enableColumnPinning: true,
    initialState: {
      columnPinning: { left: columnPinning },
    },
  });

  return <MaterialReactTable<T> table={table} />;
};

export default CustomTable;
