"use client";

import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getLatestRates } from "@/lib/actions";

const getCurrenciesSchema = z.object({
  currency: z.string().nonempty(),
});

type GetCurrenciesForm = z.infer<typeof getCurrenciesSchema>;

type GetCurrenciesFormProps = {
  currencies: ReactNode;
  setQuotes: (quotes: Record<string, number>) => void;
};

function GetCurrenciesForm({ currencies, setQuotes }: GetCurrenciesFormProps) {
  const form = useForm<GetCurrenciesForm>({
    resolver: zodResolver(getCurrenciesSchema),
    defaultValues: {
      currency: "UAH",
    },
  });

  const onSubmit = async (values: GetCurrenciesForm) => {
    const { quotes } = await getLatestRates(values.currency);

    setQuotes(quotes);

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select current currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="UAH" />
                  </SelectTrigger>
                </FormControl>
                {currencies}
              </Select>
              <FormDescription>
                The currency you want to convert from
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default GetCurrenciesForm;
