// import React from 'react'

// const Contact = () => {
//     return (
//         <section className="w-full mb-10 bg-white">
//             <div className="w-full Mycontainer  ">
//                 {/* Heading */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0094f5]">
//                         Contact Us
//                     </h2>
//                     <p className="text-gray-500 mt-2 text-sm sm:text-base">
//                         We'd love to hear from you! Please fill out the form below.
//                     </p>
//                 </div>

//                 {/* Form */}
//                 <form className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Full Name */}
//                     <div className="flex flex-col">
//                         <label className="text-gray-700 font-medium mb-1">Full Name</label>
//                         <input
//                             type="text"
//                             placeholder="Your Name"
//                             className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         />
//                     </div>

//                     {/* Email */}
//                     <div className="flex flex-col">
//                         <label className="text-gray-700 font-medium mb-1">Email</label>
//                         <input
//                             type="email"
//                             placeholder="you@example.com"
//                             className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         />
//                     </div>

//                     {/* Subject */}
//                     <div className="flex flex-col md:col-span-2">
//                         <label className="text-gray-700 font-medium mb-1">Subject</label>
//                         <input
//                             type="text"
//                             placeholder="Subject of your message"
//                             className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         />
//                     </div>

//                     {/* Message */}
//                     <div className="flex flex-col md:col-span-2">
//                         <label className="text-gray-700 font-medium mb-1">Message</label>
//                         <textarea
//                             rows={5}
//                             placeholder="Write your message here..."
//                             className="p-3 rounded border border-gray-300 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         ></textarea>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="md:col-span-2 flex justify-center">
//                         <button
//                             type="submit"
//                             className="cursor-pointer bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-[#0094f5] hover:text-white transition duration-300"
//                         >
//                             Send
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default Contact

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="w-full mb-10 bg-white">
      <div className="w-full Mycontainer">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0094f5]"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-2 text-sm sm:text-base"
          >
            We'd love to hear from you! Please fill out the form below.
          </motion.p>
        </div>

        
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject of your message"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="p-3 rounded border border-gray-300 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="cursor-pointer bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-[#0094f5] hover:text-white transition duration-300"
            >
              Send
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
