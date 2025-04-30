import React from "react";
import { Calendar, MapPin, School, Award } from "lucide-react";
import ScrollObserver from "@/components/Layout/ScrollObserver";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
}

const EducationSection: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      institution: "Anil Neerukonda Institute of Technology and Sciences (ANITS)",
      duration: "2021 - 2025",
      location: "Visakhapatnam, India",
      description:
        "Studied Computer Science and Engineering(CSE) with a focus on web development, Artificial Intelligence, Machine Learning, and Internet of Things.",
      achievements: ["Class Representative", "Student Co-ordinator"],
    },
    {
      id: 2,
      degree: "Intermediate Education",
      institution: "Sasi Junior College",
      duration: "2019 - 2021",
      location: "Visakhapatnam, India",
      description:
        "I excelled in my intermediate education, honing my analytical skills and deepening my interest in technology and innovation.",
      achievements: ["Academic Excellence Award"],
    },
    {
      id: 3,
      degree: "Matriculation",
      institution: "Sasi English Medium High School",
      duration: "2018-2019",
      location: "Visakhapatnam, India",
      description:
        "I completed my matriculation with distinction, laying a strong foundation in academics and problem-solving skills that fuel my passion for technology and development.",
      achievements: ["Top Performer Award"],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 dark:from-gray-900 dark:to-gray-800/30"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 dark:bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Wrap with ScrollObserver if available; otherwise, render directly */}
        {typeof ScrollObserver !== "undefined" ? (
          <ScrollObserver animationClass="section-transition-fade" threshold={0.1}>
            <div className="text-center mb-16">
              <h2 className="section-title mb-4 dark:text-white">Education Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My academic background and continuous learning path that has shaped my professional expertise.
              </p>
            </div>
          </ScrollObserver>
        ) : (
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 dark:text-white">Education Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and continuous learning path that has shaped my professional expertise.
            </p>
          </div>
        )}

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gradient-to-b from-primary/70 via-accent to-primary/70 dark:from-blue-600/70 dark:via-purple-600 dark:to-blue-600/70 rounded-full" />

          {educationData.map((item, index) =>
            typeof ScrollObserver !== "undefined" ? (
              <ScrollObserver
                key={item.id}
                animationClass={index % 2 === 0 ? "section-transition-slide" : "section-transition-fade"}
                threshold={0.1}
                delay={index * 200}
              >
                <div
                  className={`relative mb-16 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-20 md:ml-auto" : "md:pl-20 md:ml-1/2"
                  }`}
                >
                  <div className="relative">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 hover-lift text-left">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-primary dark:text-blue-400">
                          <School className="w-5 h-5" />
                          <h3 className="text-xl font-display font-bold">{item.degree}</h3>
                        </div>

                        <h4 className="text-lg font-medium">{item.institution}</h4>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <p className="mt-2 text-muted-foreground">{item.description}</p>

                        {item.achievements && item.achievements.length > 0 && (
                          <div className="mt-3">
                            <h5 className="font-medium text-sm flex items-center gap-1 mb-2">
                              <Award className="w-4 h-4 text-accent dark:text-purple-400" />
                              Achievements
                            </h5>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="text-sm flex items-center gap-2 text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-purple-400" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Branching line from box to timeline */}
                    <div
                      className={`absolute top-6 h-0.5 bg-primary dark:bg-blue-600 z-20 ${
                        index % 2 === 0
                          ? "left-[-5rem] w-[5rem]"
                          : "right-[-5rem] w-[5rem] left-auto"
                      }`}
                    ></div>
                    {/* Dot at timeline intersection */}
                    <div
                      className={`absolute top-6 w-3 h-3 rounded-full bg-primary dark:bg-blue-600 border-2 border-white dark:border-gray-800 z-20 ${
                        index % 2 === 0 ? "left-[-5rem]" : "right-[-5rem]"
                      }`}
                    ></div>
                  </div>
                </div>
              </ScrollObserver>
            ) : (
              <div
                key={item.id}
                className={`relative mb-16 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-20 md:ml-auto" : "md:pl-20 md:ml-1/2"
                }`}
              >
                <div className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 hover-lift text-left">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-primary dark:text-blue-400">
                        <School className="w-5 h-5" />
                        <h3 className="text-xl font-display font-bold">{item.degree}</h3>
                      </div>

                      <h4 className="text-lg font-medium">{item.institution}</h4>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <p className="mt-2 text-muted-foreground">{item.description}</p>

                      {item.achievements && item.achievements.length > 0 && (
                        <div className="mt-3">
                          <h5 className="font-medium text-sm flex items-center gap-1 mb-2">
                            <Award className="w-4 h-4 text-accent dark:text-purple-400" />
                            Achievements
                          </h5>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm flex items-center gap-2 text-muted-foreground"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-purple-400" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Branching line from box to timeline */}
                  <div
                    className={`absolute top-6 h-0.5 bg-primary dark:bg-blue-600 z-20 ${
                      index % 2 === 0
                        ? "left-[-5rem] w-[5rem]"
                        : "right-[-5rem] w-[5rem] left-auto"
                    }`}
                  ></div>
                  {/* Dot at timeline intersection */}
                  <div
                    className={`absolute top-6 w-3 h-3 rounded-full bg-primary dark:bg-blue-600 border-2 border-white dark:border-gray-800 z-20 ${
                      index % 2 === 0 ? "left-[-5rem]" : "right-[-5rem]"
                    }`}
                  ></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;