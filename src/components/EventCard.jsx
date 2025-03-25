import { MapPinIcon } from '@heroicons/react/24/outline'

export default function EventCard({ event }) {
    return (
        <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {event.date}
                </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 line-clamp-2 mb-4">{event.description}</p>
            <div className="flex items-center text-gray-500">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
            </div>
        </div>
    )
}