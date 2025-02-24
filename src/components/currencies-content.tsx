"use client";

import { type ReactNode, useState } from "react";

import GetCurrenciesForm from "@/components/get-currencies-form";

import CurrencyTable from "@/components/currency-table";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import SearchBar from "@/components/search-bar";

type CurrenciesContentProps = {
  currencies: ReactNode;
};

function CurrenciesContent({ currencies }: CurrenciesContentProps) {
  const [currency, setCurrency] = useState("");
  const [quotes, setQuotes] = useState<Record<string, number>>({});

  const filteredQuotes = Object.entries(quotes).filter(([code]) =>
    code.toLowerCase().includes(currency.toLowerCase()),
  );

  const codes = filteredQuotes.map(([code]) => code);
  const rates = filteredQuotes.map(([, rate]) => rate);

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
      {filteredQuotes.length > 0 ? (
        <CurrencyTable codes={codes} rates={rates} />
      ) : (
        <p className="text-center">No currencies to display</p>
      )}
    </>
  );
}

export default CurrenciesContent;
