import React from 'react';
const successStories = [
  {
    name: "Priya Sharma",
    location: "Bengaluru, India",
    profile: "26, Software Engineer",
    quote:
      "As someone completely new to investing, Wealth+ made it so easy. Their curated funds and educational tools gave me confidence. In just 9 months, I’ve already seen solid growth and learned so much about personal finance!",
    gains: "12% return in 9 months",
    feature: "Knowledge Centre & Auto-Invest Strategy",
    color: "bg-blue-100"
  },
  {
    name: "Rohan Mehta",
    location: "Mumbai, India",
    profile: "34, Marketing Manager",
    quote:
      "I don’t have time to track the market daily. Wealth+ gave me peace of mind with automated investments that align with my goals. I’ve diversified smartly without any stress.",
    gains: "18% return in 1.5 years",
    feature: "Goal-based Investing & Personalized Insights",
    color: "bg-green-100"
  },
  {
    name: "Neha Verma",
    location: "Pune, India",
    profile: "41, HR Consultant",
    quote:
      "Wealth+ helped me plan for my child’s education fund. The portfolio recommendations were spot-on and I can track progress easily. I feel in control of my family's future now.",
    gains: "22% return in 2 years",
    feature: "Child Education Planning Tool & Portfolio Tracker",
    color: "bg-purple-100"
  }
];


const SuccessStories = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Success Stories
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Hear how Wealth<sup className="text-indigo-600">+</sup> helped users invest smarter and grow their wealth.
        </p>

        {/* Placeholder for video feed or testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {successStories.map((story, index) => (
        <card
          key={index}
          className={`rounded-2xl shadow-md p-4 ${story.color}`}
        >
          <card>
            <h2 className="text-lg font-semibold text-gray-800">
              {story.name}
            </h2>
            <p className="text-sm text-gray-600">{story.location} — {story.profile}</p>
            <p className="italic my-3 text-gray-700">“{story.quote}”</p>
            <p className="text-sm font-medium text-gray-800">✅ Gains: {story.gains}</p>
            <p className="text-sm text-gray-700">🧠 Favorite Feature: {story.feature}</p>
          </card>
        </card>
      ))}
    </div>

        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;
