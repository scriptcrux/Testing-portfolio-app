import { ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your QA with <span className="text-indigo-600">Efficient Automation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Unlock faster development cycles and higher software quality with tailored automation solutions. I help
            teams streamline their testing, eliminate bottlenecks, and ensure reliable, bug-free releases every time.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#portfolio"
              className="flex items-center border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="https://github.com/scriptcrux" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-gray-800 text-gray-800 px-4 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
