"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type Currency = {
  code: string;
  rate: string;
};

export const currencyColumns: ColumnDef<Currency>[] = [
  {
    accessorKey: "code",
    header: "Currency",
  },
  {
    accessorKey: "rate",
    header: "Rate",
  },
];
