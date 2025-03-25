import React, { useState } from 'react';
import { ChevronDownIcon, PencilSquareIcon, MapPinIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
    const [openSection, setOpenSection] = useState(0);
    const [editMode, setEditMode] = useState(false);

    const sections = [
        {
            title: 'Mission & Values',
            content: `The Yale School of Art is a graduate school that confers Master of Fine Arts degrees in 
      Graphic Design, Painting/Printmaking, Photography, and Sculpture. Artists and designers of unusual 
      promise and strong motivation are provided an educational context where they can explore their 
      talents through intense critical dialogue.`,
            subsections: [
                {
                    title: 'Land Acknowledgement',
                    content: '[Native land acknowledgement text...]'
                },
                {
                    title: 'Equity & Inclusion',
                    content: 'Commitment to sustainable equity, inclusion, and belonging...'
                }
            ]
        },
        {
            title: 'Academic Programs',
            content: `The School offers an undergraduate art major for Yale College students and MFA programs 
      for graduate students. Our courses are open to students across Yale's professional schools.`,
            subsections: [
                {
                    title: 'MFA Degree Requirements',
                    content: `- Minimum 60 credits\n- Two-year residence\n- Thesis presentation\n- Faculty reviews each term`,
                    list: true
                },
                {
                    title: 'Study Areas',
                    content: `Graphic Design\nPainting/Printmaking\nPhotography\nSculpture`
                }
            ]
        },
        {
            title: 'Public Engagement',
            content: `We host numerous public events and exhibitions throughout the year:`,
            subsections: [
                {
                    title: 'Lecture Series',
                    content: `Weekly lectures by visiting artists and faculty, free and open to the public.`
                },
                {
                    title: 'Exhibitions',
                    content: `Regular exhibitions in Green Hall and 32 Edgewood Avenue galleries.`
                }
            ]
        },
        {
            title: 'Community Resources',
            content: `Resources and support systems for our community:`,
            subsections: [
                {
                    title: 'Facilities',
                    content: `State-of-the-art studios and workshops`
                },
                {
                    title: 'Support',
                    content: `Funding opportunities and grants`
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-8">

                <div className="flex items-center justify-between">
                    <header className="mb-8 text-center flex justify-between w-full">
                        <h1 className="text-3xl font-bold text-gray-900">
                            About the School
                        </h1>

                        <button
                            onClick={() => setEditMode(!editMode)}
                            className="flex items-center bg-blue-600 w-32 text-white px-4 py-2 rounded-lg"
                        >
                            <PencilSquareIcon className="h-5 w-5 mr-2" />
                            {editMode ? 'Exit Edit' : 'Edit Page'}
                        </button>
                    </header>
                </div>

                {/* Core Information Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <AcademicCapIcon className="h-8 w-8 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Degrees Offered</h3>
                        <ul className="space-y-2 text-gray-600">
                            {['Graphic Design', 'Painting/Printmaking', 'Photography', 'Sculpture'].map((program) => (
                                <li key={program} className="flex items-center">
                                    <div className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
                                    {program}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <BookOpenIcon className="h-8 w-8 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
                        <dl className="grid grid-cols-2 gap-4 text-gray-600">
                            <FactItem term="Established" detail="1869" />
                            <FactItem term="Students" detail="~80,000 Graduate" />
                            <FactItem term="Faculty" detail="50+ Professionals" />
                            <FactItem term="Location" detail="New Haven, CT" />
                        </dl>
                    </div>
                </div>

                {/* Expandable Sections */}
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
                                <div className="flex items-center space-x-4">
                                    <h2 className="text-xl font-semibold">{section.title}</h2>
                                    {editMode && (
                                        <span className="text-sm text-gray-500 bg-yellow-100 px-2 py-1 rounded">
                                            Last edited: 03/25/2025
                                        </span>
                                    )}
                                </div>
                                <ChevronDownIcon
                                    className={`h-6 w-6 transform transition-transform ${openSection === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openSection === index && (
                                <div className="px-6 py-4 border-t border-gray-100 space-y-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {section.content}
                                    </p>

                                    {section.subsections?.map((subsection, subIndex) => (
                                        <div key={subIndex} className="ml-4 pl-4 border-l-2 border-blue-100">
                                            <h4 className="font-semibold text-lg mb-2">{subsection.title}</h4>
                                            {subsection.list ? (
                                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                                    {subsection.content.split('\n').map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-600">{subsection.content}</p>
                                            )}
                                        </div>
                                    ))}

                                    {editMode && (
                                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <button className="text-blue-600 flex items-center">
                                                <PencilSquareIcon className="h-4 w-4 mr-1" />
                                                Edit Section
                                            </button>
                                            <span className="text-sm text-gray-500">
                                                Last Edited by: Sami
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Wiki Footer */}
                <div className="mt-12 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <div>
                            <p>Page history</p>
                            <p>Last major edit: March 25, 2025 by Zeineb</p>
                        </div>
                        <button className="flex items-center text-blue-600">
                            <PencilSquareIcon className="h-4 w-4 mr-1" />
                            View Page History
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

const FactItem = ({ term, detail }) => (
    <div>
        <dt className="font-medium">{term}</dt>
        <dd className="text-gray-600">{detail}</dd>
    </div>
);

export default AboutPage;