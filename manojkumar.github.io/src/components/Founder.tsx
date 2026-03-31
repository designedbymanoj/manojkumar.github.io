import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';

export function Founder() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-aura-green/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet the Founder</h2>
              <div className="text-aura-green font-medium mb-6">UI/UX Designer & Developer</div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                "With over 4 years of experience in UI/UX design and full-stack development, I started Aura Soft to bridge the gap between beautiful design and robust engineering. We don't just build apps; we craft digital experiences that help startups succeed."
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-aura-green/20 dark:hover:bg-aura-green/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-aura-green/20 dark:hover:bg-aura-green/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-[#111714] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                  alt="Founder of Aura Soft" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
