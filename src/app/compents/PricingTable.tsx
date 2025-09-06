// app/components/PricingTable.tsx
"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Standard",
    price: "$9/7 days",
    features: ["1 person", "Basic Support", "WIFI Access"],
    highlight: false,
  },
  {
    name: "First Class",
    price: "$29/1 mo",
    features: ["5 persons", "Priority Support", "WIFI Access"],
    highlight: true, // Highlight this plan
  },
  {
    name: "Business Class",
    price: "$59/1 year ",
    features: ["Family of 5", "24/7 Support", "WIFI Access"],
    highlight: false,
  },
  {
    name: "Enterprise offer",
    price: "$99/5 years",
    features: ["Family and Firends", "Dedicated Manager", "Unlimited Location"],
    highlight: false,
  },
];

export default function PricingTable() {
  return (
    <section className="py-16 px-6 bg-red-600">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-yellow-300">
          Choose Your Plan
        </h2>
        <p className="text-yellow-300 mt-2">
          Flexible pricing for every stage of your journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl shadow-md p-6 flex flex-col items-center transition-all duration-300
              ${
                plan.highlight
                  ? "bg-yellow-300 border-2 border-orange-500 shadow-lg"
                  : "bg-yellow-300 border"
              }`}
          >
            {plan.highlight && (
              <span className="px-3 py-1 text-sm bg-yellow-500 text-indigo-600 rounded-full mb-3">
                Popular
              </span>
            )}
            <h3 className="text-xl font-semibold text-orange-400">{plan.name}</h3>
            <p className="text-3xl font-bold text-orange-400-600 mt-2">
              {plan.price}
            </p>

            <ul className="mt-6 space-y-3 text-orange-600">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 px-6 py-2 rounded-xl font-medium transition 
                ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
