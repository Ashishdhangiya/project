import React from 'react';
import { Mail, Linkedin, Github, Download, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Gmail',
      content: 'ashishdhangiya@gmail.com',
      link: 'mailto:ashishdhangiya@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '7042136926',
      link: 'tel:7042136926',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'New Delhi, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      link: 'http://www.linkedin.com/in/ashish-dhingya-60112827b',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      link: 'https://github.com/Ashishdhangiya',
      color: 'bg-gray-800 hover:bg-gray-900',
    },
    {
      icon: <Download size={24} />,
      title: 'Resume',
      link: 'https://white-cathrin-24.tiiny.site/',
      color: 'bg-green-600 hover:bg-green-700',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <div className="text-blue-600">{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <span className="text-gray-600">{info.content}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 group`}
                    title={social.title}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="4a8b62cc-c672-4358-b100-00490795de62" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  name='name'
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  name='email'
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  name='name'
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;