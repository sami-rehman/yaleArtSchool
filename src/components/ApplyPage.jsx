import React, { useState } from 'react';
import { ChevronDownIcon, DocumentArrowDownIcon, AcademicCapIcon, CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';

const ApplyPage = () => {
    const [openSection, setOpenSection] = useState(null);

    const sections = [
        {
            title: '2026 MFA Application Overview',
            icon: <AcademicCapIcon className="h-6 w-6 mr-3" />,
            content: (
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">⏳ Important Dates</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Application Opens: October 1, 2025</li>
                            <li>Deadline: January 8, 2026 (11:59pm EST)</li>
                            <li>Interviews: February 15-28, 2026</li>
                            <li>Decisions Released: March 5, 2026</li>
                        </ul>
                    </div>

                    <h3 className="text-xl font-semibold mt-6">Admission Requirements</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {['Online Application', '$100 Fee', 'Personal Statement', '3 Recommendations',
                            'Transcripts', 'Portfolio'].map((item, i) => (
                                <div key={i} className="flex items-center bg-gray-50 p-4 rounded-lg">
                                    <div className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
                                    {item}
                                </div>
                            ))}
                    </div>
                </div>
            )
        },
        {
            title: 'Portfolio Guidelines',
            icon: <DocumentArrowDownIcon className="h-6 w-6 mr-3" />,
            content: (
                <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">📌 Key Requirements</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>15-20 recent works (last 2 years)</li>
                            <li>Include 1 representative work</li>
                            <li>No composite images</li>
                            <li>Format: Digital (JPEG/PNG) or Physical</li>
                        </ul>
                    </div>

                    <h4 className="text-lg font-semibold mt-4">Department Specifics</h4>
                    <div className="space-y-3">
                        {['Graphic Design: Include thesis proposal',
                            'Painting/Printmaking: Reference work in statement',
                            'Photography: Lens-based focus',
                            'Sculpture: 3D documentation'].map((item, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="h-1.5 w-1.5 bg-gray-600 rounded-full mr-3" />
                                    {item}
                                </div>
                            ))}
                    </div>
                </div>
            )
        },
        {
            title: 'Financial Aid & Funding',
            icon: <CurrencyDollarIcon className="h-6 w-6 mr-3" />,
            content: (
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: 'Scholarships',
                            content: 'Need-based awards covering up to full tuition',
                            color: 'bg-green-50'
                        },
                        {
                            title: 'Federal Loans',
                            content: 'Direct Unsubsidized ($20,500/yr) and Grad PLUS',
                            color: 'bg-blue-50'
                        },
                        {
                            title: 'Work-Study',
                            content: '$14.25/hr positions within the School',
                            color: 'bg-purple-50'
                        },
                        {
                            title: 'Teaching Assistants',
                            content: 'Second-year positions ($5,000/term)',
                            color: 'bg-orange-50'
                        }
                    ].map((item, i) => (
                        <div key={i} className={`p-4 rounded-lg ${item.color}`}>
                            <h4 className="font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: 'International Applicants',
            icon: <GlobeAmericasIcon className="h-6 w-6 mr-3" />,
            content: (
                <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800">English Proficiency Requirements</h4>
                        <div className="grid md:grid-cols-3 gap-4 mt-3">
                            {[
                                { test: 'TOEFL iBT', score: '100+' },
                                { test: 'IELTS', score: '7.0+' },
                                { test: 'Duolingo', score: '120+' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-3 rounded">
                                    <div className="font-medium">{item.test}</div>
                                    <div className="text-gray-600">{item.score}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h4 className="text-lg font-semibold mt-4">Additional Requirements</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Passport name consistency</li>
                        <li>Degree equivalency verification</li>
                        <li>Visa documentation (post-admission)</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply to Yale School of Art</h1>
                <div className="bg-blue-100 p-4 rounded-lg inline-block">
                    <p className="text-blue-800 font-medium">
                        ⚠️ Fall 2026 Application Opens: October 1, 2025
                    </p>
                </div>
            </header>

            <main className="space-y-8">
                {/* Application Process Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">Application Process</h2>
                    <div className="space-y-4">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-gray-100"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                                    onClick={() => setOpenSection(openSection === index ? null : index)}
                                >
                                    <div className="flex items-center">
                                        {section.icon}
                                        <h3 className="text-xl font-semibold">{section.title}</h3>
                                    </div>
                                    <ChevronDownIcon
                                        className={`h-6 w-6 transform transition-transform ${openSection === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {openSection === index && (
                                    <div className="px-6 py-4 border-t border-gray-100">
                                        {section.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Program Brochures */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">Program Materials</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: '2025-2026 Bulletin', year: '2025' },
                            { title: 'MFA Program Guide', year: '2026' },
                            { title: 'Financial Aid Handbook', year: '2025' },
                            { title: 'International Student Guide', year: '2026' }
                        ].map((doc, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{doc.title}</h3>
                                        <p className="text-gray-600">Published {doc.year}</p>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                                        <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-gray-50 p-8 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2">Admissions Office</h3>
                            <p className="text-gray-600">
                                📧 art.admissions@yale.edu<br />
                                📞 (203) 432-2600
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Financial Aid</h3>
                            <p className="text-gray-600">
                                📧 nicole.archer@yale.edu<br />
                                📞 (203) 432-2297
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ApplyPage;