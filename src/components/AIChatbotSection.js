import React from 'react';
import { Bot } from 'lucide-react';

const AIChatbotSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white px-6 py-16 md:px-20 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          AI Chatbot for Personalized <br />
          Investment Advice
        </h2>
        <p className="italic text-lg font-medium">
          Not Sure Where to Invest? Let Our AI Guide You!
        </p>

        <ul className="list-disc list-inside text-base text-blue-100 space-y-2">
          <li><b>Interactive AI-powered chatbot to analyze user risk appetite & goals.</b></li>
          <li><b>Offers personalized investment recommendations in real-time.</b></li>
          <li><b>Conversational UX to increase engagement & lead conversion.</b></li>
        </ul>

        <button className="bg-blue-100 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-white transition-all duration-200">
          Chat with AI Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/images/i20.png" // Save your screenshot as this
          alt="AI Chatbot Illustration"
          width={500}
          height={400}
          className="rounded-xl drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default AIChatbotSection;
