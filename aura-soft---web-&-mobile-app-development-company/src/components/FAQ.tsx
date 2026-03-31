import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build an app?',
    answer: 'The timeline depends on the complexity of the project. A simple MVP can take 4-6 weeks, while a complex enterprise application might take 3-6 months. We provide a detailed timeline during the discovery phase.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your app remains secure, up-to-date, and performs optimally as your user base grows.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We specialize in modern tech stacks including React, Next.js, Node.js, React Native, and Flutter. We choose the best technology based on your specific project requirements.',
  },
  {
    question: 'How much does a custom app cost?',
    answer: 'Costs vary widely based on features, platform, and complexity. We offer transparent pricing and can work within startup budgets to deliver the most critical features first (MVP approach).',
  },
  {
    question: 'Will I own the source code?',
    answer: 'Absolutely. Once the project is completed and paid in full, you own 100% of the intellectual property and source code.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-[#0B0F0C]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Everything you need to know about working with Aura Soft.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#111714]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-aura-green transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
