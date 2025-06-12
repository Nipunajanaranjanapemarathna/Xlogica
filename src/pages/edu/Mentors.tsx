import React from 'react';
import { Linkedin, Twitter, Github, Mail, Award, BookOpen, Users } from 'lucide-react';

const Mentors: React.FC = () => {
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior AI Research Scientist',
      company: 'Google DeepMind',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: ['Machine Learning', 'Computer Vision', 'Neural Networks'],
      bio: 'Former MIT professor with 15+ years of experience in AI research. Published 50+ papers in top-tier conferences and holds 12 patents.',
      achievements: ['AI Breakthrough Award 2023', 'Top 40 Under 40 in AI', 'IEEE Fellow'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#'
      },
      courses: ['Machine Learning Fundamentals', 'Deep Learning with TensorFlow'],
      students: 1250
    },
    {
      id: 2,
      name: 'Prof. Michael Rodriguez',
      title: 'Director of AI Research',
      company: 'Stanford University',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: ['Natural Language Processing', 'Reinforcement Learning', 'AI Ethics'],
      bio: 'Leading researcher in NLP and AI ethics. Advisory board member for several AI startups and consultant for Fortune 500 companies.',
      achievements: ['Turing Award Nominee', 'ACM Distinguished Scientist', 'Best Paper Award ACL 2023'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#'
      },
      courses: ['Advanced NLP', 'AI Ethics and Governance'],
      students: 890
    },
    {
      id: 3,
      name: 'Dr. Alex Kim',
      title: 'IoT Solutions Architect',
      company: 'Amazon Web Services',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: ['IoT Architecture', 'Edge Computing', 'Sensor Networks'],
      bio: 'Expert in large-scale IoT deployments with experience in smart cities, industrial IoT, and healthcare applications.',
      achievements: ['AWS IoT Hero', 'IoT Innovation Award', 'Top IoT Influencer 2023'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#'
      },
      courses: ['IoT Systems Design', 'Edge Computing Fundamentals'],
      students: 650
    },
    {
      id: 4,
      name: 'James Liu',
      title: 'Principal Cloud Architect',
      company: 'Microsoft Azure',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: ['Cloud Architecture', 'DevOps', 'Microservices'],
      bio: 'Specialist in cloud-native architectures and DevOps practices. Led digital transformation for 100+ enterprises.',
      achievements: ['Microsoft MVP', 'Cloud Architect of the Year', 'DevOps Excellence Award'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#'
      },
      courses: ['Cloud Architecture with AWS', 'DevOps Fundamentals'],
      students: 720
    },
    {
      id: 5,
      name: 'Dr. Emily Watson',
      title: 'Cybersecurity Consultant',
      company: 'Independent',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: ['Ethical Hacking', 'Security Architecture', 'Incident Response'],
      bio: 'Former NSA security analyst with extensive experience in cybersecurity consulting for government and private sectors.',
      achievements: ['CISSP Certified', 'Top Security Researcher', 'DefCon Speaker'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#'
      },
      courses: ['Cybersecurity Fundamentals', 'Advanced Penetration Testing'],
      students: 980
    },
    {
      id: 6,
      name: 'Dr. Maria Garcia',
      title: 'Lead Data Scientist',
      company: 'Netflix',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: ['Data Science', 'Machine Learning', 'Statistical Analysis'],
      bio: 'Data science leader with expertise in recommendation systems, A/B testing, and large-scale data analytics.',
      achievements: ['Data Science Excellence Award', 'KDD Best Paper', 'Women in AI Leader'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#'
      },
      courses: ['Data Science with Python', 'Advanced Statistics'],
      students: 1100
    }
  ];

  const alumni = [
    {
      name: 'Arjun Patel',
      company: 'Tesla',
      role: 'Senior ML Engineer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'Transitioned from mechanical engineering to AI through Xlogica EDU. Now working on autonomous driving systems.'
    },
    {
      name: 'Lisa Wong',
      company: 'Spotify',
      role: 'Data Scientist',
      image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'Built recommendation algorithms that serve millions of users. Credits the hands-on projects for landing the role.'
    },
    {
      name: 'Carlos Rivera',
      company: 'Startup Founder',
      role: 'CEO, AgriTech Solutions',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'Founded a successful AgriTech startup using AI for crop optimization. Raised $5M in Series A funding.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mentors & Alumni</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Learn from industry leaders and connect with successful alumni who are shaping the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Faculty & Mentors</h2>
            <p className="text-xl text-gray-600">
              World-class experts bringing real-world experience to the classroom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                      <p className="text-purple-700 font-semibold">{mentor.title}</p>
                      <p className="text-gray-600 text-sm">{mentor.company}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{mentor.bio}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map(skill => (
                        <span key={skill} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {mentor.achievements.map(achievement => (
                        <li key={achievement} className="flex items-center">
                          <Award className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{mentor.courses.length} courses</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{mentor.students.toLocaleString()} students</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a href={mentor.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={mentor.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={mentor.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={mentor.social.email} className="text-gray-400 hover:text-red-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alumni Success Stories</h2>
            <p className="text-xl text-gray-600">
              Our graduates are making impact at leading companies and startups worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumni.map((alum, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={alum.image}
                    alt={alum.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{alum.name}</h3>
                    <p className="text-purple-700 font-semibold">{alum.role}</p>
                    <p className="text-gray-600 text-sm">{alum.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{alum.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-200">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$85K</div>
              <div className="text-purple-200">Average Starting Salary</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-200">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Learn from the Best?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Join our community of learners and get mentored by industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Courses
            </button>
            <button className="border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;