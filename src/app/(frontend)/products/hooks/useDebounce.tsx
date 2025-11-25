import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GenerateSearchParams } from "../usecases/GenerateSearchParams";

export const useDebounce = (
  preview: string | undefined,
  value: string,
  selectedCategory: string,
  selectedCountry: string,
  delay: number = 500
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      router.push(
        `/products?${new GenerateSearchParams().execute(
          preview,
          value,
          selectedCategory,
          selectedCountry
        )}`,
        {
          scroll: false,
        }
      );
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [preview, value, delay, selectedCategory, selectedCountry, router]);

  return { debouncedValue, setDebouncedValue };
};
