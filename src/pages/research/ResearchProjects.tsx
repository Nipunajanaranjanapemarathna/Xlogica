import React, { useState } from 'react';
import { Download, ExternalLink, Calendar, Users, Tag, Award } from 'lucide-react';

const ResearchProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare AI', 'Industrial AI', 'Computer Vision', 'NLP', 'Robotics', 'IoT'];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Early Cancer Detection System',
      category: 'Healthcare AI',
      status: 'Ongoing',
      startDate: '2023-06-01',
      team: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Alex Kim'],
      description: 'Developing a multi-modal AI system that combines medical imaging, genomic data, and clinical records to detect cancer at early stages with 95% accuracy.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      publications: [
        { title: 'Multi-Modal Cancer Detection Using Deep Learning', journal: 'Nature Medicine', year: 2024 },
        { title: 'Genomic Data Integration for Cancer Prediction', journal: 'Cell', year: 2023 }
      ],
      funding: '$2.5M',
      partners: ['Stanford Medical Center', 'Mayo Clinic'],
      featured: true
    },
    {
      id: 2,
      title: 'Smart Manufacturing Optimization Platform',
      category: 'Industrial AI',
      status: 'Completed',
      startDate: '2022-01-15',
      team: ['Dr. Emily Watson', 'James Liu', 'Maria Garcia'],
      description: 'Real-time optimization system for manufacturing processes using reinforcement learning and IoT sensors, achieving 30% efficiency improvement.',
      image: 'https://images.pexels.com/photos/4386443/pexels-photo-4386443.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      publications: [
        { title: 'Reinforcement Learning for Manufacturing Optimization', journal: 'IEEE Transactions on Industrial Informatics', year: 2024 },
        { title: 'IoT-Enabled Smart Factory Architecture', journal: 'Journal of Manufacturing Systems', year: 2023 }
      ],
      funding: '$1.8M',
      partners: ['Siemens', 'General Electric'],
      featured: true
    },
    {
      id: 3,
      title: 'Autonomous Drone Swarm for Disaster Response',
      category: 'Robotics',
      status: 'Ongoing',
      startDate: '2023-03-01',
      team: ['Dr. Alex Kim', 'David Chen', 'Sarah Johnson'],
      description: 'Coordinated drone swarms for search and rescue operations using distributed AI algorithms and real-time communication protocols.',
      image: 'https://images.pexels.com/photos/8386370/pexels-photo-8386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      publications: [
        { title: 'Distributed AI for Autonomous Drone Coordination', journal: 'Robotics and Autonomous Systems', year: 2024 }
      ],
      funding: '$1.2M',
      partners: ['FEMA', 'Red Cross'],
      featured: false
    },
    {
      id: 4,
      title: 'Natural Language Processing for Medical Records',
      category: 'NLP',
      status: 'Ongoing',
      startDate: '2023-09-01',
      team: ['Prof. Michael Rodriguez', 'Lisa Wong', 'Carlos Rivera'],
      description: 'Advanced NLP system for extracting insights from unstructured medical records to support clinical decision-making and research.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      publications: [
        { title: 'Clinical NLP for Electronic Health Records', journal: 'Journal of Biomedical Informatics', year: 2024 }
      ],
      funding: '$900K',
      partners: ['Johns Hopkins', 'Cleveland Clinic'],
      featured: false
    },
    {
      id: 5,
      title: 'Computer Vision for Agricultural Monitoring',
      category: 'Computer Vision',
      status: 'Completed',
      startDate: '2022-05-01',
      team: ['Dr. Maria Garcia', 'Raj Patel', 'Anna Kim'],
      description: 'Satellite and drone-based computer vision system for crop health monitoring, yield prediction, and precision agriculture applications.',
      image: 'https://images.pexels.com/photos/4386368/pexels-photo-4386368.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      publications: [
        { title: 'Deep Learning for Crop Health Assessment', journal: 'Computers and Electronics in Agriculture', year: 2023 },
        { title: 'Satellite-Based Yield Prediction Models', journal: 'Remote Sensing', year: 2023 }
      ],
      funding: '$1.5M',
      partners: ['John Deere', 'USDA'],
      featured: false
    },
    {
      id: 6,
      title: 'IoT-Based Smart City Infrastructure',
      category: 'IoT',
      status: 'Ongoing',
      startDate: '2023-01-01',
      team: ['Dr. Alex Kim', 'James Liu', 'Priya Sharma'],
      description: 'Comprehensive IoT platform for smart city management including traffic optimization, energy management, and environmental monitoring.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      publications: [
        { title: 'IoT Architecture for Smart Cities', journal: 'IEEE Internet of Things Journal', year: 2024 }
      ],
      funding: '$3.2M',
      partners: ['City of San Francisco', 'Cisco'],
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Projects & Publications</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Explore our cutting-edge research initiatives and breakthrough discoveries that are shaping the future of AI and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Research</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(project.startDate).getFullYear()}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {project.category}
                    </span>
                    <span className="text-emerald-600 font-semibold">{project.funding}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Research Team:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.team.map(member => (
                        <span key={member} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Publications:</h4>
                    <div className="space-y-2">
                      {project.publications.map((pub, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-700">{pub.title}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500">{pub.journal} ({pub.year})</span>
                            <Download className="h-4 w-4 text-emerald-600 cursor-pointer hover:text-emerald-800" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Partners: {project.partners.join(', ')}
                    </div>
                    <ExternalLink className="h-5 w-5 text-emerald-600 cursor-pointer hover:text-emerald-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900">All Research Projects</h2>
            <div className="flex items-center space-x-4">
              <Tag className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {project.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(project.startDate).getFullYear()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.team.length} researchers</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-semibold">{project.funding}</span>
                    <div className="flex space-x-2">
                      <Download className="h-4 w-4 text-gray-600 cursor-pointer hover:text-gray-800" />
                      <ExternalLink className="h-4 w-4 text-emerald-600 cursor-pointer hover:text-emerald-800" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Impact</h2>
            <p className="text-xl text-emerald-100">
              Our research creates measurable impact across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-emerald-200">Publications</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-emerald-200">Active Projects</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <ExternalLink className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-emerald-200">Industry Partners</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Download className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-emerald-200">Citations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Our Research?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Explore collaboration opportunities or access our research publications and datasets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Publications
            </button>
            <button className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Collaborate With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchProjects;