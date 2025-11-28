"use server";

import { FetchProducts } from "./usecases/FetchProducts";

export const loadMore = async (
  page: number,
  search?: string,
  category?: string,
  country?: string
) => {
  return await new FetchProducts().execute(page, search, category, country);
};
