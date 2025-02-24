import { SelectContent, SelectItem } from "@/components/ui/select";

import { getCurrencies } from "@/lib/actions";

async function Currencies() {
  const { currencies } = await getCurrencies();

  const codes = Object.keys(currencies);
  const names = Object.values<string>(currencies);

  return (
    <SelectContent>
      {codes.map((code, index) => (
        <SelectItem key={code} value={code}>
          {names[index]}
        </SelectItem>
      ))}
    </SelectContent>
  );
}

export default Currencies;
