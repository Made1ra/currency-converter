import { useQuery } from "@tanstack/react-query";

import type { Rate } from "@/lib/types";
import { getLatestRates } from "@/lib/requests";

export function useLatestRatesQuery(source: string) {
  const { isLoading, error, data } = useQuery<Rate>({
    queryKey: ["rates", source],
    queryFn: ({ signal }) => getLatestRates(source, signal),
  });

  return { isLoading, error, quotes: data?.quotes ?? {} };
}
