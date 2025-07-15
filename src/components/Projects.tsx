import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, and secure payment integration.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ashish/ecommerce-platform',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Real-time'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ashish/task-manager',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles and smooth animations. Built with React, TypeScript, and Tailwind CSS with AOS animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'AOS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ashish/portfolio',
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard with location-based forecasts, beautiful data visualizations, and responsive design. Integrated with OpenWeatherMap API.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Chart.js', 'API Integration', 'PWA'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ashish/weather-dashboard',
    },
    {
      title: 'Social Media App',
      description: 'A modern social media application with user profiles, post creation, real-time messaging, and social interactions. Built with React and Firebase.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Real-time', 'Social Features'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ashish/social-app',
    },
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking application with workout logging, progress visualization, and goal setting. Features responsive design and data persistence.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Local Storage', 'Charts', 'Responsive'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ashish/fitness-tracker',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            A showcase of my recent work and creative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-800" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Github size={16} className="text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;