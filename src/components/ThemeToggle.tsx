import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/30 hover:border-border/60 transition-all duration-500 group shadow-lg hover:shadow-xl overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Morphing background */}
      {/* <div className={cn(
        "absolute inset-0 transition-all duration-500",
        isDark 
          ? "bg-gradient-to-br from-slate-800 to-purple-900" 
          : "bg-gradient-to-br from-amber-100 to-orange-200"
      )} /> */}

       {/* Icon container */}
       <div className="relative w-5 h-5 md:w-6 md:h-6 mx-auto z-10">
        {/* Sun */}
        <div className={cn(
          "absolute inset-0 transition-all duration-500 transform",
          isDark 
            ? "opacity-0 scale-75 rotate-180" 
            : "opacity-100 scale-100 rotate-0"
        )}>
          <Sun className="w-full h-full text-amber-600 drop-shadow-sm" />
        </div>
        
        {/* Moon */}
        <div className={cn(
          "absolute inset-0 transition-all duration-500 transform",
          isDark 
            ? "opacity-100 scale-100 rotate-0" 
            : "opacity-0 scale-75 -rotate-180"
        )}>
          <Moon className="w-full h-full text-slate-200 drop-shadow-sm" />
        </div>
      </div>
    </button>
  );
};