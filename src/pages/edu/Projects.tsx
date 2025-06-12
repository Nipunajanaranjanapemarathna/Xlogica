import React, { useState } from 'react';
import { Github, ExternalLink, Tag, User, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI/ML', 'IoT', 'Healthcare', 'AgriTech', 'FinTech', 'Computer Vision'];

  const projects = [
    {
      id: 1,
      title: 'Smart Healthcare Monitoring System',
      category: 'Healthcare',
      author: 'Priya Sharma',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'IoT-based patient monitoring system using wearable sensors and machine learning for early disease detection.',
      technologies: ['IoT', 'Python', 'TensorFlow', 'React', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Crop Disease Detection using AI',
      category: 'AgriTech',
      author: 'Raj Patel',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/4386368/pexels-photo-4386368.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Computer vision model to identify crop diseases from smartphone images, helping farmers make informed decisions.',
      technologies: ['Computer Vision', 'PyTorch', 'Flutter', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Fraud Detection in Financial Transactions',
      category: 'FinTech',
      author: 'Alex Chen',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Real-time fraud detection system using ensemble learning and anomaly detection techniques.',
      technologies: ['Machine Learning', 'Python', 'Kafka', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Smart Traffic Management System',
      category: 'IoT',
      author: 'Maria Garcia',
      date: '2023-12-20',
      image: 'https://images.pexels.com/photos/4386443/pexels-photo-4386443.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'IoT solution for optimizing traffic flow using real-time data from sensors and cameras.',
      technologies: ['IoT', 'Computer Vision', 'Node.js', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Sentiment Analysis for Social Media',
      category: 'AI/ML',
      author: 'David Kim',
      date: '2023-12-15',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'NLP model for analyzing public sentiment on social media platforms with real-time dashboard.',
      technologies: ['NLP', 'Python', 'BERT', 'React', 'D3.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Automated Warehouse Management',
      category: 'IoT',
      author: 'Sarah Johnson',
      date: '2023-12-10',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Robotic system for inventory management and order fulfillment in warehouses.',
      technologies: ['Robotics', 'Computer Vision', 'ROS', 'Python'],
      githubUrl: '#',
      liveUrl: '#',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Projects</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Explore innovative projects created by our students, showcasing real-world applications of cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
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
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{project.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-800 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </a>
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
            <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
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
                    <span className="text-sm text-gray-500">
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{project.author}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-800 transition-colors text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project to Showcase?</h2>
          <p className="text-xl text-emerald-100 mb-6">
            Submit your capstone project and join our gallery of innovative student work.
          </p>
          <button className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Submit Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;