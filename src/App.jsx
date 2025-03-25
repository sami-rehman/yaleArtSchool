
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { XMarkIcon, MapIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const publicArtLocations = [
  {
    id: 1,
    name: 'The Hanging Gardens of New Haven',
    position: [41.3083, -72.9279],
    description: 'Interactive community garden installation',
    year: 2023
  }
];

export default function App() {
  const [isWikiOpen, setIsWikiOpen] = useState(true);
  const [editMode, setEditMode] = useState(false);
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
    },
    {
      id: 3,
      date: 'Mar 28',
      title: 'Graphic Design Thesis Presentations',
      time: '10:00 AM - 12:00 PM EDT',
      location: 'Green Hall Gallery',
      description: 'Final thesis presentations from 2nd year MFA candidates'
    },
    {
      id: 4,
      date: 'Apr 2',
      title: 'Painting/Printmaking Open Critique',
      time: '2:00 PM - 5:00 PM EDT',
      location: '353 Crown Street Studios',
      description: 'Faculty-led critique session open to all art students'
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
    },
    {
      id: 3,
      type: 'Workshop',
      title: 'Portfolio Building Intensive',
      date: 'April 10, 2025',
      location: 'Digital Media Lab',
      content: 'Two-day workshop on creating effective artist portfolios'
    },
    {
      id: 4,
      type: 'Lecture',
      title: 'Contemporary Art Lecture Series',
      date: 'Weekly starting April 1',
      location: 'Lecture Hall B',
      content: 'Guest lectures from leading curators and art historians'
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
                <button className="font-medium hover:text-yellow-900">
                  edit content
                </button>
                .
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Happening at SOA
            </h1>
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex items-center w-32 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              <PencilSquareIcon className="h-5 w-5 mr-2" />
              {editMode ? 'Exit Edit' : 'Edit Page'}
            </button>
          </div>
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
                      onClick={() =>
                        setExpandedEvent(
                          expandedEvent === event.id ? null : event.id
                        )
                      }
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
            <h2 className="text-2xl font-bold text-gray-900">
              Community Bulletin
            </h2>
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
                    <span className="text-sm text-gray-500">
                      {bulletin.date}
                    </span>
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
        {/* <section>
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
        </section> */}

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Public Art Map</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <MapContainer
              center={[41.3083, -72.9279]}
              zoom={13}
              scrollWheelZoom={false}
              className="h-96 w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {publicArtLocations.map((art) => (
                <Marker key={art.id} position={art.position}>
                  <Popup>
                    <div className="space-y-2">
                      <h3 className="font-semibold">{art.name}</h3>
                      <p className="text-sm">{art.description}</p>
                      <p className="text-xs text-gray-500">Installed: {art.year}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Explore New Haven's public art installations through our interactive map
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <MapIcon className="h-5 w-5 mr-2" />
                  View Full Map
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                  Contribute Artwork
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
