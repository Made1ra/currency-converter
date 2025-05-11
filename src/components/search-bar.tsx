import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const searchCurrenciesSchema = z.object({
  currency: z.string().nonempty(),
});

type SearchCurrensiesForm = z.infer<typeof searchCurrenciesSchema>;

type SearchBarProps = {
  setCurrency: (currency: string) => void;
};

function SearchBar({ setCurrency }: SearchBarProps) {
  const form = useForm<SearchCurrensiesForm>({
    resolver: zodResolver(searchCurrenciesSchema),
    defaultValues: {
      currency: "",
    },
  });

  const onSubmit = (values: SearchCurrensiesForm) => {
    setCurrency(values.currency);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end justify-center gap-2"
      >
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search for a currency</FormLabel>
              <FormControl>
                <Input placeholder="USD" {...field} type="search" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          <Search />
        </Button>
      </form>
    </Form>
  );
}

export default SearchBar;
