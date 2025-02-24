import Link from "next/link";

import Converter from "@/components/converter";
import Currencies from "@/components/currencies";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-12 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Card className="flex flex-col items-center">
        <CardTitle className="my-8">Currency Converter</CardTitle>
        <CardContent>
          <Converter currencies={<Currencies />} />
        </CardContent>
      </Card>
      <Link
        href="/currencies"
        className={buttonVariants({ variant: "outline" })}
      >
        Get the list of currencies rate
      </Link>
    </div>
  );
}
