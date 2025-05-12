import { DataTable } from "@/components/ui/data-table";

import { type Currency, currencyColumns } from "@/components/currency-columns";

type CurrencyTableProps = {
  isLoading: boolean;
  data: Currency[];
};

function CurrencyTable({ isLoading, data }: CurrencyTableProps) {
  return (
    <DataTable
      columns={currencyColumns}
      data={data}
      isLoading={isLoading}
      noDataText="No currencies to display"
      caption="The list of currencies rate"
    />
  );
}

export default CurrencyTable;
