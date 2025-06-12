import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, DollarSign, Clock, Users, Award } from 'lucide-react';

const EDUFAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      title: 'Course Information',
      icon: BookOpen,
      faqs: [
        {
          question: 'What programming languages will I learn?',
          answer: 'Our courses primarily focus on Python, which is the industry standard for AI/ML and data science. We also cover JavaScript for web development, SQL for databases, and other languages based on specific course requirements.'
        },
        {
          question: 'Do I need prior programming experience?',
          answer: 'No prior programming experience is required for our foundational courses. We start with the basics and gradually build up to advanced concepts. However, some advanced courses may have prerequisites.'
        },
        {
          question: 'How are courses structured?',
          answer: 'Each course combines theoretical concepts with hands-on projects. You\'ll have weekly lectures, practical assignments, group projects, and one-on-one mentorship sessions. All courses culminate in a capstone project.'
        },
        {
          question: 'Can I switch between courses?',
          answer: 'Yes, you can switch between courses within the first two weeks of enrollment. Our academic advisors will help you find the best fit based on your goals and background.'
        }
      ]
    },
    {
      title: 'Enrollment & Pricing',
      icon: DollarSign,
      faqs: [
        {
          question: 'What are the course fees?',
          answer: 'Course fees range from $249 to $449 depending on duration and complexity. We offer payment plans, scholarships for underrepresented groups, and corporate training packages. Contact us for specific pricing details.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a 100% refund within the first 7 days of course enrollment if you\'re not satisfied. After that, refunds are prorated based on course completion percentage.'
        },
        {
          question: 'Are there any additional costs?',
          answer: 'Course fees include all learning materials, software licenses, and cloud computing credits. The only additional cost might be optional textbooks or certification exam fees.'
        },
        {
          question: 'Do you offer scholarships?',
          answer: 'Yes, we offer need-based scholarships and diversity scholarships covering up to 50% of course fees. We also have partnerships with organizations that sponsor students from underrepresented backgrounds.'
        }
      ]
    },
    {
      title: 'Schedule & Format',
      icon: Clock,
      faqs: [
        {
          question: 'Are courses self-paced or scheduled?',
          answer: 'We offer both options. Most courses have structured schedules with live sessions and deadlines, but we also offer self-paced versions for working professionals. Hybrid options are available.'
        },
        {
          question: 'How much time do I need to commit?',
          answer: 'Expect to dedicate 8-12 hours per week for most courses. This includes attending live sessions, completing assignments, and working on projects. Time commitment varies by course intensity.'
        },
        {
          question: 'Can I attend if I work full-time?',
          answer: 'Absolutely! Many of our students are working professionals. We offer evening classes, weekend intensives, and flexible scheduling options to accommodate work schedules.'
        },
        {
          question: 'What if I miss a live session?',
          answer: 'All live sessions are recorded and available within 24 hours. You can also schedule one-on-one catch-up sessions with instructors or teaching assistants.'
        }
      ]
    },
    {
      title: 'Support & Community',
      icon: Users,
      faqs: [
        {
          question: 'What kind of support do students receive?',
          answer: 'Students get access to 24/7 technical support, academic advisors, career counselors, and peer study groups. We also have office hours with instructors and one-on-one mentorship sessions.'
        },
        {
          question: 'Is there a student community?',
          answer: 'Yes! We have an active online community with discussion forums, study groups, project collaboration spaces, and networking events. Many students form lasting professional relationships.'
        },
        {
          question: 'Do you provide career services?',
          answer: 'Yes, we offer comprehensive career services including resume reviews, interview preparation, portfolio development, and job placement assistance. Our career success rate is 95%.'
        },
        {
          question: 'Can I get help with job applications?',
          answer: 'Absolutely! Our career team helps with job search strategies, application reviews, and interview preparation. We also have partnerships with 500+ companies for direct placement opportunities.'
        }
      ]
    },
    {
      title: 'Certification & Credentials',
      icon: Award,
      faqs: [
        {
          question: 'Will I receive a certificate?',
          answer: 'Yes, you\'ll receive a verified certificate upon successful completion of each course. Certificates include blockchain verification and are recognized by our industry partners.'
        },
        {
          question: 'Are certificates industry-recognized?',
          answer: 'Our certificates are recognized by 500+ partner companies including Google, Microsoft, Amazon, and many startups. We\'re also working toward accreditation with major professional bodies.'
        },
        {
          question: 'Can I add certificates to LinkedIn?',
          answer: 'Yes, all our certificates can be easily added to LinkedIn, and we provide guidance on how to showcase your skills and projects effectively on professional networks.'
        },
        {
          question: 'Do you offer degree programs?',
          answer: 'Currently, we offer professional certificates and specializations. We\'re developing partnerships with universities for degree pathways and are planning to launch our own accredited programs soon.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="h-16 w-16 text-indigo-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Find answers to common questions about our courses, enrollment process, and learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-indigo-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div key={faqIndex} className="bg-white rounded-lg shadow-md">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        {openFAQ === globalIndex ? (
                          <ChevronUp className="h-5 w-5 text-indigo-700 flex-shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-indigo-700 flex-shrink-0 ml-4" />
                        )}
                      </button>
                      {openFAQ === globalIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Our student support team is here to help you make the right decision for your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Success by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-indigo-200">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-indigo-200">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">48hrs</div>
              <div className="text-indigo-200">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EDUFAQ;