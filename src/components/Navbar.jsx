// components/Navbar.js
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'header', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black bg-opacity-90 py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">Shreyas<span className="text-pink-500"></span></div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className="text-gray-300 hover:text-pink-500 transition duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="fas fa-times text-pink-500"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 py-4 px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className="block py-2 text-gray-300 hover:text-pink-500 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;