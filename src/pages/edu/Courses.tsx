import React, { useState } from 'react';
import { Clock, Users, Star, Filter, Search } from 'lucide-react';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'AI/ML', 'IoT', 'Cloud & DevOps', 'Cybersecurity', 'Data Science'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const courses = [
    {
      id: 1,
      title: 'Machine Learning Fundamentals',
      category: 'AI/ML',
      difficulty: 'Beginner',
      duration: '8 weeks',
      students: 1250,
      rating: 4.9,
      instructor: 'Dr. Sarah Chen',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Master the fundamentals of machine learning with hands-on projects using Python and scikit-learn.',
      price: '$299'
    },
    {
      id: 2,
      title: 'Deep Learning with TensorFlow',
      category: 'AI/ML',
      difficulty: 'Intermediate',
      duration: '12 weeks',
      students: 890,
      rating: 4.8,
      instructor: 'Prof. Michael Rodriguez',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Build neural networks and deep learning models for computer vision and natural language processing.',
      price: '$399'
    },
    {
      id: 3,
      title: 'IoT Systems Design',
      category: 'IoT',
      difficulty: 'Intermediate',
      duration: '10 weeks',
      students: 650,
      rating: 4.7,
      instructor: 'Dr. Alex Kim',
      image: 'https://images.pexels.com/photos/8386664/pexels-photo-8386664.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Design and implement IoT solutions using Arduino, Raspberry Pi, and cloud platforms.',
      price: '$349'
    },
    {
      id: 4,
      title: 'Cloud Architecture with AWS',
      category: 'Cloud & DevOps',
      difficulty: 'Advanced',
      duration: '14 weeks',
      students: 720,
      rating: 4.9,
      instructor: 'James Liu',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Master AWS services and design scalable, secure cloud architectures for enterprise applications.',
      price: '$449'
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      category: 'Cybersecurity',
      difficulty: 'Beginner',
      duration: '6 weeks',
      students: 980,
      rating: 4.6,
      instructor: 'Dr. Emily Watson',
      image: 'https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn essential cybersecurity concepts, threat analysis, and security best practices.',
      price: '$249'
    },
    {
      id: 6,
      title: 'Data Science with Python',
      category: 'Data Science',
      difficulty: 'Intermediate',
      duration: '10 weeks',
      students: 1100,
      rating: 4.8,
      instructor: 'Dr. Maria Garcia',
      image: 'https://images.pexels.com/photos/8386441/pexels-photo-8386441.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Analyze data, create visualizations, and build predictive models using Python libraries.',
      price: '$329'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Course Catalog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose from our comprehensive selection of courses designed to take you from beginner to expert in cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-gray-700">Filters:</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Difficulty:</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {course.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Instructor: {course.instructor}</span>
                    <span className="text-2xl font-bold text-blue-700">{course.price}</span>
                  </div>

                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-6">
            We're constantly adding new courses. Contact us to suggest a topic or request custom training.
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Courses;