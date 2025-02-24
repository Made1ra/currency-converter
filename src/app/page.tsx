import ConvertCurrencyForm from "@/components/convert-currency-form";
import Currencies from "@/components/currencies";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Card className="flex flex-col items-center">
        <CardTitle className="my-8">Currency Converter</CardTitle>
        <CardContent>
          <ConvertCurrencyForm currencies={<Currencies />} />
        </CardContent>
      </Card>
    </div>
  );
}
