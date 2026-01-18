import { Bell, Rabbit, Shield } from "lucide-react";
import React from "react";
import ProductCard from "../product-card";

export default function ProductFeatures({ products, user }) {
  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];
  console.log("products", products);
  return (
    <>
      {products.length === 0 && (
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              className="bg-white p-6 rounded-xl border border-gray-200 space-y-4 text-center"
              key={title}
            >
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex justify-center items-center mx-auto">
                <Icon className="w-6 h-6 text-lime-600" />
              </div>
              <h3 className="text-lime-900 font-semibold">{title}</h3>
              <p className="text-sm font-normal text-lime-600">{description}</p>
            </div>
          ))}
        </div>
      )}
      {user && products.length > 0 && (
        <section className="max-w-7xl py-20 mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h3>Your Tracked Products</h3>
            <span>
              {products.length} {products.length === 1 ? "product" : "products"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-6 items-start">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
