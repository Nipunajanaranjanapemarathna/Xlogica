import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI/ML', 'Education', 'Research', 'Industry Trends', 'Technology'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: Transforming Patient Care',
      category: 'AI/ML',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      excerpt: 'Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic imaging to personalized treatment plans.',
      tags: ['Healthcare', 'AI', 'Innovation'],
      featured: true
    },
    {
      id: 2,
      title: 'Project-Based Learning: Why It\'s the Future of Tech Education',
      category: 'Education',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      excerpt: 'Discover how hands-on, project-based learning approaches are preparing students for real-world technology challenges.',
      tags: ['Education', 'Learning', 'Technology'],
      featured: true
    },
    {
      id: 3,
      title: 'Breaking Down Barriers: Making AI Accessible to Everyone',
      category: 'AI/ML',
      author: 'Dr. Alex Kim',
      date: '2024-01-10',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      excerpt: 'Learn about democratizing AI education and making machine learning tools accessible to learners from all backgrounds.',
      tags: ['AI', 'Accessibility', 'Education'],
      featured: false
    },
    {
      id: 4,
      title: 'Industry 4.0: How IoT is Reshaping Manufacturing',
      category: 'Industry Trends',
      author: 'James Liu',
      date: '2024-01-08',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/8386443/pexels-photo-8386443.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      excerpt: 'An in-depth look at how Internet of Things technologies are transforming modern manufacturing processes.',
      tags: ['IoT', 'Manufacturing', 'Industry 4.0'],
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of Remote Work',
      category: 'Technology',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      excerpt: 'Essential cybersecurity strategies for protecting organizations in an increasingly distributed work environment.',
      tags: ['Cybersecurity', 'Remote Work', 'Security'],
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Quantum Computing: What It Means for AI',
      category: 'Research',
      author: 'Dr. Maria Garcia',
      date: '2024-01-03',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/8386441/pexels-photo-8386441.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      excerpt: 'Exploring the intersection of quantum computing and artificial intelligence, and what it means for the future.',
      tags: ['Quantum Computing', 'AI', 'Research'],
      featured: false
    },
    {
      id: 7,
      title: 'Building Ethical AI: Principles and Practices',
      category: 'AI/ML',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-01',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8386464/pexels-photo-8386464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      excerpt: 'A comprehensive guide to developing AI systems that are fair, transparent, and beneficial for society.',
      tags: ['AI Ethics', 'Responsible AI', 'Technology'],
      featured: false
    },
    {
      id: 8,
      title: 'Cloud Migration Strategies for Enterprise Success',
      category: 'Technology',
      author: 'Sarah Johnson',
      date: '2023-12-28',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      excerpt: 'Best practices and strategies for successful enterprise cloud migration and digital transformation.',
      tags: ['Cloud Computing', 'Enterprise', 'Migration'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Xlogica Blog</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Insights, trends, and thought leadership in AI, education, research, and technology innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-indigo-700 group-hover:text-indigo-800">
                      <span className="text-sm font-medium mr-1">{post.readTime}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Tag className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
            <span className="text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-gray-500 text-xs">+{post.tags.length - 2} more</span>
                    )}
                  </div>

                  <div className="flex items-center text-indigo-700 group-hover:text-indigo-800 cursor-pointer">
                    <span className="text-sm font-medium mr-1">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="mt-4 text-indigo-700 hover:text-indigo-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-indigo-100 mb-6">
            Subscribe to our newsletter for the latest insights and updates from the world of AI and technology.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;