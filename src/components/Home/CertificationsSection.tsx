import React, { useRef, useEffect, useState } from "react";
import { Award, ExternalLink, Medal, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  iconColor: string;
  featured?: boolean;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    date: "November 2024",
    credentialUrl:
      "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs115/Course/NPTEL24CS115S75290006903955989.pdf",
    iconColor: "text-orange-500",
    featured: true,
  },
  {
    id: 2,
    title: "Introduction to Python for Data Science",
    issuer: "NPTEL",
    date: "March 2024",
    credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs54/Course/NPTEL24CS54S54270025330052130.pdf",
    iconColor: "text-purple-500",
    featured: true,
  },
  {
    id: 3,
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: "HarvardX EDX",
    date: "August 2024",
    credentialUrl:
      "https://courses.edx.org/certificates/0d48e68a0ffe45aa844ecb3210e400ea",
    iconColor: "text-blue-500",
    featured: true,
   
  },
  {
    id: 4,
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard EDX",
    date: "August 2024",
    credentialUrl:
      "https://courses.edx.org/certificates/78072fe4d127446e8cbca850ae76b7b3",
    iconColor: "text-indigo-500",
    featured: true,

  },
  {
    id: 5,
    title: "Prompt Engineering and Advanced ChatGPT",
    issuer: "EDX",
    date: "July 2024",
    credentialUrl:
      "https://courses.edx.org/certificates/6356db0ddcfa4c148969dcbf57d6440d",
    iconColor: "text-emerald-500",
    featured: true,
  },
  {
    id: 6,
    title: "Introduction to Prompt Engineering",
    issuer: "IBM Edx",
    date: "July 2024",
    credentialUrl:
      "https://courses.edx.org/certificates/42251c79f7884bf68826d8a012e2c311",
    iconColor: "text-yellow-600",
    featured: true,
  },
  {
    id: 7,
    title: "SQL and Relational Databases 101",
    issuer: "Cognitive Class, IBM",
    date: "July 2024",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/4d5924523fc44585934250133df1965f",
    iconColor: "text-cyan-500",
    featured: true,
  },
  {
    id: 8,
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON",
    date: "Otober 2023",
    credentialUrl: "Tcs ion edge.pdf",
    iconColor: "text-red-500",
    featured: true,
  },
  {
    id: 9,
    title: "Full Stack Development J2EE and web-2.0 Technologies",
    issuer: "Vizag Steel Plant(RINL)",
    date: "June 2024",
    credentialUrl: "Steel Plant Certificate.pdf",
    iconColor: "text-green-500",
    featured: true,
  },
  {
    id: 10,
    title: "Model Smart IoT Systems using Arduino and AI - Bootcamp on Artificial Intelligence and IoT”",
    issuer: "KAIDOKO AUTOMATION SOLUTIONS PRIVATE LIMITED ",
    date: "December 2023",
    credentialUrl: "AI & IOT.pdf",
    iconColor: "text-blue-500",
    featured: true,
  },
  {
    id: 11,
    title: " Salesforce Developer Virtual Internship",
    issuer: "Salesforce",
    date: "June 2024",
    credentialUrl: "salesforce certificate.pdf",
    iconColor: "text-pink-500",
    featured: true,
  },
  {
    id: 12,
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    date: "May 2024",
    credentialUrl: "https://www.credly.com/badges/c803581f-e2ed-4426-b24f-3530da10381e/print",
    iconColor: "text-white-500",
    featured: true,
  },
];

const CertificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimationStarted(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const displayedCertifications = showAll
    ? certifications
    : certifications.slice(0, 6);

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:via-teal-900/10 dark:to-cyan-900/20 relative"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Add floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-500/30 rounded-full animate-ping"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-cyan-400/20 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Add decorative patterns */}
        <div className="absolute top-12 right-12 opacity-10">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path
              d="M60 0L110.718 30V90L60 120L9.28203 90V30L60 0Z"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="absolute bottom-12 left-12 opacity-10 rotate-45">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle
              cx="40"
              cy="40"
              r="39"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative inline-block">
            <h2 className="section-title">
              Certifications
              <span className="absolute -right-10 -top-6">
                <Medal className="w-5 h-5 text-teal-500/60 dark:text-teal-400/60 animate-pulse-slow" />
              </span>
            </h2>
          </div>
          <p className="text-center max-w-2xl text-muted-foreground mt-4 mb-12">
            Professional certifications that validate my expertise and continuous
            learning in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertifications.map((cert, index) => (
            <Card
              key={cert.id}
              className={cn(
                "bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm border border-teal-100 dark:border-teal-900/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300",
                "opacity-0",
                animationStarted ? "animate-scale-in" : "",
                hoveredCard === cert.id
                  ? "shadow-lg border-teal-300/30 dark:border-teal-700/30 transform scale-[1.02]"
                  : "",
                cert.featured
                  ? "ring-1 ring-teal-300/20 dark:ring-teal-500/20"
                  : ""
              )}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0">
                <div className="p-6 relative">
                  <div
                    className={cn(
                      "absolute top-6 right-6 p-2 rounded-full transition-all duration-300",
                      cert.iconColor.replace("text-", "bg-") + "/10",
                      hoveredCard === cert.id ? "scale-125" : ""
                    )}
                  >
                    <Award className={cn("w-5 h-5", cert.iconColor)} />
                  </div>

                  {cert.featured && (
                    <div className="absolute -top-1 -left-1 p-1.5 bg-teal-500/10 dark:bg-teal-400/20 rounded-br-lg">
                      <Star
                        size={14}
                        className="text-teal-600 dark:text-teal-400 fill-current"
                      />
                    </div>
                  )}

                  <h3 className="font-display font-semibold text-lg pr-12 mb-1 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1">
                    {cert.issuer}
                    {cert.featured && (
                      <span className="inline-flex ml-1">
                        <Sparkles
                          size={12}
                          className="text-amber-500 dark:text-amber-400"
                        />
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground/80 mt-1">
                    {cert.date}
                  </p>

                  {cert.credentialUrl && (
                    <div
                      className={cn(
                        "mt-4 transition-all duration-300",
                        hoveredCard === cert.id
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-80"
                      )}
                    >
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group"
                      >
                        View Credential
                        <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  )}

                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-1 bg-gradient-to-r",
                      cert.iconColor.replace("text-", "from-") + "/40",
                      "to-transparent",
                      "w-0 transition-all duration-700",
                      hoveredCard === cert.id ? "w-full" : ""
                    )}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-2 px-6 py-3 font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            <span>{showAll ? "Show Fewer Certifications" : "View All Certifications"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "lucide lucide-arrow-right transition-transform group-hover:translate-x-1",
                showAll ? "rotate-180" : ""
              )}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;