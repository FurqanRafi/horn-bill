import React from 'react';
import Image from 'next/image';
import compression from '@/assets/compression.webp';
import innovation from '@/assets/innovation.webp';
import trust from '@/assets/trust.webp';

const ValuesSection = () => {
  const cards = [
    {
      title: 'Compassion',
      text: `We put people first. Our solutions are designed to meet the needs of both healthcare providers and patients, ensuring comfort, safety, and the best possible outcomes.`,
      img: compression
    },
    {
      title: 'Innovation',
      text: `We are at the forefront of medical technology. By bringing the latest advancements in medical equipment to Pakistan, we help healthcare providers stay ahead in their field and deliver cutting-edge care.`,
      img: innovation
    },
    {
      title: 'Trust',
      text: `Trust is the cornerstone of our business. We build lasting relationships with our clients through transparency, reliability, and exceptional service. Our commitment to quality ensures that you can depend on us for all your medical equipment needs.`,
      img: trust
    },
  ];

  return (
    <section className="w-full bg-white flex items-center justify-between">
      <div className="w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-md overflow-hidden flex flex-col"
            >
              <div className="w-full aspect-[3/2] relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
