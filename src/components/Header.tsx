// src/components/Header.tsx
import React from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const goToSection = (id: string) => {
    closeMenu();

    // If we're already on home page, scroll directly
    if (location.pathname === '/' || location.pathname === '') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Otherwise navigate to home, then scroll after a tiny delay
    navigate('/', { replace: false });
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120); // adjust if needed for your render timing
  };

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
            <button
              onClick={() => goToSection('services')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => goToSection('technologies')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Technologies
            </button>

            <button
              onClick={() => goToSection('experience')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Experience
            </button>

            <button
              onClick={() => goToSection('portfolio')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Portfolio
            </button>

            <button
              onClick={() => goToSection('contact')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button aria-label="Toggle menu" className="mr-2" onClick={() => setIsMenuOpen((s) => !s)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => goToSection('services')}
                className="text-gray-600 hover:text-indigo-600 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => goToSection('technologies')}
                className="text-gray-600 hover:text-indigo-600 transition-colors text-left"
              >
                Technologies
              </button>
              <button
                onClick={() => goToSection('experience')}
                className="text-gray-600 hover:text-indigo-600 transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => goToSection('portfolio')}
                className="text-gray-600 hover:text-indigo-600 transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => goToSection('contact')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full text-center hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
