import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  // Domain-based background images with corrected SVGs
  const getBackgroundImage = (domain) => {
    switch (domain) {
      case 'Tech':
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiMwNmI2ZDQiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIxMjAiIHI9IjMwIiBmaWxsPSIjOGI1Y2Y2Ii8+PHBhdGggZD0iTTE1MCAxMDBMMjUwIDE4MCIgc3Ryb2tlPSIjMDZiNmQ0IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjUwIDEyMEwyMDAgMjAwIiBzdHJva2U9IiM4YjVjZjYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==';
      case 'Non-Tech':
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmQ3MDAiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMDAiIHI9IjQwIiBmaWxsPSIjZmJiYzA0Ii8+PHJlY3QgeD0iMTAwIiB5PSIxNTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzA2YjZkNCIvPjxyZWN0IHg9IjE3MCIgeT0iMTYwIiB3aWR0aD0iNTAiIGhlaWdodD0iNjAiIGZpbGw9IiNmYmE3MDAiLz48cGF0aCBkPSJNMjUwIDEyMEwyODAgMTgwIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==';
      case 'Cultural':
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmYmE3MDAiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxNTAiIHI9IjMwIiBmaWxsPSIjZmI5MjAwIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTUwIiByPSIzMCIgZmlsbD0iI2ZmY2M5OSIgc3Ryb2tlPSIjYjM2MDAwIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJNMTUwIDE4MEwyNTAgMjAwIiBzdHJva2U9IiNmYjkyMDAiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMDAgMTYwTDIwMCAyMjAiIHN0cm9rZT0iI2ZiOTIwMCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+PC9zdmc+';
      case 'Sports':
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMxNmE4MzkiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjMwIiBmaWxsPSIjMDZiNmQ0Ii8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTIwIiByPSIzMCIgZmlsbD0iIzBmYWI0MCIgc3Ryb2tlPSIjMDZiNmQ0IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTUwIDE1MEwyNTAgMTgwIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMDAgMTYwTDIwMCAyMjAiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+';
      default:
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmM2Y0ZjYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjQwIiBmaWxsPSIjOWNhM2FmIi8+PC9zdmc+';
    }
  };

  const handleClick = () => {
    navigate(`/event/${event._id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden group"
      onClick={handleClick}
    >
      {/* Background Image with Overlay */}
      <div
        className="relative h-48 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url(${getBackgroundImage(event.domain)})`,
        }}
      >
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Domain Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-gray-800 backdrop-blur-sm shadow-lg border border-white/20 font-semibold">
            {event.domain}
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {event.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

        {/* Event Details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(event.date).toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {new Date(event.date).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
