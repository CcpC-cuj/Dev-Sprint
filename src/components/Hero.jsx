import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Build. Launch. <br />
            <span className="text-indigo-500">Win the Hackathon.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Join DevB Sprint and compete with developers across the country.
            Build innovative projects, collaborate with teams, and showcase
            your skills to industry mentors.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
              Register Now
            </button>

            <button className="px-6 py-3 border border-gray-600 hover:border-white rounded-lg transition">
              Learn More
            </button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-gray-400 text-sm">
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              Developers
            </div>
            <div>
              <p className="text-2xl font-bold text-white">48h</p>
              Hackathon
            </div>
            <div>
              <p className="text-2xl font-bold text-white">₹50K</p>
              Prize Pool
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20"></div>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Hackathon"
            className="relative rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}