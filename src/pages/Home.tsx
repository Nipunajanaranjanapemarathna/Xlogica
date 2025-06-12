import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Beaker, Briefcase, ArrowRight, Users, Award, BookOpen, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovating the Future of
              <span className="block text-blue-300">Technology & Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Empowering minds, advancing research, and delivering cutting-edge solutions across three dynamic divisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/edu"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore EDU</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Divisions, One Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our integrated approach to education, research, and technology solutions creates lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* EDU Division */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                <Brain className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Xlogica EDU</h3>
              <p className="text-gray-600 mb-6">
                Empowering future tech leaders through project-based learning, research-driven curriculum, and expert mentorship in AI, IoT, and emerging technologies.
              </p>
              <Link
                to="/edu"
                className="text-blue-700 font-semibold hover:text-blue-800 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Research Park */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-lg mb-6 group-hover:bg-emerald-200 transition-colors">
                <Beaker className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Park</h3>
              <p className="text-gray-600 mb-6">
                Advancing the frontiers of AI, healthcare technology, and industrial innovation through collaborative research and breakthrough discoveries.
              </p>
              <Link
                to="/research"
                className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center space-x-2"
              >
                <span>Explore Research</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* IT Solutions */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6 group-hover:bg-orange-200 transition-colors">
                <Briefcase className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Solutions</h3>
              <p className="text-gray-600 mb-6">
                Delivering enterprise-grade AI/ML solutions, cloud infrastructure, and digital transformation services to businesses worldwide.
              </p>
              <Link
                to="/it-solutions"
                className="text-orange-700 font-semibold hover:text-orange-800 flex items-center space-x-2"
              >
                <span>View Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Students Trained</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Research Projects</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Courses Offered</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leaders
            </h2>
            <p className="text-xl text-gray-600">
              What our partners and alumni say about their Xlogica experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-4">
                "The AI/ML program at Xlogica EDU transformed my career. The hands-on projects and industry mentorship were invaluable."
              </p>
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-gray-500">ML Engineer at Google</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Dr. Michael Rodriguez"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-4">
                "Collaborating with Xlogica Research Park has accelerated our breakthrough in healthcare AI applications."
              </p>
              <div className="font-semibold text-gray-900">Dr. Michael Rodriguez</div>
              <div className="text-gray-500">Chief Research Officer, MedTech Innovations</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="James Liu"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-4">
                "Xlogica's IT Solutions team delivered exceptional cloud migration services that transformed our operations."
              </p>
              <div className="font-semibold text-gray-900">James Liu</div>
              <div className="text-gray-500">CTO, FinanceFlow</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators, researchers, and industry leaders who are transforming technology and education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/edu/courses"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Courses
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;