"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    step: "Phase 1",
    title: "Target Audience",
    description: "Locals exploring Canada, international tourists, or both.",
  },
  {
    step: "Phase 2",
    title: "Themed Guides",
    description: "Best Winter Trips,” “Road Trips in Canada,” “Hidden Gems in Canada..",
  },
  {
    step: "Phase 3",
    title: "Trip Planner Tool",
    description: "Allow visitors to save favorite places and plan itineraries..",
  },
  {
    step: "Phase 4",
    title: "Color Palette",
    description: "Red (Canada), green (nature), blue (sky/water).",
  },
];

export default function Roadmap() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Roadmap</h2>
        <div className="relative border-l-2 border-gray-300 dark:border-gray-700">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              {/* Dot */}
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] border-2 border-white dark:border-gray-900"></div>

              {/* Content */}
              <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
     </div>
    </section>
  );
}
