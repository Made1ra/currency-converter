import Codes from "@/components/codes";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CurrencyTableProps = {
  codes: string[];
  rates: number[];
};

function CurrencyTable({ codes, rates }: CurrencyTableProps) {
  return (
    <Table className="mx-auto max-w-96 caption-top">
      <TableCaption>The list of currencies rate</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Currency</TableHead>
          <TableHead>Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <Codes codes={codes} rates={rates} />
      </TableBody>
    </Table>
  );
}

export default CurrencyTable;
