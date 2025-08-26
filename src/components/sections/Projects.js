import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { resumeData } from '../../data/resume';
import { Github, ExternalLink, Calendar, Star } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to build them
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <Card key={index} hover className="group overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Project Header with Icon */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6">
                <div className="text-4xl mb-3">{project.icon}</div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" size="sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.date}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Featured</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                    <div className="font-semibold text-sm text-blue-600 dark:text-blue-400">
                      {index === 0 ? '32%' : index === 1 ? '30%' : '25%'}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {index === 0 ? 'CLS Reduced' : index === 1 ? 'DB Faster' : 'Session ↑'}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                    <div className="font-semibold text-sm text-green-600 dark:text-green-400">
                      {index === 0 ? '40%' : index === 1 ? '100%' : '10+'}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {index === 0 ? 'API Faster' : index === 1 ? 'Test Coverage' : 'Bugs Fixed'}
                    </p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex space-x-3 w-full">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects and contributions to open-source repositories.
            </p>
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => window.open(resumeData.personal.github, '_blank')}
              className="font-semibold"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects
            </Button>
          </Card>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6">
          {[
            { number: '3', label: 'Featured Projects', icon: '🚀' },
            { number: '55%', label: 'Avg Performance Boost', icon: '⚡' },
            { number: '92', label: 'Lighthouse Score', icon: '🎯' },
            { number: '100%', label: 'Test Coverage', icon: '✅' }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.number}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
