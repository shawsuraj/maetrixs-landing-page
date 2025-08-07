import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  X, 
  Instagram, 
  Linkedin, 
  Mail,
  ExternalLink,
  Heart
} from 'lucide-react';
import maetrixsLogo from '@/assets/maetrixs-logo.png';

const socialLinks = [
  {
    name: "X",
    icon: X,
    href: "https://x.com/materixs",
    color: "hover:text-blue-400"
  },
  {
    name: "Instagram", 
    icon: Instagram,
    href: "https://instagram.com/maetrixs.app",
    color: "hover:text-pink-400"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/maetrixs",
    color: "hover:text-blue-500"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:founder@maetrixs.com",
    color: "hover:text-neon-blue"
  }
];

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Roadmap", href: "#" }
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" }
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API", href: "#" },
    { name: "Support", href: "#" },
    { name: "Community", href: "#" }
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
    { name: "Cookies", href: "#" }
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-matrix-dark border-t border-matrix-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={maetrixsLogo} 
                alt="MaetriXs Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold gradient-text">MaetriXs</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              The social fitness tracker for real-life connections. 
              Turn every interaction into progress toward better relationships.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={`bg-matrix-surface border border-matrix-border hover:bg-matrix-border/20 ${social.color} transition-colors duration-300`}
                  asChild
                >
                  <a href={social.href} aria-label={social.name}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="card-elevated border-matrix-border p-6">
              <h3 className="font-semibold text-foreground mb-3">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest updates on MaetriXs development and launch.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-matrix-dark border border-matrix-border rounded-md text-foreground placeholder-muted-foreground focus:border-neon-blue focus:outline-none"
                />
                <Button size="sm" className="bg-gradient-primary hover:shadow-elevation">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-foreground mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center group"
                      >
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-matrix-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© 2025 MaetriXs. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for better connections.</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Status: Building 🚧</span>
              <span>Launch: Q4 2025</span>
              <span>Version: Beta</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};