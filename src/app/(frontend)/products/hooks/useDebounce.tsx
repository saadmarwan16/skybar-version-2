import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GenerateSearchParams } from "../usecases/GenerateSearchParams";

export const useDebounce = (
  value: string,
  selectedCategory: string,
  selectedCountry: string,
  delay: number = 500,
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      router.push(
        `/products?${new GenerateSearchParams().execute(
          value,
          selectedCategory,
          selectedCountry,
        )}`,
        {
          scroll: false,
        },
      );
    }, delay);
    console.log("Rerendering");

    return () => {
      clearTimeout(id);
    };
  }, [value, delay, selectedCategory, selectedCountry, router]);

  return { debouncedValue, setDebouncedValue };
};
