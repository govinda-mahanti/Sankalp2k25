import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can participate in Sankalp?",
      answer: "Sankalp is open to all college students across India. Whether you're from NIST or any other institution, if you have a passion for cultural events, technical competitions, or sports, you're welcome to participate!"
    },
    {
      question: "What kind of events are organized in Sankalp?",
      answer: "Sankalp features a diverse range of events including cultural performances (dance, music, drama), technical competitions (coding, robotics, hackathons), sports tournaments, literary events, art exhibitions, and much more. There's something for everyone!"
    },
    {
      question: "Are there any pre-requisites or eligibility criteria for participating in specific events?",
      answer: "Most events are open to all participants. However, some technical competitions or specialized events may require prior knowledge or skills. Detailed eligibility criteria and prerequisites are mentioned in each event's description on our website."
    },
    {
      question: "Is there any hostel facilities available?",
      answer: "Yes! We provide hostel accommodation for outstation participants on a first-come, first-served basis. Participants need to register early and book their accommodation through our official portal. Basic amenities and security will be provided."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-4 md:py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-4 md:mb-8 text-center animate-fade-in">
          FAQs
        </h1>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-left py-4 group hover:text-orange-400 transition-colors"
              >
                <span className="text-lg md:text-xl text-gray-400 group-hover:text-orange-400 pr-8 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 text-gray-600 group-hover:text-orange-400 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-orange-400' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 text-base md:text-lg leading-relaxed pb-4 pt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out backwards;
        }
      `}</style>
    </div>
  );
};

export default Faq;