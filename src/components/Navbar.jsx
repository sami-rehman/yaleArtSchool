import { Link, useLocation } from 'react-router-dom';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const location = useLocation();
    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'About the School', path: '/about' },
        { name: 'Apply to the School', path: '/apply' },
        { name: 'Exhibitions', path: '#' },
        { name: 'Publications', path: '#' },
        { name: 'Public Events', path: '#' },
    ];

    return (
        <nav className="sticky top-0 bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto text-sm px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center space-x-6 w-full md:w-auto">
                    <h1 className="text-2xl font-bold text-gray-900">Yale School of Art</h1>
                    <div className="hidden md:flex space-x-2">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-4 py-2 font-semibold rounded-lg ${location.pathname === item.path
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}