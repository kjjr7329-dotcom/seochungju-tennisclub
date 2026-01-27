
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Join from './pages/Join';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: '홈', path: '/' },
    { name: '클럽소개', path: '/about' },
    { name: '회원현황', path: '/members' },
    { name: '가입안내', path: '/join' },
  ];

  return (
    <nav className="bg-white border-b border-gray-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-bold text-gray-900 tracking-tight">서충주신도시 <span className="text-lime-600">테니스클럽</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-lime-600 ${
                  location.pathname === item.path ? 'text-lime-600' : 'text-gray-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 p-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-6 space-y-4 text-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-900 font-bold mb-1 tracking-tight">서충주신도시테니스클럽 (CTC)</p>
      <p className="text-[10px] text-gray-300 uppercase tracking-[0.2em] mb-6">Manner Maketh Player</p>
      <p className="text-[10px] text-gray-400">© 2024 CTC. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
