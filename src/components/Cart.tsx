"use client";

import Image from "next/image";
import { type FunctionComponent, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Media } from "@/payload-types";
import { useCartStore } from "@/store/useCartStore";
import QuoteRequestDialog from "./QuoteRequestDialog";

const Cart: FunctionComponent = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, clearCart } =
    useCartStore();
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        onClick={toggleCart}
        onKeyDown={(e) => e.key === "Escape" && toggleCart()}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Shopping Cart ({items.length})
          </h2>
          <button
            type="button"
            onClick={toggleCart}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Close cart</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg
                className="w-24 h-24 text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Empty cart</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">
                Add some products to get started
              </p>
            </div>
          ) : (
            items.map((item) => {
              const images = item.product.images as Media[];

              return (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden">
                    {images?.length > 0 && images[0]?.url ? (
                      <Image
                        src={images[0]?.url}
                        alt={images[0].alt}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src="/no-product-image.png"
                        alt="No product image"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                      {item.product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      ${item.product.price_range.min_price} - $
                      {item.product.price_range.max_price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="text-sm font-medium text-gray-900 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <title>Remove item</title>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-3">
            <Button
              onClick={clearCart}
              variant="outline"
              className="w-full h-12 border-red-300 text-red-600 hover:bg-red-50"
            >
              Clear Cart
            </Button>
            <Button
              onClick={() => setIsQuoteDialogOpen(true)}
              className="w-full h-12 bg-gradient-primary hover:shadow-lg text-primary-foreground font-semibold"
            >
              Request Quote
            </Button>
          </div>
        )}
      </div>

      {/* Quote Request Dialog */}
      <QuoteRequestDialog
        isOpen={isQuoteDialogOpen}
        onClose={() => setIsQuoteDialogOpen(false)}
        cartItems={items}
      />
    </>
  );
};

export default Cart;
