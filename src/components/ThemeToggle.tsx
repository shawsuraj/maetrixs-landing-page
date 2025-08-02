import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/30 hover:border-border/60 transition-all duration-300 group shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 mx-auto">
        <div className={`absolute inset-0 transition-all duration-300 ${
          isDark ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
        }`}>
          <Sun className="w-6 h-6 text-amber-500" />
        </div>
        <div className={`absolute inset-0 transition-all duration-300 ${
          isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <Moon className="w-6 h-6 text-slate-300" />
        </div>
      </div>
    </button>
  );
};