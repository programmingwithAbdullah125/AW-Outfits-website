// pages/Contact.js
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 uppercase">Contact Us</h2>
          <p className="mt-4 text-lg font-medium text-gray-600">if you facing any problem.please contact our team</p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Contact Info */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <p className="text-xl font-semibold">
              <span className="text-gray-900">Email:</span>
              <span className="text-blue-500"> awoutfits00@gmail.com</span>
            </p>
            <p className="text-xl font-semibold">
              <span className="text-gray-900">Phone:</span>
              <span className="text-blue-500"> 03150232129</span>
            </p>
            <p className="text-xl font-semibold">
              <span className="text-gray-900">WhatsApp:</span>
              <span className="text-blue-500"> 03150232129</span>
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
              <Link href="https://facebook.com" passHref>
                <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
              </Link>
              <Link href="https://instagram.com" passHref>
                <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
              </Link>
              <Link href="https://wa.me/03150232129" passHref>
                <FaWhatsapp className="text-green-500 text-2xl cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
