"use client";

import { type ReactNode, useState } from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

import GetCurrenciesForm from "@/components/get-currencies-form";
import CurrencyTable from "@/components/currency-table";
import SearchBar from "@/components/search-bar";

type CurrenciesContentProps = {
  currencies: ReactNode;
};

function CurrenciesContent({ currencies }: CurrenciesContentProps) {
  const [currency, setCurrency] = useState("");
  const [quotes, setQuotes] = useState<Record<string, number>>({});

  const filteredQuotes = Object.entries(quotes)
    .filter(([code]) => code.toLowerCase().includes(currency.toLowerCase()))
    .map(([code, rate]) => ({ code, rate: (1 / rate).toFixed(2) }));

  return (
    <>
      <Card className="flex flex-col items-center">
        <CardTitle className="my-8">Currency Converter</CardTitle>
        <CardContent>
          <GetCurrenciesForm currencies={currencies} setQuotes={setQuotes} />
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
