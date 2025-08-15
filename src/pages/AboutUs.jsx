





import React from "react";
import { FaHeartbeat, FaUsers, FaBullseye, FaQuoteLeft } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen p-6 md:mt-0 bg-gradient-to-b from-green-100 via-green-300 to-green-400">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-green-800 drop-shadow-md">
          About Us
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-green-900/80 leading-relaxed">
          We're building a future where health is accessible, personalized, and powered by smart tools.
        </p>
      </div>

      {/* Mission, Team, Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        <InfoCard
          icon={<FaHeartbeat className="text-5xl text-green-600 mb-5 animate-pulse" />}
          title="Our Mission"
          text="Empower everyone to lead a healthy lifestyle through informed food choices and sustainable habits."
        />
        <InfoCard
          icon={<FaUsers className="text-5xl text-green-600 mb-5 animate-spin-slow" />}
          title="Our Team"
          text="A passionate group of dietitians, developers, and data scientists building intelligent health platforms."
        />
        <InfoCard
          icon={<FaBullseye className="text-5xl text-green-600 mb-5" />}
          title="Our Vision"
          text="Create a world where wellness is simple, personalized, and accessible for everyone."
        />
      </div>

      {/* Timeline */}
      <SectionTitle title="Our Journey" />
      <Timeline />

      {/* Testimonials */}
      <SectionTitle title="What Our Users Say" />
      <Testimonials />

      {/* Team */}
      <SectionTitle title="Meet the Founders" />
      <Team />
    </div>
  );
};

// InfoCard with hover effect
const InfoCard = ({ icon, title, text }) => (
  <div className="bg-white/90 rounded-3xl p-6 sm:p-8 text-center shadow-lg border border-green-200 hover:scale-105 transition-transform duration-500">
    {icon}
    <h2 className="text-2xl font-semibold mb-3 text-green-700">{title}</h2>
    <p className="text-green-900/90 leading-relaxed text-sm sm:text-base">{text}</p>
  </div>
);

// SectionTitle with gradient underline
const SectionTitle = ({ title }) => (
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-green-800 my-12 relative after:content-[''] after:absolute after:left-1/2 after:-bottom-4 after:-translate-x-1/2 after:h-1 after:w-20 after:rounded-full after:bg-gradient-to-r after:from-green-400 after:to-green-700">
    {title}
  </h2>
);

// Timeline
const Timeline = () => {
  const items = [
    { year: "2023", event: "Idea Born — Healthy food meets smart tech." },
    { year: "2024", event: "Prototype Launched — MVP goes live to early adopters." },
    { year: "2025", event: "Growth — Community of 10,000+ users & nutritionists." },
  ];
  return (
    <div className="max-w-4xl mx-auto relative border-l-4 border-green-300 pl-8 sm:pl-10 space-y-10 mb-16">
      {items.map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-6 sm:-left-8 top-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-tr from-green-400 to-green-700 rounded-full border-2 border-white shadow-lg transition-transform transform hover:scale-125"></div>
          <h3 className="font-bold text-xl sm:text-2xl text-green-800">{item.year}</h3>
          <p className="text-green-900/90 text-sm sm:text-lg">{item.event}</p>
        </div>
      ))}
    </div>
  );
};

// Testimonials
const Testimonials = () => {
  const testimonials = [
    { name: "Aarav R.", quote: "This platform completely changed how I track my diet. Simple, smart, and super helpful!" },
    { name: "Dr. Priya Mehta", quote: "As a nutritionist, this tool lets me give better plans to clients and track results effectively." },
  ];
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gradient-to-r from-green-100 to-green-200 p-6 sm:p-8 rounded-2xl shadow-lg relative hover:shadow-2xl transition-shadow duration-300">
          <FaQuoteLeft className="text-green-600 text-3xl sm:text-4xl mb-3 opacity-80 animate-pulse" />
          <p className="italic text-green-900 text-sm sm:text-base leading-relaxed mb-4">“{t.quote}”</p>
          <p className="font-semibold text-green-700 text-right text-sm sm:text-base">- {t.name}</p>
        </div>
      ))}
    </div>
  );
};

// Team
const Team = () => {
  const members = [
    { name: "Rohan", role: "Full Stack Developer", bio: "Loves building health tech products with MERN stack & data magic." },
    { name: "Aditi", role: "Nutrition Coach", bio: "Passionate about holistic wellness and personalized diet solutions." },
    { name: "Priya", role: "Nutrition Coach", bio: "Expert in creating tailored diet plans for clients." },
  ];
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
      {members.map((member, i) => (
        <div key={i} className="bg-white/90 rounded-3xl p-6 sm:p-8 text-center shadow-lg border border-green-200 hover:scale-105 hover:shadow-2xl transition-transform duration-500">
          <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-green-400 to-green-700 text-white flex items-center justify-center text-2xl sm:text-5xl font-extrabold mb-4 sm:mb-6 select-none shadow-md">
            {member.name.charAt(0)}
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-green-800 mb-1 sm:mb-2">{member.name}</h4>
          <p className="text-green-700 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
          <p className="text-green-900/90 text-sm sm:text-base leading-relaxed">{member.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
