import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Microscope, Brain, Heart, Factory, ArrowRight, Users, Award, BookOpen } from 'lucide-react';
import researchBackdround from "Public\researchBackground\background2 - Copy.jpg";
const ResearchParkOverview: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
           <section
  className="relative bg-cover bg-top bg-no-repeat text-white py-52"
  style={{ backgroundImage: `url('/researchBackground/background2 - Copy.jpg')` }}
>
  {/* 🔲 Dark overlay (only darkens the image) */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* ✅ Content stays bright on top of the darkened image */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Advancing the Frontiers of AI Research
      </h1>
      <p className="text-xl text-blue-300 mb-8 max-w-3xl mx-auto">
        Our Research Park drives breakthrough discoveries in AI applications for healthcare, industry, and society through collaborative innovation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/research/projects"
          className="bg-blue-600 hover:bg-blue-950 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          View Research
        </Link>
        <Link
          to="/research/collaborate"
          className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Collaborate
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Mission & Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission & Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on research that creates real-world impact, bridging the gap between academic discovery and practical application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI in Healthcare</h3>
              <p className="text-gray-600">
                Developing AI systems for medical diagnosis, drug discovery, personalized treatment plans, and healthcare optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial AI</h3>
              <p className="text-gray-600">
                Creating intelligent systems for manufacturing optimization, predictive maintenance, and supply chain automation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cognitive Computing</h3>
              <p className="text-gray-600">
                Advancing natural language processing, computer vision, and human-AI interaction for next-generation applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Domains</h2>
            <p className="text-xl text-gray-600">
              Our multidisciplinary approach spans across various domains of AI and emerging technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Microscope className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Healthcare AI</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Medical imaging and diagnostic AI systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Drug discovery and molecular design</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Personalized treatment recommendation systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Telemedicine and remote patient monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Factory className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Industrial Applications</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Smart manufacturing and Industry 4.0</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Predictive maintenance systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Quality control and defect detection</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Advanced AI Research</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Explainable AI and interpretability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Federated learning and privacy-preserving ML</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Multi-modal AI and cross-domain learning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>AI safety and ethical considerations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Beaker className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Emerging Technologies</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2  mr-3 flex-shrink-0"></div>
                  <span>Quantum machine learning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Edge AI and IoT intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Neuromorphic computing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Human-AI collaboration interfaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Labs & Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Labs & Facilities</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art research infrastructure supporting cutting-edge investigations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="AI Research Lab"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Research Lab</h3>
              <p className="text-gray-600">
                High-performance computing clusters with latest GPUs for deep learning research and model training.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/8386664/pexels-photo-8386664.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Healthcare Innovation Lab"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Innovation Lab</h3>
              <p className="text-gray-600">
                Medical imaging equipment and biomedical sensors for developing healthcare AI applications.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="IoT & Robotics Lab"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">IoT & Robotics Lab</h3>
              <p className="text-gray-600">
                Advanced robotics platforms and IoT testbeds for developing intelligent autonomous systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Impact</h2>
            <p className="text-xl text-emerald-100">
              Our research creates measurable impact across academia and industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-emerald-200">Published Papers</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25</div>
              <div className="text-emerald-200">Patents Filed</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-200">Industry Partners</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Beaker className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$10M</div>
              <div className="text-emerald-200">Research Funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Research Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a researcher, industry partner, or student, there are many ways to get involved in our groundbreaking work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/research/projects"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group text-center"
            >
              <BookOpen className="h-12 w-12 text-blue-700 mx-auto mb-4 group-hover:text-blue-800 transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Explore Projects</h3>
              <p className="text-gray-600 mb-4">Browse our current research projects and publications</p>
              <div className="flex items-center justify-center text-blue-700 group-hover:text-blue-800">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link
              to="/research/collaborate"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group text-center"
            >
              <Users className="h-12 w-12 text-emerald-700 mx-auto mb-4 group-hover:text-emerald-800 transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborate</h3>
              <p className="text-gray-600 mb-4">Partner with us on research initiatives</p>
              <div className="flex items-center justify-center text-emerald-700 group-hover:text-emerald-800">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link
              to="/contact"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group text-center"
            >
              <Award className="h-12 w-12 text-orange-700 mx-auto mb-4 group-hover:text-orange-800 transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Apply for Fellowship</h3>
              <p className="text-gray-600 mb-4">Join as a research fellow or intern</p>
              <div className="flex items-center justify-center text-orange-700 group-hover:text-orange-800">
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchParkOverview;