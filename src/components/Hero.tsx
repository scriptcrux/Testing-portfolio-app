import { ArrowRight, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  const navigate = useNavigate();

  const goToSection = (id: string, filter = 'All') => {
    navigate(`/?filter=${encodeURIComponent(filter)}`, { replace: false });
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 140);
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side: intro + CTAs */}
        <div>
          {/* Intro tagline */}
          <p className="text-indigo-600 font-medium mb-3">👋 Hi, I’m Aman— Senior SDET & Automation Architect</p>

          {/* Main headline */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Transform Your QA with <span className="text-indigo-600">Efficient Automation</span>
          </h1>

          {/* Supporting text */}
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Unlock faster development cycles and higher software quality with tailored automation frameworks. I help
            teams streamline testing, eliminate bottlenecks, and ensure reliable, bug-free releases every time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => goToSection('contact')}
              className="flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button
              onClick={() => goToSection('portfolio')}
              className="flex items-center border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            >
              View Portfolio
            </button>

            <a
              href="ttps://github.com/scriptcrux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </div>

          {/* Quick stats - more spacing */}
          <div className="flex gap-12">
            <div>
              <p className="text-3xl font-bold text-indigo-600">100+</p>
              <p className="text-sm text-gray-600">Test Cases Automated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">5+</p>
              <p className="text-sm text-gray-600">Frameworks Mastered</p>
            </div>
          </div>
        </div>

        {/* Right side: cleaner visual */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="w-full max-w-md lg:max-w-lg">
            <div className=" flex items-center justify-center  font-semibold text-xl">
              <motion.img
                src="/temp/Innovation-amico.svg"
                alt="QA Automation Illustration"
                className="w-full max-w-sm"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
