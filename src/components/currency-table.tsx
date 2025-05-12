import { DataTable } from "@/components/ui/data-table";

import { type Currency, currencyColumns } from "@/components/currency-columns";

type CurrencyTableProps = {
  isLoading: boolean;
  error: Error | null;
  data: Currency[];
};

function CurrencyTable({ isLoading, error, data }: CurrencyTableProps) {
  return (
    <DataTable
      columns={currencyColumns}
      data={data}
      isLoading={isLoading}
      error={error}
      noDataText="No currencies to display"
      caption="The list of currencies rate"
    />
  );
}

export default CurrencyTable;
