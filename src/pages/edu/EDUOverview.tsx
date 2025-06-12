import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, Users, Trophy, ArrowRight, Target, Eye, Lightbulb } from 'lucide-react';

const EDUOverview: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Future Tech Leaders
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience world-class education in AI, ML, IoT, and emerging technologies through our innovative project-based learning approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/edu/courses"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse Courses
              </Link>
              <Link
                to="/edu/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
            <p className="text-xl text-gray-600">Our commitment to transforming technology education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the world's leading platform for technology education, where students don't just learn concepts but master the art of innovation through hands-on experience and real-world problem solving.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-emerald-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To democratize access to cutting-edge technology education by providing project-based learning experiences, industry mentorship, and research opportunities that prepare students for tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes Us Unique</h2>
            <p className="text-xl text-gray-600">Discover the Xlogica EDU difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project-Based Learning</h3>
              <p className="text-gray-600">
                Every course includes real-world projects that build your portfolio and demonstrate practical skills to employers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research-Driven</h3>
              <p className="text-gray-600">
                Learn from faculty actively engaged in cutting-edge research, bringing the latest discoveries to the classroom.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Mentorship</h3>
              <p className="text-gray-600">
                Get guidance from experienced professionals working at top tech companies and innovative startups.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Success</h3>
              <p className="text-gray-600">
                95% job placement rate with alumni working at leading companies like Google, Microsoft, and Tesla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Pathways */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Pathways</h2>
            <p className="text-xl text-gray-600">Structured progression from beginner to expert</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Foundation Level</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Start with programming fundamentals, mathematics for AI, and introduction to machine learning concepts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Python Programming</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Statistics & Math</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Data Structures</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intermediate Level</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Dive deep into machine learning algorithms, neural networks, and specialized domains like computer vision.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Computer Vision</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Advanced Level</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Master advanced topics, conduct research projects, and specialize in emerging technologies and applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Advanced AI</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Research Projects</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Industry Capstone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl text-blue-100">
              Explore our comprehensive offerings and take the first step toward your tech career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/edu/courses"
              className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition-colors group"
            >
              <BookOpen className="h-8 w-8 text-blue-300 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">Courses</h3>
              <p className="text-blue-100 mb-4">Browse our comprehensive course catalog</p>
              <div className="flex items-center text-blue-300 group-hover:text-white">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link
              to="/edu/projects"
              className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition-colors group"
            >
              <Lightbulb className="h-8 w-8 text-blue-300 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">Projects</h3>
              <p className="text-blue-100 mb-4">See student and research projects</p>
              <div className="flex items-center text-blue-300 group-hover:text-white">
                <span>View Gallery</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link
              to="/edu/mentors"
              className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition-colors group"
            >
              <Users className="h-8 w-8 text-blue-300 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">Mentors</h3>
              <p className="text-blue-100 mb-4">Meet our expert faculty and mentors</p>
              <div className="flex items-center text-blue-300 group-hover:text-white">
                <span>Meet Team</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link
              to="/edu/faq"
              className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition-colors group"
            >
              <Trophy className="h-8 w-8 text-blue-300 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">FAQ</h3>
              <p className="text-blue-100 mb-4">Get answers to common questions</p>
              <div className="flex items-center text-blue-300 group-hover:text-white">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EDUOverview;