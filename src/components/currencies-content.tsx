"use client";

import { type ReactNode, useState } from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

import CurrencyTable from "@/components/currency-table";
import SearchBar from "@/components/search-bar";
import { useLatestRatesQuery } from "@/hooks/query/use-latest-rates-query";

type CurrenciesContentProps = {
  currencies: ReactNode;
};

function CurrenciesContent({ currencies }: CurrenciesContentProps) {
  const [currency, setCurrency] = useState("");
  const [source, setSource] = useState("UAH");

  const { quotes } = useLatestRatesQuery(source);

  const filteredQuotes = Object.entries(quotes)
    .filter(([code]) => code.toLowerCase().includes(currency.toLowerCase()))
    .map(([code, rate]) => ({ code, rate: (1 / rate).toFixed(2) }));

  return (
    <>
      <Card className="flex flex-col items-center">
        <CardTitle className="my-8">Currency Converter</CardTitle>
        <CardContent className="space-y-2">
          <Label>Select current currency</Label>
          <Select value={source} onValueChange={setSource}>
            <SelectTrigger>
              <SelectValue placeholder="UAH" />
            </SelectTrigger>
            {currencies}
          </Select>
          <p className="text-[0.8rem] text-muted-foreground">
            The currency you want to convert from
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <SearchBar setCurrency={setCurrency} />
        </CardContent>
      </Card>
      <CurrencyTable data={filteredQuotes} />
    </>
  );
}

export default CurrenciesContent;
