import { getPayload } from "payload";
import config from "@/payload.config";

export class FetchProducts {
  async execute(
    page: number,
    search?: string,
    category?: string,
    country?: string
  ) {
    const payload = await getPayload({ config });
    const products = await payload.find({
      collection: "products",
      limit: 2,
      page: page,
      where: {
        title: {
          contains: search ?? "",
        },
        "export_from.value": country ? { in: [country] } : {},
        "categories.value": category ? { in: [category] } : {},
      },
    });

    return products;
  }
}
