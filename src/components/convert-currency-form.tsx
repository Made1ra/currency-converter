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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { convert } from "@/lib/actions";

const convertCurrencySchema = z.object({
  amount: z.coerce.number().positive().min(0.1, {
    message: "Amount must be greater than 0.1",
  }),
  from: z.string().nonempty(),
  to: z.string().nonempty(),
});

type ConvertCurrencyForm = z.infer<typeof convertCurrencySchema>;

type ConvertCurrencyFormProps = {
  currencies: React.ReactNode;
  setResult: (result: number) => void;
};

function ConvertCurrencyForm({
  currencies,
  setResult,
}: ConvertCurrencyFormProps) {
  const form = useForm<ConvertCurrencyForm>({
    resolver: zodResolver(convertCurrencySchema),
    defaultValues: {
      amount: 0.1,
      from: "UAH",
      to: "USD",
    },
  });

  const onSubmit = async (values: ConvertCurrencyForm) => {
    const { result } = await convert(values.from, values.to, values.amount);
    setResult(result);
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
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insert an amount</FormLabel>
              <FormControl>
                <Input placeholder="0.1" {...field} type="number" step={0.1} />
              </FormControl>
              <FormDescription>
                The amount of money you want to convert
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="from"
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
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select target currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                </FormControl>
                {currencies}
              </Select>
              <FormDescription>
                The currency you want to convert to
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default ConvertCurrencyForm;
