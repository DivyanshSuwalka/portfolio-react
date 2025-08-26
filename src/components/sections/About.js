import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';
import { resumeData } from '../../data/resume';
import { GraduationCap, Award, MapPin, Calendar, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      value: "55%",
      label: "Performance Boost",
      description: "Website optimization",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
    },
    {
      icon: Award,
      value: "1+",
      label: "Years Experience",
      description: "Frontend development",
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
    },
    {
      icon: TrendingUp,
      value: "30%",
      label: "Deploy Time Cut",
      description: "CI/CD optimization",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
    },
    {
      icon: Award,
      value: "92",
      label: "Lighthouse Score",
      description: "Accessibility rating",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Description */}
          <div className="space-y-6 animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {resumeData.personal.summary}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} hover className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${highlight.color}`}>
                        <span className="text-xl font-bold">{highlight.value}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{highlight.label}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Side - Education & Certifications */}
          <div className="space-y-6 animate-slide-up">
            {/* Education */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-3">Education</CardTitle>
                    <div className="space-y-3">
                      <p className="font-medium text-gray-900 dark:text-white">{resumeData.education.degree}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          {resumeData.education.university}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {resumeData.education.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {resumeData.education.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-4">Certifications</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.certificates.map((cert, index) => (
                        <Badge key={index} variant="secondary" size="sm">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            {/* <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl mb-2">📍</p>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">{resumeData.personal.location}</p>
                  </div>
                  <div>
                    <p className="text-3xl mb-2">✅</p>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Available</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">For opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
