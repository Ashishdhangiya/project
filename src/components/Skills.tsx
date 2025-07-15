import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Next.js', level: 88 },
        { name: 'Vite', level: 85 },
        { name: 'Git', level: 92 },
        { name: 'Webpack', level: 80 },
        { name: 'Jest', level: 85 },
        { name: 'Figma', level: 88 },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 78 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Firebase', level: 85 },
        { name: 'REST APIs', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 200}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;