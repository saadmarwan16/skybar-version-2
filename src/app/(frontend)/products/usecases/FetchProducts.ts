import type { BasePayload } from "payload";

export class FetchProducts {
  async execute(
    payload: BasePayload,
    _preview?: string,
    search?: string,
    category?: string,
    country?: string
  ) {
    const products = await payload.find({
      collection: "products",
      limit: 6,
      page: 1,
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
