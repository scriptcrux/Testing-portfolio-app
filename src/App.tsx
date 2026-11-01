// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import EngineeringPrinciples from './components/EngineeringPrinciples';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function MainContent() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-600 selection:text-white transition-colors duration-200">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Technologies />
                <Experience />
                <EngineeringPrinciples />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/projects" element={<Portfolio />} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer position="bottom-right" theme={theme === 'dark' ? 'dark' : 'light'} autoClose={3000} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <MainContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
