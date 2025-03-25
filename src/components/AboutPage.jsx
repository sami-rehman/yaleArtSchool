// import React, { useState } from 'react';
// import { ChevronDownIcon, PencilSquareIcon, MapPinIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';
// import Navbar from './Navbar';

// const AboutPage = () => {
//     const [openSection, setOpenSection] = useState(0);
//     const [editMode, setEditMode] = useState(false);

//     const sections = [
//         {
//             title: 'Mission & Values',
//             content: `The Yale School of Art is a graduate school that confers Master of Fine Arts degrees in 
//       Graphic Design, Painting/Printmaking, Photography, and Sculpture. Artists and designers of unusual 
//       promise and strong motivation are provided an educational context where they can explore their 
//       talents through intense critical dialogue.`,
//             subsections: [
//                 {
//                     title: 'Land Acknowledgement',
//                     content: '[Native land acknowledgement text...]'
//                 },
//                 {
//                     title: 'Equity & Inclusion',
//                     content: 'Commitment to sustainable equity, inclusion, and belonging...'
//                 }
//             ]
//         },
//         {
//             title: 'Academic Programs',
//             content: `The School offers an undergraduate art major for Yale College students and MFA programs 
//       for graduate students. Our courses are open to students across Yale's professional schools.`,
//             subsections: [
//                 {
//                     title: 'MFA Degree Requirements',
//                     content: `- Minimum 60 credits\n- Two-year residence\n- Thesis presentation\n- Faculty reviews each term`,
//                     list: true
//                 },
//                 {
//                     title: 'Study Areas',
//                     content: `Graphic Design\nPainting/Printmaking\nPhotography\nSculpture`
//                 }
//             ]
//         },
//         {
//             title: 'Public Engagement',
//             content: `We host numerous public events and exhibitions throughout the year:`,
//             subsections: [
//                 {
//                     title: 'Lecture Series',
//                     content: `Weekly lectures by visiting artists and faculty, free and open to the public.`
//                 },
//                 {
//                     title: 'Exhibitions',
//                     content: `Regular exhibitions in Green Hall and 32 Edgewood Avenue galleries.`
//                 }
//             ]
//         },
//         {
//             title: 'Community Resources',
//             content: `Resources and support systems for our community:`,
//             subsections: [
//                 {
//                     title: 'Facilities',
//                     content: `State-of-the-art studios and workshops`
//                 },
//                 {
//                     title: 'Support',
//                     content: `Funding opportunities and grants`
//                 }
//             ]
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Main Content */}
//             <Navbar />

//             <main className="max-w-7xl mx-auto px-4 py-8">
//                 <div className="flex items-center justify-between mb-8">
//                     <h1 className="text-4xl font-bold text-gray-900">About the School</h1>
//                     <button
//                         onClick={() => setEditMode(!editMode)}
//                         className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
//                     >
//                         <PencilSquareIcon className="h-5 w-5 mr-2" />
//                         {editMode ? 'Exit Edit' : 'Edit Page'}
//                     </button>
//                 </div>

//                 {/* Core Information Grid */}
//                 <div className="grid md:grid-cols-2 gap-8 mb-12">
//                     <div className="bg-white p-6 rounded-xl shadow-sm">
//                         <AcademicCapIcon className="h-8 w-8 text-blue-600 mb-4" />
//                         <h3 className="text-xl font-semibold mb-3">Degrees Offered</h3>
//                         <ul className="space-y-2 text-gray-600">
//                             {['Graphic Design', 'Painting/Printmaking', 'Photography', 'Sculpture'].map((program) => (
//                                 <li key={program} className="flex items-center">
//                                     <div className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
//                                     {program}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="bg-white p-6 rounded-xl shadow-sm">
//                         <BookOpenIcon className="h-8 w-8 text-blue-600 mb-4" />
//                         <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
//                         <dl className="grid grid-cols-2 gap-4 text-gray-600">
//                             <FactItem term="Established" detail="1869" />
//                             <FactItem term="Students" detail="~80,000 Graduate" />
//                             <FactItem term="Faculty" detail="50+ Professionals" />
//                             <FactItem term="Location" detail="New Haven, CT" />
//                         </dl>
//                     </div>
//                 </div>

//                 {/* Expandable Sections */}
//                 <div className="space-y-4">
//                     {sections.map((section, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-xl shadow-sm border border-gray-100"
//                         >
//                             <button
//                                 className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
//                                 onClick={() => setOpenSection(openSection === index ? null : index)}
//                             >
//                                 <div className="flex items-center space-x-4">
//                                     <h2 className="text-xl font-semibold">{section.title}</h2>
//                                     {editMode && (
//                                         <span className="text-sm text-gray-500 bg-yellow-100 px-2 py-1 rounded">
//                                             Last edited: 03/25/2025
//                                         </span>
//                                     )}
//                                 </div>
//                                 <ChevronDownIcon
//                                     className={`h-6 w-6 transform transition-transform ${openSection === index ? 'rotate-180' : ''
//                                         }`}
//                                 />
//                             </button>

//                             {openSection === index && (
//                                 <div className="px-6 py-4 border-t border-gray-100 space-y-6">
//                                     <p className="text-gray-600 leading-relaxed">
//                                         {section.content}
//                                     </p>

//                                     {section.subsections?.map((subsection, subIndex) => (
//                                         <div key={subIndex} className="ml-4 pl-4 border-l-2 border-blue-100">
//                                             <h4 className="font-semibold text-lg mb-2">{subsection.title}</h4>
//                                             {subsection.list ? (
//                                                 <ul className="list-disc pl-6 space-y-2 text-gray-600">
//                                                     {subsection.content.split('\n').map((item, i) => (
//                                                         <li key={i}>{item}</li>
//                                                     ))}
//                                                 </ul>
//                                             ) : (
//                                                 <p className="text-gray-600">{subsection.content}</p>
//                                             )}
//                                         </div>
//                                     ))}

//                                     {editMode && (
//                                         <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
//                                             <button className="text-blue-600 flex items-center">
//                                                 <PencilSquareIcon className="h-4 w-4 mr-1" />
//                                                 Edit Section
//                                             </button>
//                                             <span className="text-sm text-gray-500">
//                                                 Last Edited by: Sami
//                                             </span>
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Wiki Footer */}
//                 <div className="mt-12 p-4 bg-gray-50 rounded-lg">
//                     <div className="flex items-center justify-between text-sm text-gray-600">
//                         <div>
//                             <p>Page history</p>
//                             <p>Last major edit: March 25, 2025 by Zeineb</p>
//                         </div>
//                         <button className="flex items-center text-blue-600">
//                             <PencilSquareIcon className="h-4 w-4 mr-1" />
//                             View Page History
//                         </button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// const FactItem = ({ term, detail }) => (
//     <div>
//         <dt className="font-medium">{term}</dt>
//         <dd className="text-gray-600">{detail}</dd>
//     </div>
// );

// export default AboutPage;

import React, { useState } from 'react';
import { ChevronDownIcon, DocumentArrowDownIcon, AcademicCapIcon, CurrencyDollarIcon, GlobeAmericasIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const ApplyPage = () => {
    const [openSection, setOpenSection] = useState([0]);

    const toggleSection = (index) => {
        setOpenSection(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const sections = [
        {
            title: 'Admission Overview',
            icon: <AcademicCapIcon className="h-6 w-6 mr-3" />,
            content: (
                <div className="space-y-8">
                    {/* Application Timeline */}
                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">📅 2026 Application Timeline</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { date: 'Oct 1, 2025', event: 'Application Opens' },
                                { date: 'Jan 8, 2026', event: 'Submission Deadline', highlight: true },
                                { date: 'Feb 15-28', event: 'Interviews' },
                                { date: 'Mar 5, 2026', event: 'Decisions Released' }
                            ].map((item, i) => (
                                <div key={i} className={`p-4 rounded-lg ${item.highlight ? 'bg-blue-100 border-2 border-blue-300' : 'bg-white'}`}>
                                    <div className="font-semibold">{item.date}</div>
                                    <div className="text-gray-600">{item.event}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">🎓 Entrance Requirements</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Bachelor's degree or equivalent</li>
                                <li>Minimum 3.0 GPA (4.0 scale)</li>
                                <li>Portfolio demonstrating artistic achievement</li>
                                <li>Proof of English proficiency (international students)</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">📑 Application Checklist</h3>
                            <div className="space-y-3">
                                {[
                                    'Completed online form',
                                    '$100 non-refundable fee',
                                    'Personal statement (1-2 pages)',
                                    '3 letters of recommendation',
                                    'Official transcripts',
                                    'Portfolio (15-20 works)'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Program Details',
            icon: <DocumentArrowDownIcon className="h-6 w-6 mr-3" />,
            content: (
                <div className="space-y-8">
                    {/* Department Requirements */}
                    <div className="bg-purple-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">🎨 Department-Specific Requirements</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    program: 'Graphic Design',
                                    requirements: ['Thesis proposal', '10-15 design projects', 'Writing samples']
                                },
                                {
                                    program: 'Painting/Printmaking',
                                    requirements: ['20-25 works', 'Process documentation', 'Studio practice statement']
                                },
                                {
                                    program: 'Photography',
                                    requirements: ['Series of 15-20 images', 'Technical specifications', 'Conceptual framework']
                                },
                                {
                                    program: 'Sculpture',
                                    requirements: ['3D documentation', 'Material experiments', 'Installation photos']
                                }
                            ].map((dept, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">{dept.program}</h4>
                                    <ul className="list-disc pl-6 space-y-1">
                                        {dept.requirements.map((req, j) => (
                                            <li key={j} className="text-gray-600">{req}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Facilities */}
                    <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">🏛 Studio & Facility Access</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                '24/7 Studio Access',
                                'Digital Media Labs',
                                'Printmaking Workshop',
                                'Photography Darkrooms',
                                'Wood/Metal Shops',
                                'Exhibition Spaces'
                            ].map((facility, i) => (
                                <div key={i} className="bg-white p-3 rounded-lg text-center">
                                    {facility}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Financial Information',
            icon: <CurrencyDollarIcon className="h-6 w-6 mr-3" />,
            content: (
                <div className="space-y-8">
                    {/* Cost Breakdown */}
                    <div className="bg-yellow-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">💵 2025-2026 Estimated Costs</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { item: 'Tuition', amount: '$44,500' },
                                { item: 'Fees', amount: '$3,200' },
                                { item: 'Materials', amount: '$4,000' },
                                { item: 'Housing', amount: '$18,000' },
                                { item: 'Meals', amount: '$7,500' },
                                { item: 'Insurance', amount: '$2,800' }
                            ].map((cost, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg">
                                    <div className="font-semibold">{cost.item}</div>
                                    <div className="text-blue-600">{cost.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Funding Options */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">🏦 Loan Programs</h3>
                            <div className="space-y-4">
                                {[
                                    'Federal Direct Unsubsidized Loan ($20,500/yr @ 7.05%)',
                                    'Federal Grad PLUS Loan (Credit-based @ 8.05%)',
                                    'Yale International Student Loan',
                                    'Private Education Loans'
                                ].map((loan, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="h-2 w-2 bg-green-600 rounded-full mr-3" />
                                        {loan}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">💼 Employment Opportunities</h3>
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left border-b">
                                        <th className="pb-2">Position</th>
                                        <th className="pb-2">Hours/Week</th>
                                        <th className="pb-2">Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Studio Assistant', '4-6', '$14.25'],
                                        ['Gallery Attendant', '4-8', '$15.00'],
                                        ['Research Assistant', '6-10', '$18.50'],
                                        ['Teaching Assistant', '8-12', '$25.00']
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b">
                                            {row.map((cell, j) => (
                                                <td key={j} className="py-2">{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'International Applicants',
            icon: <GlobeAmericasIcon className="h-6 w-6 mr-3" />,
            content: (
                <div className="space-y-8">
                    {/* English Requirements */}
                    <div className="bg-red-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">🌍 English Proficiency Requirements</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { test: 'TOEFL iBT', score: '100+', details: 'Speaking ≥28' },
                                { test: 'IELTS', score: '7.0+', details: 'All bands ≥6.5' },
                                { test: 'Duolingo', score: '120+', details: 'Literacy ≥130' }
                            ].map((test, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg">
                                    <div className="font-semibold">{test.test}</div>
                                    <div className="text-2xl text-blue-600 my-2">{test.score}</div>
                                    <div className="text-sm text-gray-600">{test.details}</div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            *Waived for degrees from English-speaking institutions
                        </p>
                    </div>

                    {/* Visa Process */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">🛂 Visa Documentation</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">Required Documents</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Valid passport</li>
                                    <li>Financial certification</li>
                                    <li>SEVIS I-20 form</li>
                                    <li>Visa interview confirmation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Timeline</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Admission Offer</span>
                                        <span>March 5</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Document Submission</span>
                                        <span>April 15</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Visa Appointment</span>
                                        <span>May-June</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Yale School of Art Admissions
                    </span>
                </h1>
                <div className="bg-blue-100 p-4 rounded-xl inline-block">
                    <p className="text-blue-800 font-medium text-lg">
                        ⚠️ Fall 2026 Application Opens: October 1, 2025
                    </p>
                </div>
            </header>

            <main className="space-y-12">
                {/* Main Application Sections */}
                <section className="space-y-6">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg">
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                onClick={() => toggleSection(index)}
                            >
                                <div className="flex items-center text-xl">
                                    {section.icon}
                                    <h2 className="font-semibold">{section.title}</h2>
                                </div>
                                <ChevronDownIcon
                                    className={`h-7 w-7 transform transition-transform ${openSection.includes(index) ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openSection.includes(index) && (
                                <div className="px-8 py-6 border-t border-gray-100">
                                    {section.content}
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                {/* Additional Resources */}
                <section className="bg-gray-50 p-8 rounded-xl">
                    <h2 className="text-3xl font-bold mb-6">📚 Resources & Downloads</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'MFA Program Brochure', year: '2025-2026', type: 'PDF 2.3MB' },
                            { title: 'Financial Aid Handbook', year: '2024 Edition', type: 'PDF 1.8MB' },
                            { title: 'International Guide', year: '2026 Version', type: 'PDF 3.1MB' }
                        ].map((doc, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-semibold">{doc.title}</h3>
                                        <p className="text-sm text-gray-500">{doc.year}</p>
                                    </div>
                                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                        {doc.type}
                                    </span>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-700">
                                    <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact & Support */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">🛎 Need Assistance?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Admissions Office</h3>
                                <div className="space-y-2">
                                    <p>📧 art.admissions@yale.edu</p>
                                    <p>📞 (203) 432-2600</p>
                                    <p>📍 1156 Chapel Street, New Haven</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Financial Aid</h3>
                                <div className="space-y-2">
                                    <p>📧 nicole.archer@yale.edu</p>
                                    <p>📞 (203) 432-2297</p>
                                    <p>⏰ Mon-Fri 9AM-5PM EST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Wiki Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <div>
                        <p>Page last updated: March 25, 2025</p>
                        <p>Edited by: Admissions Committee</p>
                    </div>
                    <div className="space-x-4">
                        <button className="text-blue-600 hover:text-blue-700">
                            Edit This Page
                        </button>
                        <button className="text-blue-600 hover:text-blue-700">
                            View History
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ApplyPage;