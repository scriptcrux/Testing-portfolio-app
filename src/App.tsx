// src/App.tsx (outer layout)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* flex column fills the screen */}
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        {/* main grows so footer stays at bottom when content is short */}
        <main className="flex-1 pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Technologies />
                  <Experience />
                  <Portfolio />
                  <Contact />
                </>
              }
            />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/projects" element={<Portfolio />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>© {new Date().getFullYear()} Scriptcrux. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
