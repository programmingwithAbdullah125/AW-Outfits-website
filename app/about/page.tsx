// pages/About.js
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 uppercase">About <br /><br /> AW Outfits</h2>
          <p className="mt-4 text-lg font-medium text-gray-600 italic">&quot;Wear Your Attitude&quot;</p>
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="flex-1">
            <Image
              src="/logo.jpg"
              alt="Fashion Model"
              className="w-full rounded-lg shadow-lg object-cover h-80"
              width={300}
              height={300}
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <p className="text-xl leading-relaxed">
              At <span className="font-semibold text-gray-900">AW Outfits</span>, we believe that every piece of clothing is an expression of who you are.
              Our collection is carefully curated to bring out your unique style, empowering you to showcase your personality.
            </p>
            <p className="text-xl leading-relaxed">
              From timeless classics to the latest trends, AW Outfits is dedicated to offering you high-quality apparel that’s both
              comfortable and stylish. With us, you don&apos;t just wear clothes; you wear your attitude.
            </p>
            <p className="text-xl leading-relaxed">
              Discover the perfect outfit that resonates with your vibe, whether it&apos;s for work, a night out, or a casual day in the city.
              Join us, and let your style speak for itself with <span className="font-semibold text-gray-900">AW Outfits</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
