import React from 'react';
import { Brain, Target, Eye, Award, Users, Calendar } from 'lucide-react';
import aboutusbackdround from "../../Public/aboutusbackdround/aboutus.jpg";
import Mrmohan from "../../Public/mr_mohan.png";

const About: React.FC = () => {


  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-top text-white h-screen"
  style={{ backgroundImage: `url(${aboutusbackdround})` }} // 🔁 Replace with your actual image file in public/
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Xlogica</h1>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto">
        Founded on the belief that technology and education can transform lives, we've built a comprehensive ecosystem of learning, research, and innovation.
      </p>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-700 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To democratize access to cutting-edge technology education while advancing research that solves real-world problems and delivering innovative solutions that drive business transformation.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-emerald-700 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the global leader in technology education and research, creating a world where innovation thrives through the convergence of learning, discovery, and practical application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our evolution</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2018 - Foundation</h3>
                <p className="text-gray-600">
                  Xlogica was founded with a vision to bridge the gap between academic learning and industry requirements in emerging technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2019 - EDU Division Launch</h3>
                <p className="text-gray-600">
                  Launched Xlogica EDU with our first AI/ML certification program, training over 500 students in the first year.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Research Park Establishment</h3>
                <p className="text-gray-600">
                  Established our Research Park division, focusing on AI applications in healthcare and industrial automation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-700 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2021 - IT Solutions Division</h3>
                <p className="text-gray-600">
                  Expanded into enterprise solutions, helping businesses leverage AI and cloud technologies for digital transformation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2024 - Global Expansion</h3>
                <p className="text-gray-600">
                  Today, we serve over 5,000 students, conduct 150+ research projects, and partner with leading global enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries driving our mission forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Dr. Priya Sharma"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Priya Sharma</h3>
              <p className="text-blue-700 font-semibold mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                Former MIT professor with 15+ years in AI research and educational technology innovation.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Dr. Alex Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Alex Chen</h3>
              <p className="text-emerald-700 font-semibold mb-2">Chief Research Officer</p>
              <p className="text-gray-600">
                Leading AI researcher with 50+ publications and expertise in machine learning and healthcare applications.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-orange-700 font-semibold mb-2">CTO, IT Solutions</p>
              <p className="text-gray-600">
                Enterprise technology veteran with experience scaling solutions for Fortune 500 companies.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Legendary Board
            </h2>
            <p className="text-xl text-gray-600">
              The Immortal Engines Behind Xlogica’s Rise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Sarah Chen"
                  className="w-20 h-20 rounded-full object-cover object-center "
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
                  src="Public\Dr_janaka.png"
                  alt="Dr. Michael Rodriguez"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-4">
                "Partnering with Xlogica allows me to contribute toward shaping smarter, greener, and more sustainable solutions across education, research, and real-world innovation."
              </p>
              <div className="font-semibold text-gray-900">Dr. Janaka Jayalath</div>
              <div className="text-gray-500">Senior Lecturer, University of Vocational Technology (UoVT)
                ,Chief Advisor & Consultant, Xlogica</div>
            </div>
            

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="Public\Untitled (1080 x 1080 px) (3).png"
                  alt="Dr. Michael Rodriguez"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-4">
                "Xlogica’s forward-thinking approach in AI, Machine Learning, and Data Science aligns seamlessly with my passion for developing transformative digital solutions"
              </p>
              <div className="font-semibold text-gray-900">Dr. D. L. Chamara Pramod Liyanage</div>
              <div className="text-gray-500">Doctor of Engineering, Senior Lecturer, University of Sri Jayewardenepura
Consultant & Team Lead – AI and IT Solutions, Xlogica</div>
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
                  src={Mrmohan}
                  alt="Mr . Mohan Perea "
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-4">
                "At Xlogica, we are building more than solutions — we are building futures by merging engineering excellence with transformative education and skills development."
              </p>
              <div className="font-semibold text-gray-900">Mr. Mohan Perera</div>
              <div className="text-gray-500">Managing Director & CEO, Xlogica
Distinguished Engineer | Consultant & Master Trainer in TVET and Skills Development</div>
            </div>


            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <img
                  src="Public\mr.dilip.png"
                  alt="Dr. Michael Rodriguez"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-4">
                "Collaborating with Xlogica enables me to inspire the next generation of professionals by integrating global hospitality standards with future-focused vocational training."
              </p>
              <div className="font-semibold text-gray-900">Mr. Dilip de Silva</div>
              <div className="text-gray-500">Chairman, Hotels Classification Board – Sri Lanka Tourism
              </div>
                <div className="text-gray-500">Vice President - BLMS</div>

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

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly pushing boundaries and exploring new possibilities in technology and education.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Building bridges between academia, industry, and students to create meaningful impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in education, research, and professional services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                Focusing on solutions that create real-world value and positive change in society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;