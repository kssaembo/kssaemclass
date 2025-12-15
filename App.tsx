import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import ThemeToggle from './components/ThemeToggle';
import { SERVICES } from './constants';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    // Check localStorage first
    if ('theme' in localStorage) {
      setIsDark(localStorage.theme === 'dark');
    } else {
      // Default to light if no preference (or follow system)
      // The user requested "Bright series" capability, but let's default to dark 
      // if that was the original vibe, OR default to light if they prefer.
      // Let's match system preference for the first load.
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPrefersDark);
    }
  }, []);

  // Apply theme class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-200 dark:selection:bg-lab-accent/30 selection:text-slate-900 dark:selection:text-white flex flex-col transition-colors duration-300">
      
      {/* Theme Toggle Button */}
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

      {/* Header/Hero Section */}
      <Hero />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-6 z-10">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} item={service} />
          ))}
        </div>

        {/* Bottom Call to Action / Info */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm">
            더 많은 서비스가 계속 추가될 예정입니다.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;