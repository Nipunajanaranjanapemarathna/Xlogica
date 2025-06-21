import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Beaker, Briefcase } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (path: string) => location.pathname.startsWith(path);

  const dropdowns = {
    edu: [
      { name: 'Overview', path: '/edu', icon: Brain },
      { name: 'Courses', path: '/edu/courses', icon: Brain },
      { name: 'Projects', path: '/edu/projects', icon: Brain },
      { name: 'Mentors', path: '/edu/mentors', icon: Brain },
      { name: 'FAQ', path: '/edu/faq', icon: Brain },
    ],
    research: [
      { name: 'Overview', path: '/research', icon: Beaker },
      { name: 'Projects & Publications', path: '/research/projects', icon: Beaker },
      { name: 'Collaborate', path: '/research/collaborate', icon: Beaker },
    ],
    it: [
      { name: 'Overview', path: '/it-solutions', icon: Briefcase },
      { name: 'Products & Services', path: '/it-solutions/products', icon: Briefcase },
    ],
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 mt-4">
              <img src="src/Assets/XLogica__1.png" alt="Description" width="200" />
              {/* <Brain className="h-8 w-8 text-blue-700" /> */}
              {/* <span className="font-bold text-xl text-gray-900">Xlogica</span> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                About
              </Link>

              {/* EDU Dropdown */}
              <div className="relative">
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors ${
                    isParentActive('/edu') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700'
                  }`}
                  onMouseEnter={() => setActiveDropdown('edu')}
                >
                  <span>EDU</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'edu' && (
                  <div
                    className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1">
                      {dropdowns.edu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Research Dropdown */}
              <div className="relative">
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors ${
                    isParentActive('/research') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700'
                  }`}
                  onMouseEnter={() => setActiveDropdown('research')}
                >
                  <span>Research Park</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'research' && (
                  <div
                    className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1">
                      {dropdowns.research.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Solutions Dropdown */}
              <div className="relative">
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors ${
                    isParentActive('/it-solutions') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700'
                  }`}
                  onMouseEnter={() => setActiveDropdown('it')}
                >
                  <span>IT Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'it' && (
                  <div
                    className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1">
                      {dropdowns.it.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blog') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              About
            </Link>
            <Link to="/edu" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              EDU
            </Link>
            <Link to="/research" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Research Park
            </Link>
            <Link to="/it-solutions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              IT Solutions
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Blog
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;