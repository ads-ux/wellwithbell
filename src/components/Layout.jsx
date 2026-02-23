import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menopause Weight Loss', path: '/menopause-weight-loss' },
    { name: 'Hormone Support', path: '/hormone-support' },
    { name: 'Energy & Sleep', path: '/energy-sleep' },
    { name: 'Skin & Beauty', path: '/skin-beauty' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="container nav-container">
          <Link to="/" className="logo">Well With Bell</Link>
          
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>Well With Bell</h3>
            <p>Simple, research-informed wellness guidance for women navigating perimenopause and menopause.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-optin">
            <h4>Join Our Newsletter</h4>
            <p>Get the latest wellness tips and recipes.</p>
            <form className="optin-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom container">
          <p className="affiliate-disclosure">
            Affiliate Disclosure: Some links on this site may be affiliate links. I may earn a small commission if you purchase through them, at no extra cost to you.
          </p>
          <p className="copyright">&copy; 2025 Well With Bell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
