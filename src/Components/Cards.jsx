import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const Cards = () => {
    return (
        <section className="w-full   bg-white  flex justify-center">
            <div className="w-full Mycontainer ">
                <div className="    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: 'ICU Equipment',
                            description:
                                'From advanced ventilators to patient monitors, we supply critical care equipment that ensures patient safety and supports healthcare professionals in delivering optimal care.',
                        },
                        {
                            title: 'Imaging Equipment',
                            description:
                                'Our range includes state-of-the-art imaging solutions such as MRI machines, CT scanners, ultrasound devices, and X-ray systems, which provide accurate diagnostics and enhance treatment outcomes.',
                        },
                        {
                            title: 'Hospital Furniture',
                            description:
                                'We offer hospital furniture designed for comfort, functionality, and durability—like hospital beds, bedside cabinets, and overbed tables—to support recovery and staff workflow.',
                        },
                        {
                            title: 'Patient Care Products',
                            description:
                                'From infusion pumps to transport systems, our care products are built to enhance quality, patient comfort, and safety.',
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 px-6 pt-10 pb-25  shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-full"
                        >
                            <div className="bg-[#498ef3] rounded-full p-4 mb-5">
                                <FaHeartbeat className="text-4xl text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;
