import { motion } from 'motion/react';
import { Globe, Smartphone, Layout, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web App Development',
    description: 'Custom, scalable, and secure web applications built with modern frameworks like React, Next.js, and Node.js.',
    icon: Globe,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design Services',
    description: 'User-centric design solutions that combine aesthetics with intuitive functionality to boost engagement.',
    icon: Layout,
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to solve your specific business challenges and drive growth.',
    icon: Cpu,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#0B0F0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            We provide end-to-end software development services to help you build, launch, and scale your digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white dark:bg-[#111714] border border-gray-200 dark:border-white/5 hover:border-aura-green/50 dark:hover:border-aura-green/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aura-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-aura-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
