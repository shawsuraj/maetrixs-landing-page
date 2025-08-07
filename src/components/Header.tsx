import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import maetrixsLogo from '@/assets/maetrixs-logo.png';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center relative">
          {/* Logo - Left side */}
          {/* <Link 
            to="/" 
            className="absolute left-0 flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
          > */}
          <button
          onClick={() => navigate(-1)}
          className="absolute left-0 flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={maetrixsLogo} 
              alt="MaetriXs Logo" 
              className="w-8 h-8 md:w-50 md:h-50 object-contain  rounded-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
              }}
            />
            <div>
              <h1 className="text-lg font-bold gradient-text">MaetriXs</h1>
            </div>
          </button>
          {/* </Link> */}
          
          {/* Title - Center */}
          <div className="text-center max-w-xs">
            <h2 className="text-lg font-semibold text-foreground truncate">{title}</h2>
            {subtitle && (
              <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};