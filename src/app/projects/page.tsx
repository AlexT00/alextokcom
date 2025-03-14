import Link from 'next/link';

const projects = [
  {
    title: 'NUS Property Network',
    description: 'Full Stack Web App built with TypeScript for P2P Property Booking',
    technologies: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL'],
    image: '/project1.jpg',
    link: 'https://github.com/bdonong/IT2002---The-App',
  },
  {
    title: 'HDB Resale Price Prediction',
    description: 'Machine Learning Project to Predict HDB Resale Prices',
    technologies: ['R', 'Python', 'Scikit-Learn'],
    image: '/project2.jpg',
    link: 'https://github.com/AlexT00/HDB_Resale_Data',
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                {/* Add your project image here */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 