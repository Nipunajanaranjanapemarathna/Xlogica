import React, { useState } from 'react';
import { Users, Lightbulb, Award, Send, CheckCircle, Building, GraduationCap, Briefcase } from 'lucide-react';

const Collaborate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    researchArea: '',
    proposal: '',
    funding: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Collaborate With Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our research community and contribute to breakthrough discoveries in AI and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">
              Multiple ways to engage with our research initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Industry Partnerships</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Joint research projects with commercial applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Technology transfer and licensing opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Access to cutting-edge research and talent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Co-development of AI solutions</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-blue-700 font-semibold">Fortune 500 Companies Welcome</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Academic Collaboration</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Joint publications and research grants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Student and faculty exchange programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Shared research infrastructure and resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Collaborative PhD and postdoc programs</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-emerald-700 font-semibold">Universities & Research Institutes</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Research Fellowships</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Visiting researcher positions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Postdoctoral research opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Summer internship programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Independent research project funding</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-purple-700 font-semibold">Individual Researchers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Current Partners</h2>
            <p className="text-xl text-gray-600">
              We're proud to collaborate with leading organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
                  alt="Stanford University"
                  className="w-full h-16 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Stanford University</h3>
              <p className="text-sm text-gray-600">AI Research Collaboration</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <img
                  src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
                  alt="Google"
                  className="w-full h-16 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Google</h3>
              <p className="text-sm text-gray-600">Machine Learning Research</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <img
                  src="https://images.pexels.com/photos/8386664/pexels-photo-8386664.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
                  alt="Mayo Clinic"
                  className="w-full h-16 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Mayo Clinic</h3>
              <p className="text-sm text-gray-600">Healthcare AI</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <img
                  src="https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
                  alt="Siemens"
                  className="w-full h-16 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Siemens</h3>
              <p className="text-sm text-gray-600">Industrial IoT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600">
              Simple steps to begin your collaboration journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Submit Proposal</h3>
              <p className="text-gray-600">
                Fill out our collaboration form with your research idea or partnership proposal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600">
                Our research committee reviews your proposal and provides feedback within 2 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Discussion & Planning</h3>
              <p className="text-gray-600">
                We schedule meetings to discuss project details, timelines, and resource requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-700">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Launch Collaboration</h3>
              <p className="text-gray-600">
                Formalize the partnership and begin working together on breakthrough research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Collaboration Proposal</h2>
            <p className="text-xl text-gray-600">
              Tell us about your research idea or partnership opportunity
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Collaboration Type *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select collaboration type</option>
                  <option value="industry">Industry Partnership</option>
                  <option value="academic">Academic Collaboration</option>
                  <option value="fellowship">Research Fellowship</option>
                  <option value="internship">Internship Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="researchArea" className="block text-sm font-medium text-gray-700 mb-2">
                  Research Area *
                </label>
                <select
                  id="researchArea"
                  name="researchArea"
                  required
                  value={formData.researchArea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select research area</option>
                  <option value="healthcare-ai">Healthcare AI</option>
                  <option value="industrial-ai">Industrial AI</option>
                  <option value="computer-vision">Computer Vision</option>
                  <option value="nlp">Natural Language Processing</option>
                  <option value="robotics">Robotics</option>
                  <option value="iot">Internet of Things</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="funding" className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Budget
                </label>
                <select
                  id="funding"
                  name="funding"
                  value={formData.funding}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-50k">Under $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="over-1m">Over $1M</option>
                  <option value="tbd">To be determined</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="proposal" className="block text-sm font-medium text-gray-700 mb-2">
                Research Proposal / Project Description *
              </label>
              <textarea
                id="proposal"
                name="proposal"
                required
                rows={6}
                value={formData.proposal}
                onChange={handleChange}
                placeholder="Please describe your research idea, objectives, expected outcomes, and how you envision collaborating with our team..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
              >
                <Send className="h-5 w-5" />
                <span>Submit Proposal</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100">
              Have questions about collaboration? Our research team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Research Partnerships</h3>
              <p className="text-blue-100 mb-2">partnerships@xlogica.com</p>
              <p className="text-blue-200">+1 (555) 123-4567</p>
            </div>

            <div>
              <Lightbulb className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation Office</h3>
              <p className="text-blue-100 mb-2">innovation@xlogica.com</p>
              <p className="text-blue-200">+1 (555) 123-4568</p>
            </div>

            <div>
              <Award className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fellowship Programs</h3>
              <p className="text-blue-100 mb-2">fellowships@xlogica.com</p>
              <p className="text-blue-200">+1 (555) 123-4569</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborate;