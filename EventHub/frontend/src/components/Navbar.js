import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ onSearch, onDomainFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const domains = ['All', 'Tech', 'Non-Tech', 'Cultural', 'Sports'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleDomainChange = (domain) => {
    setSelectedDomain(domain);
    setIsDropdownOpen(false);
    if (onDomainFilter) {
      onDomainFilter(domain);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    setSearchTerm('');
    setSelectedDomain('All');
    if (onSearch) onSearch('');
    if (onDomainFilter) onDomainFilter('All');
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="flex-shrink-0 flex items-center space-x-3">
              {/* Custom EventHub Logo Icon */}
              <div className="relative">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  className="flex-shrink-0"
                >
                  {/* Calendar Background */}
                  <rect 
                    x="4" 
                    y="8" 
                    width="32" 
                    height="28" 
                    rx="4" 
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                  
                  {/* Calendar Top Tabs */}
                  <rect x="8" y="4" width="8" height="6" rx="3" fill="url(#gradient1)" />
                  <rect x="24" y="4" width="8" height="6" rx="3" fill="url(#gradient1)" />
                  
                  {/* Hub Network Symbol */}
                  <circle cx="20" cy="22" r="2" fill="url(#gradient2)" />
                  <circle cx="16" cy="18" r="1.5" fill="url(#gradient2)" />
                  <circle cx="24" cy="18" r="1.5" fill="url(#gradient2)" />
                  <circle cx="16" cy="26" r="1.5" fill="url(#gradient2)" />
                  <circle cx="24" cy="26" r="1.5" fill="url(#gradient2)" />
                  
                  {/* Connection Lines */}
                  <line x1="16" y1="18" x2="20" y2="22" stroke="url(#gradient2)" strokeWidth="1.5" />
                  <line x1="24" y1="18" x2="20" y2="22" stroke="url(#gradient2)" strokeWidth="1.5" />
                  <line x1="16" y1="26" x2="20" y2="22" stroke="url(#gradient2)" strokeWidth="1.5" />
                  <line x1="24" y1="26" x2="20" y2="22" stroke="url(#gradient2)" strokeWidth="1.5" />
                  
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Logo Text */}
              <h1 className="text-2xl font-bold text-gray-900">
                EventHub
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute inset-y-0 left-0 pl-3 flex items-center"
              >
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Domain Filter Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
            >
              {selectedDomain}
              <svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                {domains.map((domain) => (
                  <button
                    key={domain}
                    onClick={() => handleDomainChange(domain)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150 ${
                      selectedDomain === domain ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                    }`}
                  >
                    {domain}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
