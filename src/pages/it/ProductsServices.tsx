import React, { useState } from 'react';
import { ExternalLink, CheckCircle, Star, ArrowRight, Play } from 'lucide-react';

const ProductsServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI/ML Solutions', 'Cloud Services', 'Cybersecurity', 'DevOps', 'Consulting'];

  const products = [
    {
      id: 1,
      name: 'XLogica AI Platform',
      category: 'AI/ML Solutions',
      type: 'SaaS Product',
      description: 'End-to-end machine learning platform for building, training, and deploying AI models at enterprise scale.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'AutoML capabilities for rapid model development',
        'MLOps pipeline for continuous deployment',
        'Real-time model monitoring and drift detection',
        'Enterprise-grade security and compliance',
        'Multi-cloud deployment support'
      ],
      pricing: 'Starting at $5,000/month',
      clients: ['Fortune 500 Companies', 'Healthcare Systems', 'Financial Institutions'],
      demoUrl: '#',
      featured: true
    },
    {
      id: 2,
      name: 'CloudOps Manager',
      category: 'Cloud Services',
      type: 'SaaS Product',
      description: 'Comprehensive cloud management platform for multi-cloud environments with cost optimization and security monitoring.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'Multi-cloud resource management',
        'Automated cost optimization',
        'Security compliance monitoring',
        'Performance analytics and reporting',
        'Infrastructure as Code integration'
      ],
      pricing: 'Starting at $2,500/month',
      clients: ['Tech Startups', 'E-commerce Platforms', 'Media Companies'],
      demoUrl: '#',
      featured: true
    },
    {
      id: 3,
      name: 'SecureGuard AI',
      category: 'Cybersecurity',
      type: 'SaaS Product',
      description: 'AI-powered cybersecurity platform that provides real-time threat detection and automated incident response.',
      image: 'https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'AI-driven threat detection',
        'Automated incident response',
        'Behavioral analytics',
        'Compliance reporting',
        '24/7 security monitoring'
      ],
      pricing: 'Starting at $3,500/month',
      clients: ['Banks', 'Government Agencies', 'Healthcare Organizations'],
      demoUrl: '#',
      featured: false
    },
    {
      id: 4,
      name: 'Digital Transformation Consulting',
      category: 'Consulting',
      type: 'Professional Service',
      description: 'Strategic consulting services to guide your organization through comprehensive digital transformation initiatives.',
      image: 'https://images.pexels.com/photos/8386464/pexels-photo-8386464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'Technology strategy development',
        'Legacy system modernization',
        'Change management support',
        'ROI measurement and optimization',
        'Executive training and workshops'
      ],
      pricing: 'Custom pricing based on scope',
      clients: ['Enterprise Corporations', 'Government Entities', 'Non-profit Organizations'],
      demoUrl: '#',
      featured: false
    },
    {
      id: 5,
      name: 'DevOps Acceleration Suite',
      category: 'DevOps',
      type: 'SaaS Product',
      description: 'Complete DevOps platform with CI/CD pipelines, infrastructure automation, and deployment management.',
      image: 'https://images.pexels.com/photos/8386441/pexels-photo-8386441.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'Automated CI/CD pipelines',
        'Infrastructure as Code templates',
        'Container orchestration',
        'Performance monitoring',
        'Rollback and disaster recovery'
      ],
      pricing: 'Starting at $1,500/month',
      clients: ['Software Companies', 'SaaS Providers', 'Digital Agencies'],
      demoUrl: '#',
      featured: false
    },
    {
      id: 6,
      name: 'AI Implementation Services',
      category: 'AI/ML Solutions',
      type: 'Professional Service',
      description: 'End-to-end AI implementation services from strategy to deployment, tailored for your specific business needs.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'AI readiness assessment',
        'Custom model development',
        'Data pipeline optimization',
        'Model deployment and scaling',
        'Ongoing support and maintenance'
      ],
      pricing: 'Starting at $50,000 per project',
      clients: ['Manufacturing Companies', 'Retail Chains', 'Logistics Providers'],
      demoUrl: '#',
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products & Services</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Comprehensive suite of AI-powered solutions and professional services designed to accelerate your digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-orange-700">{product.pricing}</span>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">Trusted by {product.clients.length}+ industries</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-orange-700 hover:bg-orange-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>Request Demo</span>
                    </button>
                    <button className="border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
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
            <h2 className="text-2xl font-bold text-gray-900">All Products & Services</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {product.category}
                    </span>
                    <span className="text-xs text-gray-500">{product.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-orange-700">{product.pricing}</span>
                    <ExternalLink className="h-4 w-4 text-gray-400 hover:text-orange-700 cursor-pointer" />
                  </div>

                  <button className="w-full bg-orange-700 hover:bg-orange-800 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">
              Comprehensive service packages tailored for different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Package</h3>
                <div className="text-3xl font-bold text-orange-700 mb-2">$25,000</div>
                <div className="text-gray-600">Perfect for small to medium businesses</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>AI readiness assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Basic cloud migration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Security audit</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>3 months support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            <div className="border-2 border-orange-500 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Package</h3>
                <div className="text-3xl font-bold text-orange-700 mb-2">$75,000</div>
                <div className="text-gray-600">Ideal for growing enterprises</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Complete digital transformation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom AI model development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Advanced cloud architecture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>12 months support</span>
                </li>
              </ul>
              <button className="w-full bg-orange-700 hover:bg-orange-800 text-white py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Package</h3>
                <div className="text-3xl font-bold text-orange-700 mb-2">Custom</div>
                <div className="text-gray-600">For large-scale implementations</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>End-to-end transformation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Multi-year strategic partnership</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated team assignment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>24/7 premium support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-6">
            Schedule a consultation to discuss your specific needs and see our solutions in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Request Demo</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <span>Contact Sales</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsServices;