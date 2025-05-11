import { DataTable } from "@/components/ui/data-table";

import { type Currency, currencyColumns } from "@/components/currency-columns";

type CurrencyTableProps = {
  data: Currency[];
};

function CurrencyTable({ data }: CurrencyTableProps) {
  return (
    <DataTable
      columns={currencyColumns}
      data={data}
      noDataText="No currencies to display"
      caption="The list of currencies rate"
    />
  );
}

export default CurrencyTable;
