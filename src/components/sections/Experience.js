import React from "react";
import { Card, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";
import { resumeData } from "../../data/resume";
import { Building, MapPin, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key accomplishments in frontend
            development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Experience Card */}
                <div
                  className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card hover className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold mb-3">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <Badge
                        variant={index === 0 ? "success" : "secondary"}
                        size="sm"
                      >
                        {index === 0 ? "Current" : "Previous"}
                      </Badge>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map(
                          (responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {responsibility}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Tech Stack for each role */}
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {index === 0
                          ? // Current role technologies
                            [
                              "Node.js",
                              "AWS S3",
                              "TypeScript",
                              "RESTful backend",
                              "MySQL",
                              "Express.js",
                            ].map((tech, techIndex) => (
                              <Badge key={techIndex} variant="skill" size="sm">
                                {tech}
                              </Badge>
                            ))
                          : // Previous role technologies
                            [
                              "React.js",
                              "HTML5",
                              "CSS3",
                              "Bootstrap",
                              "Node.js",
                              "MySQL",
                              "PostgreSQL",
                            ].map((tech, techIndex) => (
                              <Badge key={techIndex} variant="tech" size="sm">
                                {tech}
                              </Badge>
                            ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="text-center p-6 animate-fade-in">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2+
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Years Experience
            </p>
          </Card>
          <Card
            className="text-center p-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              3
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Companies
            </p>
          </Card>
          <Card
            className="text-center p-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              10+
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Projects Completed
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
