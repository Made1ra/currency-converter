import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function Currencies() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-12 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        <ArrowLeft />
        Go back
      </Link>
    </div>
  );
}
