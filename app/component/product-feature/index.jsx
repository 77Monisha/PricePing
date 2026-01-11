import { Bell, Feather, Rabbit, Shield } from "lucide-react";
import React from "react";

export default function ProductFeatures() {
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

  return (
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
  );
}
