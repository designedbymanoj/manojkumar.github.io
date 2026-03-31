import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's build something <span className="text-gradient">amazing</span> together.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
              Ready to turn your idea into reality? Fill out the form or reach out directly. We'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-aura-green/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-aura-green" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email Us</div>
                  <a href="mailto:hello@aurasoft.com" className="font-bold text-lg hover:text-aura-green transition-colors">hello@aurasoft.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-aura-green/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-aura-green" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Call Us</div>
                  <a href="tel:+1234567890" className="font-bold text-lg hover:text-aura-green transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-aura-green/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-aura-green" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div className="font-bold text-lg">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold mb-6">Book a Free Consultation</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111714] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-aura-green/50 transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111714] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-aura-green/50 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111714] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-aura-green/50 transition-all"
                  placeholder="john@startup.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-300">Interested In</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111714] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-aura-green/50 transition-all appearance-none"
                >
                  <option>Web App Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>Custom Software</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111714] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-aura-green/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-aura-green text-black font-bold text-lg hover:bg-aura-green/90 transition-all flex items-center justify-center gap-2 glow-effect"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
