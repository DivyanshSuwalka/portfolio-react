import React from 'react';
import { resumeData } from '../../data/resume';
import Button from '../ui/Button';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${resumeData.personal.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {resumeData.personal.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <a 
                  href={`tel:${resumeData.personal.phone}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {resumeData.personal.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{resumeData.personal.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open(resumeData.personal.github, '_blank')}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open(resumeData.personal.linkedin, '_blank')}
                className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = `mailto:${resumeData.personal.email}`}
                className="p-2 hover:bg-red-100 dark:hover:bg-red-900"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 text-sm">
              <span>© {currentYear} {resumeData.personal.name}. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and React</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleScrollToTop}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Back to top ↑
              </button>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Built with React & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
