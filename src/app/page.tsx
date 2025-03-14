'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center">
            <motion.div 
              className="relative w-32 h-32 mx-auto mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/profile.jpg"
                alt="Alexander Tok"
                fill
                className="rounded-full object-cover"
                priority
              />
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl font-light text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="font-normal text-blue-600">
                Alexander Tok
              </span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg text-gray-700 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm a passionate developer crafting beautiful and functional web experiences.
              Specialized in building modern web applications with cutting-edge technologies.
            </motion.p>
            <motion.div 
              className="mt-10 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="px-5 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                View My Work →
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Get in Touch →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <motion.div 
          className="max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl font-light text-center text-gray-800 mb-4"
            variants={fadeInUp}
          >
            Featured Skills
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-600 text-center mb-12"
            variants={fadeInUp}
          >
            My core expertise areas
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Machine Learning', icon: '🤖', description: 'Developing and deploying ML models' },
              { name: 'Data Analytics', icon: '📊', description: 'Data-driven insights and visualization' },
              { name: 'MLOps', icon: '⚙️', description: 'ML pipeline automation and deployment' },
              { name: 'LLM & Prompt Engineering', icon: '🧠', description: 'Large language models and AI systems' },
            ].map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative min-h-screen w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-2xl font-light text-center text-gray-800 mb-4"
              variants={fadeInUp}
            >
              Work Experience
            </motion.h2>
            <motion.p 
              className="text-sm text-gray-600 text-center mb-12"
              variants={fadeInUp}
            >
              My professional journey
            </motion.p>
            
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  company: 'Abbott Laboratories',
                  role: 'Student Consultant',
                  location: 'Singapore, Singapore',
                  period: '2024 - Present',
                  description: [
                    'Led a team of 4 as part of the Final Year Systems Design Project',
                    'Designed data pipeline to simulate plant operations using Flexsim and Excel',
                    'Presented insights to stakeholders for informed decision-making'
                  ]
                },
                {
                  company: 'NUS FinTech Society',
                  role: 'Machine Learning Tech Lead',
                  location: 'Singapore',
                  period: '2024 - Present',
                  description: [
                    'Developed credit scoring with explainable AI',
                    'Enhanced model explanability for stakeholders',
                    'Developed web application for visualization'
                  ]
                },
                {
                  company: 'Global OneClick',
                  role: 'Algorithm Engineer',
                  location: 'Shenzhen, Guangdong',
                  period: '2024 - 2024',
                  description: [
                    'Devised Custom Google Tags for enhanced data collection',
                    'Conducted market research and engaged with clients for business development',
                    'Presented insights to clients and improved advertising efficiency'
                  ]
                },
                {
                  company: 'ConcreteAI',
                  role: 'IOT Engineer',
                  location: 'Singapore, Singapore',
                  period: '2023 - 2023',
                  description: [
                    'Prototyped cellular connectivity solutions for IOT Networking',
                    'Improved data collection for intermittent connectivity',
                    'Successfully reduced network bottlenecks and improved data collection'
                  ]
                }
              ].map((job) => (
                <motion.div
                  key={job.company}
                  variants={fadeInUp}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{job.role}</h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">{job.period}</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    {job.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <motion.div 
          className="max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl font-light text-center text-gray-800 mb-4"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-600 text-center mb-12"
            variants={fadeInUp}
          >
            Some of my recent work
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Student PropertyGuru',
                description: 'Website designed to help room sharing more assessible around NUS',
                image: '/project1.jpg',
                tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
                link: 'https://github.com/bdonong/IT2002---The-App'
              },
              {
                title: 'HDB Price Prediction',
                description: 'Predicting HDB Resale Price using a mixed modelling approach',
                image: '/project2.jpg',
                tags: ['SciKit-Learn', 'Tensorflow', 'R', 'Python'],
                link: 'https://github.com/AlexT00/HDB_Resale_Data'
              }
            ].map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="group relative bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.h2 
              className="text-xl font-light text-gray-800 mb-4"
              variants={fadeInUp}
            >
              Tech Stack
            </motion.h2>
            <motion.p 
              className="text-sm text-gray-600 mb-8"
              variants={fadeInUp}
            >
              Technologies I work with
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-2"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
                'Python', 'SQL', 'MongoDB', 'AWS', 'Docker', 'Git'
              ].map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeInUp}
                  className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-50 rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <motion.div 
          className="max-w-2xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.h2 
              className="text-2xl font-light text-gray-800 mb-4"
              variants={fadeInUp}
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              className="text-sm text-gray-600 mb-12"
              variants={fadeInUp}
            >
              Let's work together on your next project
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="mailto:tokalexander00@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="sr-only">Email</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alexander-tok-1a23b1236/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.273-1.16-1.273-1.17 0-1.33.91-1.33 1.235v5.642h-3v-11h3v1.493c.5-.923 1.6-1.368 2.5-1.368 1.86 0 2.23.979 2.23 2.481v6.394z"/>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/AlexT00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-600">
                    Feel free to reach out for collaborations or just a friendly chat
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
