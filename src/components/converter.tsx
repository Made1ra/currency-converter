"use client";

import { type ReactNode, useState } from "react";

import ConvertCurrencyForm from "@/components/convert-currency-form";
import Result from "@/components/result";

type ConverterProps = {
  currencies: ReactNode;
};

function Converter({ currencies }: ConverterProps) {
  const [result, setResult] = useState<null | number>(null);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <ConvertCurrencyForm currencies={currencies} setResult={setResult} />
      {result && <Result result={result} />}
    </div>
  );
}

export default Converter;
