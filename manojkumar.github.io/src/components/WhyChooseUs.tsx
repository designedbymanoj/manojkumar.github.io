import { motion } from 'motion/react';
import { Zap, Shield, Rocket, Users } from 'lucide-react';

const benefits = [
  {
    title: 'Fast Delivery',
    description: 'We use agile methodologies to ensure rapid development cycles without compromising on quality.',
    icon: Zap,
  },
  {
    title: 'Startup-Friendly Pricing',
    description: 'Transparent and flexible pricing models designed to fit startup budgets and scale as you grow.',
    icon: Rocket,
  },
  {
    title: 'Scalable Solutions',
    description: 'Architecture designed for growth. We build systems that can handle your success.',
    icon: Shield,
  },
  {
    title: 'Dedicated Team',
    description: 'Work directly with experienced developers and designers who care about your product.',
    icon: Users,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why startups choose <span className="text-gradient">Aura Soft</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              We understand the unique challenges startups face. Our approach combines technical excellence with business acumen to deliver products that actually move the needle.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aura-green/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-aura-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team collaboration" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <div className="text-3xl font-bold text-white mb-1">99%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-aura-green/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
