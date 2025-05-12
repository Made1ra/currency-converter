import { fetcher } from "@/lib/utils";
import { ACCESS_KEY } from "@/lib/constants";

export async function getCurrencies() {
  return fetcher(`list?${ACCESS_KEY}`);
}

export async function getLatestRates(source: string, signal?: AbortSignal) {
  return fetcher(`live?${ACCESS_KEY}&source=${source}`, { signal });
}

export async function convert(from: string, to: string, amount: number) {
  return fetcher(
    `convert?${ACCESS_KEY}&from=${from}&to=${to}&amount=${amount}`,
  );
}
