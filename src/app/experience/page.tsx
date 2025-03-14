const experiences = [
  {
    title: 'Student Consultant',
    company: 'Abbott Laboratories',
    location: 'Singapore, Singapore',
    period: '2024 - Present',
    description: [
      'Led a team of 4 as part of the Final Year Systems Design Project',
      'Designed data pipeline to simulate plant operations using Flexsim and Excel.',
      'Presented insights to stakeholders for informed decision-making',
    ],
  },
  {
    title: 'Machine Learning Tech Lead',
    company: 'NUS FinTech Society',
    location: 'Singapore',
    period: '2024 - Present',
    description: [
      'Developed credit scoring with explainable AI',
      'Enchanced model explanability for stakeholders',
      'Developed web application for visualization'
    ],
  },
  {
    title: 'Algorithm Engineer',
    company: 'Global OneClick',
    location: 'Shenzhen, Guangdong',
    period: '2024 - 2024',
    description: [
      'Devised Custom Google Tags for enhanced data collection',
      'Conducted market research and engaged with clients for business development',
      'Presented insights to clients and improved advertising efficiency'
    ],
  },
  {
    title: 'IOT Engineer',
    company: 'ConcreteAI',
    location: 'Singapore, Singapore',
    period: '2023 - 2023',
    description: [
      'Prototyped cellular connectivity solutions for IOT Networking',
      'Improved data collection for intermitent connectivity',
      'Successfully reduced network bottlenecks and improved data collection'
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Work Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {experience.company} • {experience.location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {experience.period}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 