import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0B0F0C] border-t border-gray-200 dark:border-white/10 pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-aura-green flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Aura Soft</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-8">
              Building scalable, premium, and high-converting digital products for startups and visionary brands worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors">Web App Development</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors">Custom Software</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#portfolio" className="text-gray-600 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors">Portfolio</a></li>
              <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors">Our Process</a></li>
              <li><a href="#faq" className="text-gray-600 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-white/10">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Aura Soft. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors flex items-center gap-1 text-sm">
              Twitter <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors flex items-center gap-1 text-sm">
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-aura-green dark:hover:text-aura-green transition-colors flex items-center gap-1 text-sm">
              Dribbble <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
