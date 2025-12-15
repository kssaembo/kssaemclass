import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-90 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
};

export default ThemeToggle;