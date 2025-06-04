import React from 'react'

const Contact = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0094f5]">Contact Us</h2>
                <p className="text-gray-400 mt-2">We'd love to hear from you! Please fill out the form below.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 md:p-10 rounded-lg shadow-lg">
                <div className="flex flex-col col-span-1">
                    <label className="text-gray-700 font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded border border-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="flex flex-col col-span-1">
                    <label className="text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="p-3 rounded border border-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="flex flex-col md:col-span-2">
                    <label className="text-gray-700 font-medium mb-1">Subject</label>
                    <input
                        type="text"
                        placeholder="Subject of your message"
                        className="p-3 rounded border border-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="flex flex-col md:col-span-2">
                    <label className="text-gray-700  font-medium mb-1">Message</label>
                    <textarea
                        rows="5"
                        placeholder="Write your message here..."
                        className="p-3 rounded border border-gray-500 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className=" bg-yellow-500 text-black hover:text-white font-semibold px-6 py-3 rounded hover:bg-[#0094f5] hover transition duration-300"
                    >
                        Send
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact