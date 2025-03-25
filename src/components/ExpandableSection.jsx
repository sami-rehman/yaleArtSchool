import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function ExpandableSection({ title, children, isOpen, onToggle }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={onToggle}
            >
                <h2 className="text-xl font-semibold">{title}</h2>
                <ChevronDownIcon
                    className={`h-6 w-6 transform transition-transform ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {isOpen && (
                <div className="px-6 py-4 border-t border-gray-100">
                    {children}
                </div>
            )}
        </div>
    )
}