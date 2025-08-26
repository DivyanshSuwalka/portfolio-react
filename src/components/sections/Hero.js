import React from 'react';
import { resumeData } from '../../data/resume';
import Button from '../ui/Button';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float dark:opacity-10" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000 dark:opacity-10" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000 dark:opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm{' '}
                <span className="text-gradient">
                  {resumeData.personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light">
                {resumeData.personal.title}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {resumeData.personal.professionalSummary}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="gradient" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="font-semibold"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="font-semibold"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open(resumeData.personal.github, '_blank')}
                className="p-3 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open(resumeData.personal.linkedin, '_blank')}
                className="p-3 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = `mailto:${resumeData.personal.email}`}
                className="p-3 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Send Email"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 relative">
                {/* Profile Image Placeholder with DS */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-600 dark:text-gray-300 font-mono">
                      DS
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center animate-float shadow-lg">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <span className="text-white text-lg">💻</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-ping shadow-lg">
                  <span className="text-white text-sm">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
