import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/events/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Event not found');
        }
        throw new Error('Failed to fetch event details');
      }
      const data = await response.json();
      setEvent(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching event details:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getDomainColor = (domain) => {
    const colors = {
      'Tech': 'bg-blue-100 text-blue-800',
      'Non-Tech': 'bg-green-100 text-green-800',
      'Cultural': 'bg-purple-100 text-purple-800',
      'Sports': 'bg-orange-100 text-orange-800'
    };
    return colors[domain] || 'bg-gray-100 text-gray-800';
  };

  const handleBackToEvents = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Event</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="space-x-4">
            <button
              onClick={fetchEventDetails}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Try Again
            </button>
            <button
              onClick={handleBackToEvents}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Back to Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBackToEvents}
            className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Events
          </button>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Event Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {/* Event Image Placeholder */}
          <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 text-primary-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-primary-600 font-medium text-lg">Event</p>
            </div>
          </div>

          {/* Event Info */}
          <div className="p-8">
            {/* Domain Badge */}
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${getDomainColor(event.domain)}`}>
              {event.domain}
            </span>

            {/* Event Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {event.name}
            </h1>

            {/* Event Date */}
            <div className="flex items-center text-gray-600 mb-6">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-lg">{formatDate(event.date)}</span>
            </div>

            {/* Event Description */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Event</h3>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default EventDetails;
