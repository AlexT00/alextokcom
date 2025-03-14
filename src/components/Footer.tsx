import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/AlexT00' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alexander-tok-1a23b1236/' },
    { name: 'Email', href: 'mailto:alexander.tokjs@gmail.com' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:-translate-y-0.5"
              >
                <span className="sr-only">{item.name}</span>
                {item.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Alexander Tok. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 