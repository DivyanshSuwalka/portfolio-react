import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/Card";
import Button from "../ui/Button";
import { resumeData } from "../../data/resume";
import { copyToClipboard } from "../../utils/helpers";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (text, field) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: resumeData.personal.email,
      href: `mailto:${resumeData.personal.email}`,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    },
    {
      icon: Phone,
      title: "Phone",
      value: resumeData.personal.phone,
      href: `tel:${resumeData.personal.phone}`,
      color:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    },
    {
      icon: MapPin,
      title: "Location",
      value: resumeData.personal.location,
      href: "#",
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
    },
  ];

  // const socialLinks = [
  //   {
  //     icon: Github,
  //     title: "GitHub",
  //     href: resumeData.personal.github,
  //     color:
  //       "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100",
  //     description: "@DivyanshSuwalka",
  //   },
  //   {
  //     icon: Linkedin,
  //     title: "LinkedIn",
  //     href: resumeData.personal.linkedin,
  //     color:
  //       "hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300",
  //     description: "Divyansh Suwalka",
  //   },
  //   {
  //     icon: Mail,
  //     title: "Email",
  //     href: `mailto:${resumeData.personal.email}`,
  //     color:
  //       "hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-600 dark:hover:text-red-300",
  //     description: "Professional",
  //   },
  // ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you. I'm currently open
                to new opportunities and excited to work on challenging and
                impactful projects.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((contact, index) => {
                const IconComponent = contact.icon;
                const isCopiable = contact.title !== "Location";
                return (
                  <Card key={index} hover className="group">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${contact.color}`}
                          >
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">
                              {contact.title}
                            </p>
                            {contact.href !== "#" ? (
                              <a
                                href={contact.href}
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-gray-600 dark:text-gray-400">
                                {contact.value}
                              </p>
                            )}
                          </div>
                        </div>
                        {isCopiable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopy(contact.value, contact.title)
                            }
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedField === contact.title ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            {/* <div className="flex flex-row">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      onClick={() => window.open(social.href, "_blank")}
                      className={`justify-start p-4 h-auto ${social.color} transition-all duration-300`}
                    >
                      <IconComponent className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">{social.title}</div>
                        <div className="text-sm opacity-75">
                          {social.description}
                        </div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div> */}
          </div>

          {/* Right Side - CTA Card */}
          <div className="flex items-center justify-center animate-slide-up">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  Ready to collaborate?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-gray-600 dark:text-gray-400">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's build something amazing together!
                </p>

                <div className="space-y-4">
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() =>
                      (window.location.href = `mailto:${resumeData.personal.email}?subject=Project Inquiry&body=Hi Divyansh, I'd like to discuss a potential project/opportunity with you.`)
                    }
                    className="w-full font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://drive.google.com/file/d/1C6OpnffLaZY-d-E548K3C5MoUqvZamPs/view?usp=sharing", "_blank")}
                    className="w-full"
                  >
                    📄 Download Resume
                  </Button>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Response time:{" "}
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      Usually within 24 hours
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>💡</span>
            <p className="text-sm">
              Have an interesting project? I'd love to hear about it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
