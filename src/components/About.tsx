import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            About Ashish
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated Frontend Developer with a passion for creating beautiful, functional, and user-centered digital experiences. With expertise in modern web technologies, I transform creative ideas into interactive reality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development has been driven by curiosity and a love for problem-solving. I enjoy working with cutting-edge technologies and staying up-to-date with the latest industry trends to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or learning about emerging technologies that shape the future of web development.
            </p>
          </div>

          <div className="grid gap-6" data-aos="fade-left">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Clean Code</h3>
              </div>
              <p className="text-gray-700">
                Writing maintainable, scalable, and efficient code that follows best practices and industry standards.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-500 p-3 rounded-lg">
                  <Palette className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Design Focus</h3>
              </div>
              <p className="text-gray-700">
                Creating visually appealing interfaces with attention to detail and user experience principles.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Performance</h3>
              </div>
              <p className="text-gray-700">
                Optimizing applications for speed, accessibility, and excellent user experience across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;