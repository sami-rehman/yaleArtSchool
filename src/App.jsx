// App.jsx
import React, { useState } from 'react';
import { XMarkIcon, MapIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import Navbar from './components/Navbar';

export default function App() {
  const [isWikiOpen, setIsWikiOpen] = useState(true);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    {
      id: 1,
      date: 'Mar 25',
      title: '2025 Open Studios',
      time: 'Apr 5th 12:00 PM - Apr 6th 6:00 PM',
      location: '1156 Chapel Street & 36 Edgewood Avenue',
      description: 'Pre-registration encouraged with day-of registration available'
    },
    {
      id: 2,
      date: 'Mar 25',
      title: 'MFA Crits in Photography',
      time: '3:00 PM - 7:00 PM EDT',
      location: '1156 Chapel Street',
      description: 'Photo critiques open to the SoA community during Spring 2025 semester'
    }
  ];

  const bulletins = [
    {
      id: 1,
      type: 'Exhibition',
      title: 'Ballast - Sculpture MFA Thesis',
      date: 'March 25 - April 2, 2025',
      location: '1156 Chapel Street',
      content: 'Public reception Friday, March 28th from 6-8PM'
    },
    {
      id: 2,
      type: 'Opportunity',
      title: 'Environmental Justice Art Show',
      date: 'Submission Deadline: April 15, 2025',
      location: 'Yale Center for Environmental Justice',
      content: 'Seeking artists for Global Environmental Justice Conference exhibition'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Wiki Notice Banner */}
      {isWikiOpen && (
        <div className="bg-yellow-50 border-b border-yellow-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <PencilSquareIcon className="h-5 w-5 text-yellow-700" />
              <p className="text-sm text-yellow-800">
                This website is a collaborative wiki. Community members can{' '}
                <button className="font-medium hover:text-yellow-900">edit content</button>.
              </p>
            </div>
            <button
              onClick={() => setIsWikiOpen(false)}
              className="text-yellow-700 hover:text-yellow-900"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Happening at SOA Section */}
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Happening at SOA</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {event.date}
                    </div>
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                    >
                      {expandedEvent === event.id ? '−' : '+'}
                    </button>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                  {expandedEvent === event.id && (
                    <div className="space-y-2 mt-4">
                      <p className="text-gray-600">{event.description}</p>
                      <div className="text-sm text-gray-500">
                        <p>{event.time}</p>
                        <p>{event.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Bulletin Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Community Bulletin</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
              <PencilSquareIcon className="h-5 w-5 mr-2" />
              New Post
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm">
            {bulletins.map((bulletin) => (
              <div key={bulletin.id} className="p-6 border-b last:border-b-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm">
                      {bulletin.type}
                    </span>
                    <span className="text-sm text-gray-500">{bulletin.date}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{bulletin.title}</h3>
                <p className="text-gray-600 mb-3">{bulletin.content}</p>
                <div className="text-sm text-gray-500 flex items-center space-x-2">
                  <MapIcon className="h-4 w-4" />
                  <span>{bulletin.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Public Art Map Section */}
        <section>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video bg-gray-100 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Mapping Public Art in New Haven
                </h2>
                <p className="text-gray-200 mb-4">
                  Explore and contribute to our collaborative public art map
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 flex items-center">
                    <MapIcon className="h-5 w-5 mr-2" />
                    View Map
                  </button>
                  <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white/10">
                    Contribute
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                1156 Chapel Street<br />
                New Haven, CT 06510
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Calendars</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Public Events</a></li>
                <li><a href="#" className="hover:text-blue-400">Community Calendar</a></li>
                <li><a href="#" className="hover:text-blue-400">Exhibitions</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>Yale School of Art © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}