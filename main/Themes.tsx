"use client";

import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, BookOpen, Users, Award, ArrowRight } from 'lucide-react';

export default function Themes() {
  const [activeTab, setActiveTab] = useState('about-iit');
  const [expandedTheme, setExpandedTheme] = useState(null);

  const toggleTheme = (theme) => {
    if (expandedTheme === theme) {
      setExpandedTheme(null);
    } else {
      setExpandedTheme(theme);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans z-50">
      {/* Navigation Tabs with increased z-index */}
      

      {/* Main Content */}
      <main className="container mx-auto px-4 " style={{
        zIndex:65,
        position: 'relative',
      }}>
      <nav className="bg-white  top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8">
            <button
              onClick={() => setActiveTab('about-iit')}
              className={`whitespace-nowrap font-medium px-1 py-2 border-b-2 transition-colors duration-200 text-lg ${
                activeTab === 'about-iit' ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              About IIT Mandi
            </button>
            <button
              onClick={() => setActiveTab('about-anusandhan')}
              className={`whitespace-nowrap font-medium px-1 py-2 border-b-2 transition-colors duration-200 text-lg ${
                activeTab === 'about-anusandhan' ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              About Anusandhan 2.0
            </button>
            <button
              onClick={() => setActiveTab('themes')}
              className={`whitespace-nowrap font-medium px-1 py-2 border-b-2 transition-colors duration-200 text-lg ${
                activeTab === 'themes' ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Research Themes
            </button>
          </div>
        </div>
      </nav>
        {activeTab === 'about-iit' && (
          <div className="bg-white rounded-lg  p-6 md:p-8 border border-gray-200 z-50">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 font-serif">About IIT Mandi</h2>
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                The Indian Institute of Technology Mandi is one among the eighth newer second generation of IITs. IIT Mandi is a research university now located in Kamand Valley, Mandi city in Mandi district of Himachal Pradesh.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                IIT Mandi's campus (about 14 km from Mandi) is on the left bank of the Uhl River at Kamand and Salgi villages. There is great variation in the climatic conditions of Himachal due to extreme variation in elevation.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Location & Climate</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mandi has an average elevation of 1044 meters (3425 feet) and is situated on the banks of Beas. Mandi town falls in the lower most climatic zone of the Himalayas. These regions enjoys a wet-sub temperate climate of the foot hills (450-900 meters) as against the dry-cold alpine climate with snowfall at higher altitudes (2400-4800 meters). Average annual rainfall of Mandi is 1380 mm.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">Research & Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Since its inception the institute has been involved with various Research and Development (R&D) projects, the institute has signed Memorandum of Understanding (MoU) with many International and National universities, Companies, Research Centres, Organizations.
                  </p>
                  <p className="text-gray-700 mt-3 leading-relaxed">
                    The institute became an IIT under The Institutes of Technology (Amendment) Act, 2011, with the intention to expand the reach and to enhance the quality of technical education in the country. The Act was passed in the Lok Sabha on 24 March 2011 and by the Rajya Sabha on 30 April 2012.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about-anusandhan' && (
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 font-serif">About Anusandhan 2.0</h2>
            <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-lg">
                Anusandhan is a fair of multidisciplinary research and innovation of IIT Mandi, which includes Engineering & Technology (Mechanical Engineering, Civil Engineering, Computing and Electrical Engineering, Electronics Engineering, Robotics, IKSMHA, Computer science, and AI&ML), Basic Sciences (Physics, Chemistry, Mathematics, Biology, and Environmental sciences), Medical Science (Healthcare, Mental health, Physiology, and Medicine), Management and Humanities & Social Sciences (Economics, Literature, History, Sociology, Translation Studies, and Psychology) research, that provide participants to present and discuss their ideas among the research community and related experts in their domains.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Users size={24} className="text-purple-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-700">Collaboration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Fair aims to open a pathway for collaborative research and innovative ideas among the research community at an international level for the welfare of society and sustainable development of resources.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Award size={24} className="text-purple-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-700">Opportunity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Fair provides an opportunity for students, scholars, experts, faculties, and industries to come together under a single roof for the nation's development through the paths of ongoing research in variegated streams, making it a platform of large possibilities for societal welfare and policy making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'themes' && (
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 font-serif">Research Themes</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              We are inviting participants for paper presentations, poster proposals and interactive sessions addressing one of the following themes:
            </p>
            <h3 className="text-2xl font-semibold mb-8 text-center text-purple-700 font-serif">Theme: Interdisciplinary Research: Goals for Sustainable Future</h3>
            
            <div className="space-y-6 mt-8">
              {/* Engineering & Technologies */}
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-all duration-300">
                <button 
                  onClick={() => toggleTheme('engineering')}
                  className="w-full flex justify-between items-center p-5 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-purple-800">A: Engineering & Technologies</h3>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 text-purple-600 ${expandedTheme === 'engineering' ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                <div 
                  className={`transition-all duration-500 overflow-hidden ${
                    expandedTheme === 'engineering' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 bg-white">
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Industry 4.0 and Smart Manufacturing</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Advancement in materials and their processing</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Computer-aided manufacturing, robotics, and automation</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Multiphase flows</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Combustion and Radiation</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Alternate clean energy sources</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Design and analysis of mechanical components</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Biomechanics and Bioengineering</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Sustainable Infrastructure Development</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Urban Planning and Smart Cities</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Resilient structures</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Artificial Intelligence for Sustainability</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Power system and power electronics & drives</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Electric Transportation</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Communications & Signal Processing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fundamental Sciences */}
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-all duration-300">
                <button 
                  onClick={() => toggleTheme('sciences')}
                  className="w-full flex justify-between items-center p-5 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-purple-800">B: Fundamental Sciences</h3>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 text-purple-600 ${expandedTheme === 'sciences' ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                <div 
                  className={`transition-all duration-500 overflow-hidden ${
                    expandedTheme === 'sciences' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 bg-white">
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Bioinformatics and Sustainable Agriculture</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Waste Management and Sustainability</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Nanomaterials & Nanocomposites</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Biopolymers & Biomaterials</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Advanced Functional Materials</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Theoretical & Computational Chemistry</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Photocatalysis & Electrocatalysis</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Condensed matter physics</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Algebra, Analysis and Topology</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Statistics, Optimization, and Data Analytics</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Systems Biology and Multi-OMICS</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Nanobiotechnology</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Molecular and Cellular Biology</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">Bioinspired materials and simulation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Humanities & Social Sciences */}
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-all duration-300">
                <button 
                  onClick={() => toggleTheme('humanities')}
                  className="w-full flex justify-between items-center p-5 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-purple-800">C: Humanities & Social Sciences and Management</h3>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 text-purple-600 ${expandedTheme === 'humanities' ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                <div 
                  className={`transition-all duration-500 overflow-hidden ${
                    expandedTheme === 'humanities' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 bg-white">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">AI and ML approach in Urban studies</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">Environmental economics and agriculture</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">Technology intervention in Himalayan cultures and conservation</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">Sustainable cities and communities</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">Climate Change Impacts on Agriculture and Food Security</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight size={18} className="mt-1 mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">Carbon Pricing and Emissions Trading Schemes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}