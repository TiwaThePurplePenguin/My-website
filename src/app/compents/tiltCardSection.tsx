// components/TiltCardSection.tsx

"use client";

import TiltCard from "@/app/compents/TiltCard"

export default function TiltCardSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Explore Our Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          <TiltCard
            title="Beautiful Provinces"
            description="NewBrunwick, pei, Nova Soctia and more! "
            gradient="bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500"
          />
          <TiltCard
            title="Capital"
            description="Ottawa in Ontario ."
            gradient="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500"
          />
          <TiltCard
            title="Facts"
            description="25 Facts about Canada."
            gradient="bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500"
          />
          <TiltCard
            title="Why you should come to Canada"
            description="Its fun here trust."
            gradient="bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500"
          />
        </div>
      </div>
    </section>
  );
}
