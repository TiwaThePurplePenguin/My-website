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

export default function RoadmapSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Roadmap
        </h2>

        <div className="relative border-l border-gray-700 ml-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ring-4 ring-gray-900" />

              <h3 className="text-xl font-semibold">{item.step}</h3>
              <h4 className="text-lg text-purple-300 font-medium">{item.title}</h4>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

