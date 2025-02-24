import { TableRow, TableCell } from "@/components/ui/table";

type CodesProps = {
  codes: string[];
  rates: number[];
};

function Codes({ codes, rates }: CodesProps) {
  return (
    <>
      {codes.map((code, index) => (
        <TableRow key={code}>
          <TableCell>{code}</TableCell>
          <TableCell>{1 / rates[index]}</TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default Codes;
