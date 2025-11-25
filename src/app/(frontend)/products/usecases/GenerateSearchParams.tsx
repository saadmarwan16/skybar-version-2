import { stringify } from "node:querystring";

interface IQuery {
  preview?: string;
  search?: string;
  category?: string;
  country?: string;
}

export class GenerateSearchParams {
  execute(
    preview?: string,
    search?: string,
    category?: string,
    country?: string
  ) {
    const params: IQuery = {};
    if (preview) params.preview = preview;
    if (search) params.search = search;
    if (category && category !== "All Categories") params.category = category;
    if (country && country !== "All Countries") params.country = country;

    return stringify(params as Record<string, string>);
  }
}
