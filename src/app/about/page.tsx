export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>
        
        {/* Bio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Who am I
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate ML and Data enthusiast. I have years of experience building ML pipelines and AI Research.
            Feel free to reach out if you're interested to discuss!
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'JavaScript/TypeScript',
              'React/Next.js',
              'Node.js',
              'Python',
              'SQL/NoSQL',
              'AWS',
              'Docker',
              'Git',
              'CI/CD',
              'Google Cloud',
              'SciKit-Learn',
              'Tensorflow',
              'PyTorch',
              'PostgreSQL'
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <p className="text-gray-900 dark:text-white">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Bachelor of Engineering (Industrial and Systems Engineering)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                National University of Singapore • 2021 - 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 