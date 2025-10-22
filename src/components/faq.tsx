'use client';

import { useState } from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQAccordion = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
const words = [
    {
      text: "Frequently",
    },
    {
      text: "Asked",
    },
       {
      text: "Questions",
      className: "text-[#ccac00] dark:text-[#ccac00]",
    }, 
  ];
const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How can I submit a request?',
    answer:
      'Submitting a request is simple and quick.<br/><br/>Just head over to our “Contact Us” page and complete the form with your details and a brief description of what you need.<br/><br/>Once your message is received, our support or project team will review your request carefully and get back to you with the next steps.<br/><br/>We usually respond within 24 to 48 hours, depending on the nature of your inquiry.<br/><br/>Whether you’re looking for a custom service, have a technical question, or want to collaborate, we make sure every request is handled with attention and care.'
  },
  {
    id: 2,
    question: 'What services do you offer?',
    answer:
      'We provide a complete range of digital solutions designed to help your business grow and stand out online.<br/><br/>Our main services include branding and design, web and mobile development, UI/UX design, e-commerce solutions, and database & API integration.<br/><br/>We also offer SEO optimization, hosting setup, and maintenance support to ensure your website runs smoothly after launch.<br/><br/>Whether you need a simple landing page, a custom web application, or a full-scale digital platform, our team tailors every solution to your goals and audience.'
  },
  {
    id: 3,
    question: 'How does your development process work?',
    answer:
      'Our process is structured yet flexible, ensuring smooth collaboration and quality results.<br/><br/>It starts with understanding your idea—we discuss your goals, target users, and key features.<br/><br/>Next, we move into design and prototyping, where you’ll see a visual concept of your project.<br/><br/>Once approved, our developers begin the coding phase, building both the frontend and backend with clean, scalable code.<br/><br/>After development, we handle testing and quality assurance to make sure everything works perfectly on all devices.<br/><br/>Finally, we launch your project and provide ongoing support to ensure long-term success.'
  },
  {
    id: 4,
    question: 'How much does a typical project cost?',
    answer:
      'The cost of a project varies depending on its scope, features, and level of customization.<br/><br/>We provide flexible pricing tailored to your budget and goals.<br/><br/>Before starting, we’ll discuss your needs in detail and send you a clear, transparent quote—no hidden fees, ever.<br/><br/>Our goal is to provide real value: a high-performing website or app that helps you achieve measurable results.<br/><br/>Whether you’re a startup or an established business, we can adjust our packages to match your vision and budget.'
  },
  {
    id: 5,
    question: 'Will my website be mobile-friendly and SEO-optimized?',
    answer:
      'Absolutely. Every website we build is fully responsive, meaning it looks and performs perfectly on any device—desktop, tablet, or mobile.<br/><br/>We follow the latest best practices in responsive design and optimization to ensure a smooth user experience.<br/><br/>In addition, we apply basic on-page SEO setup (meta tags, titles, structure, and speed optimization) to help your site perform well in search engines from day one.<br/><br/>If you need more advanced SEO or marketing services, we can provide that too as part of a long-term growth strategy.'
  },
  {
    id: 6,
    question: 'Do you provide support after the project is completed?',
    answer:
      'Yes, we do.<br/><br/>Once your website or app is launched, our relationship doesn’t end there.<br/><br/>We offer post-launch maintenance and support, which includes monitoring performance, fixing bugs, updating plugins, and ensuring everything stays secure and up to date.<br/><br/>Depending on your needs, we can also provide monthly support plans that cover ongoing improvements, new feature development, and technical assistance.<br/><br/>Our goal is to ensure your project continues to perform at its best long after delivery.'
  },
  {
    id: 7,
    question: 'What makes your agency different from others?',
    answer:
      'We combine technical expertise, creative vision, and genuine collaboration.<br/><br/>Our team doesn’t just build websites we build solutions that represent your brand, attract your audience, and drive real results.<br/><br/>We listen carefully to your goals, communicate transparently throughout the process, and focus on delivering quality that reflects your values.<br/><br/>Whether it’s a new startup or a large-scale project, we treat every client as a partner and every project as a shared success.'
  }
];


  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#4c0000] flex justify-center items-center pb-40">
      <div className="max-w-7xl w-full">
        {/* Header */}
<div className='py-8 lg:py-16'>
      <TypewriterEffectSmooth words={words} />
</div>


        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 animate-fade-in-up"
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Question */}
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center cursor-pointer relative overflow-hidden"
                onClick={() => toggleItem(item.id)}
              >
                {/* Gradient left border */}
                <div 
                  className={`absolute left-0 top-0 h-full w-1 bg-[#ccac00] transition-transform duration-300 ${
                    activeItem === item.id ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />
                
                <h3 className=" text-lg md:text-xl lg:text-2xl font-medium text-white pr-4 flex-1 font-roboto">
                  {item.question}
                </h3>
                
                {/* Icon */}
                <div className={`
                  w-10 h-10 rounded-full bg-[#ccac00] 
                  flex items-center justify-center transition-transform duration-300 flex-shrink-0
                  ${activeItem === item.id ? 'rotate-180' : ''}
                `}>
                  <div className="relative w-8 h-8">
                    <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-black -translate-x-1/2 -translate-y-1/2" />
                    <div 
                      className={`
                        absolute top-1/2 left-1/2 w-0.5 h-3 bg-black -translate-x-1/2 -translate-y-1/2 
                        transition-transform duration-300
                        ${activeItem === item.id ? 'rotate-90' : ''}
                      `}
                    />
                  </div>
                </div>
              </button>
<hr className='border-[#ccac00]'/>
              {/* Answer */}
              <div 
                className={`
                  overflow-hidden transition-all duration-400 bg-[#000035]
                  ${activeItem === item.id ? 'max-h-[600px]' : 'max-h-0'}
                `}
              >
                <div className="px-6 py-6 text-white leading-relaxed md:text-lg">
                 <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default FAQAccordion;