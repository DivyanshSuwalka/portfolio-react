import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/Card";
import Badge from "../ui/Badge";
import { resumeData } from "../../data/resume";
import { Code, Database, Settings, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      items: resumeData.skills.languages,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    },
    {
      title: "Frameworks / Libraries",
      icon: Layers,
      items: resumeData.skills.frameworks,
      color:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    },
    {
      title: "Databases",
      icon: Database,
      items: resumeData.skills.databases,
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
    },
    {
      title: "Developer Tools / Cloud",
      icon: Settings,
      items: resumeData.skills.tools,
      color:
        "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
    },
  ];

  // const primarySkills = [
  //   { name: "React", level: "Expert", color: "from-blue-500 to-blue-700" },
  //   {
  //     name: "JavaScript",
  //     level: "Advanced",
  //     color: "from-yellow-500 to-yellow-700",
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     level: "Advanced",
  //     color: "from-teal-500 to-teal-700",
  //   },
  //   {
  //     name: "Node.js",
  //     level: "Intermediate",
  //     color: "from-green-500 to-green-700",
  //   },
  //   {
  //     name: "Express",
  //     level: "Intermediate",
  //     color: "from-gray-600 to-gray-800",
  //   },
  //   {
  //     name: "MongoDB",
  //     level: "Intermediate",
  //     color: "from-green-600 to-green-800",
  //   },
  //   {
  //     name: "Mongoose",
  //     level: "Intermediate",
  //     color: "from-red-500 to-red-700",
  //   },
  //   {
  //     name: "JWT",
  //     level: "Intermediate",
  //     color: "from-purple-500 to-purple-700",
  //   },
  //   { name: "HTML", level: "Expert", color: "from-orange-500 to-orange-700" },
  //   { name: "CSS", level: "Expert", color: "from-blue-400 to-blue-600" },
  //   {
  //     name: "SQL",
  //     level: "Intermediate",
  //     color: "from-indigo-500 to-indigo-700",
  //   },
  //   { name: "Java", level: "Intermediate", color: "from-red-600 to-red-800" },
  //   { name: "Git", level: "Advanced", color: "from-orange-600 to-orange-800" },
  //   { name: "GitHub", level: "Advanced", color: "from-gray-700 to-gray-900" },
  //   {
  //     name: "Postman",
  //     level: "Intermediate",
  //     color: "from-pink-500 to-pink-700",
  //   },
  // ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital
            experiences
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                hover
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        size="sm"
                        className="hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Primary Skills Showcase */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Core Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {primarySkills.map((skill, index) => (
              <Card
                key={index}
                hover
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center`}
                >
                  <span className="text-white text-xl font-bold">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}
                </p>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Skills Progress Visualization */}
        <Card className="p-8">
          <CardTitle className="text-center mb-8">Experience Level</CardTitle>
          <div className="space-y-4">
            {[
              { skill: "Frontend Development", percentage: 90 },
              { skill: "React Ecosystem", percentage: 85 },
              { skill: "JavaScript/ES6+", percentage: 90 },
              { skill: "CSS/Tailwind", percentage: 80 },
              { skill: "Backend Development", percentage: 85 },
              { skill: "Database Design", percentage: 80 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.skill}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
