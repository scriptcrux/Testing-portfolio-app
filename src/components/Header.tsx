import React from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Scriptcrux</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#technologies" className="text-gray-600 hover:text-indigo-600 transition-colors">Technologies</a>
            <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#technologies" className="text-gray-600 hover:text-indigo-600 transition-colors">Technologies</a>
              <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors">Experience</a>
              <a href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition-colors">Portfolio</a>
              <a href="#contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full text-center hover:bg-indigo-700 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}