import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Cloud, Shield, Zap, ArrowRight, Building, TrendingUp, Users, Award } from 'lucide-react';

const ITSolutionsOverview: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise AI & Cloud Solutions
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI/ML solutions, cloud infrastructure, and digital transformation services tailored for enterprise success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/it-solutions/products"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Solutions
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Briefcase className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI/ML Solutions</h3>
              <p className="text-gray-600">
                Custom machine learning models, predictive analytics, and intelligent automation systems.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Cloud className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Scalable cloud architectures, migration services, and multi-cloud management solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Shield className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600">
                Advanced threat detection, security audits, and compliance management systems.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Zap className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">DevOps & Automation</h3>
              <p className="text-gray-600">
                CI/CD pipelines, infrastructure as code, and automated deployment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600">
              Tailored technology solutions for your industry's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>AI-powered diagnostic systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Electronic health record optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Telemedicine platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>HIPAA-compliant cloud infrastructure</span>
                </li>
              </ul>
              <Link
                to="/it-solutions/products"
                className="text-blue-700 font-semibold hover:text-blue-800 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Fraud detection and prevention</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Algorithmic trading systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Risk assessment models</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Regulatory compliance automation</span>
                </li>
              </ul>
              <Link
                to="/it-solutions/products"
                className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Predictive maintenance systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Quality control automation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>IoT sensor integration</span>
                </li>
              </ul>
              <Link
                to="/it-solutions/products"
                className="text-purple-700 font-semibold hover:text-purple-800 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from our enterprise partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="TechCorp Success"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">TechCorp Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                "Xlogica's predictive maintenance solution reduced our downtime by 40% and saved $2M annually."
              </p>
              <div className="text-orange-700 font-semibold">40% Downtime Reduction</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="FinanceFlow Success"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FinanceFlow Bank</h3>
              <p className="text-gray-600 mb-4">
                "Their fraud detection system caught 99.7% of fraudulent transactions while reducing false positives."
              </p>
              <div className="text-orange-700 font-semibold">99.7% Fraud Detection</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/8386466/pexels-photo-8386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="HealthSystem Success"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">MedTech Health System</h3>
              <p className="text-gray-600 mb-4">
                "Cloud migration improved our system performance by 60% while reducing infrastructure costs."
              </p>
              <div className="text-orange-700 font-semibold">60% Performance Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Xlogica IT Solutions</h2>
            <p className="text-xl text-orange-100">
              The advantages that set us apart in enterprise technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-orange-100">
                PhD-level researchers and industry veterans with 15+ years of experience.
              </p>
            </div>

            <div className="text-center">
              <Award className="h-12 w-12 text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-orange-100">
                100+ successful enterprise deployments with measurable ROI improvements.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-orange-100">
                SOC 2 compliant with advanced security measures and data protection.
              </p>
            </div>

            <div className="text-center">
              <Zap className="h-12 w-12 text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Rapid Deployment</h3>
              <p className="text-orange-100">
                Agile methodology ensures faster time-to-market and quick value realization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">$50M+</div>
              <div className="text-gray-600">Client Savings</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and cloud solutions can drive your digital transformation and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/it-solutions/products"
              className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Solutions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsOverview;