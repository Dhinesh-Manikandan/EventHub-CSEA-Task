import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import Navbar from '../components/Navbar';
import AddEventForm from '../components/AddEventForm';
import Toast from '../components/Toast';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    filterEvents();
  }, [events, searchTerm, selectedDomain]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterEvents = () => {
    let filtered = [...events];

    // Filter by domain
    if (selectedDomain && selectedDomain !== 'All') {
      filtered = filtered.filter(event => event.domain === selectedDomain);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleDomainFilter = (domain) => {
    if (domain === 'All') {
      setSelectedDomain(null);
    } else {
      setSelectedDomain(domain);
    }
  };

  const handleAddEvent = async (eventData) => {
    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      const newEvent = await response.json();
      setEvents(prevEvents => [...prevEvents, newEvent]);
      setShowAddForm(false);
      
      // Show success message
      setToast({ message: 'Event created successfully!', type: 'success' });
    } catch (error) {
      console.error('Error creating event:', error);
      setToast({ message: 'Failed to create event. Please try again.', type: 'error' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Events</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchEvents}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Navbar onSearch={handleSearch} onDomainFilter={handleDomainFilter} />
      
             {/* Hero Section */}
       <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-3xl md:text-4xl font-bold mb-3">
             Discover Amazing Events
           </h1>
           <p className="text-lg text-primary-100 max-w-2xl mx-auto">
             Explore tech conferences, cultural festivals, sports championships, and more. 
             Find events that match your interests and connect with like-minded people.
           </p>
         </div>
       </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Summary */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedDomain && selectedDomain !== 'All' ? `${selectedDomain} Events` : 'All Events'}
              </h2>
              <p className="text-gray-600">
                {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
                {selectedDomain && selectedDomain !== 'All' && ` in ${selectedDomain} category`}
              </p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 font-medium flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Event
            </button>
          </div>
          
          {/* Active Filters Display */}
          {(searchTerm || (selectedDomain && selectedDomain !== 'All')) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedDomain && selectedDomain !== 'All' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  Category: {selectedDomain}
                  <button
                    onClick={() => setSelectedDomain(null)}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">
              {searchTerm 
                ? `No events match your search for "${searchTerm}"`
                : selectedDomain 
                  ? `No ${selectedDomain} events available at the moment`
                  : 'No events available at the moment'
              }
            </p>

          </div>
                 )}
       </div>

       {/* Add Event Form Modal */}
       {showAddForm && (
         <AddEventForm
           onClose={() => setShowAddForm(false)}
           onSubmit={handleAddEvent}
         />
       )}

       {/* Toast Notifications */}
       {toast && (
         <Toast
           message={toast.message}
           type={toast.type}
           onClose={() => setToast(null)}
         />
       )}
     </div>
   );
 };

export default Home;
