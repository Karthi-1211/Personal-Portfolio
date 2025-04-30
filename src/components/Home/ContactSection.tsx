import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms API endpoint
    const url = "https://api.web3forms.com/submit";

    // Prepare the form data with the Web3Forms access key
    const data = {
      access_key: "764ec9a4-f4f7-4da3-8eb6-2cb0f0e6a61d", // Replace with your actual Web3Forms access key
      ...formData,
      // Optional: Customize the email subject or sender name
      subject: formData.subject || "New Contact Form Submission",
      from_name: "Portfolio Contact Form",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-container relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-60 bg-gradient-to-b from-secondary/30 to-transparent opacity-50"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
          <div
            className="md:col-span-2 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/50 hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-primary/20 text-primary rounded-lg group-hover:bg-primary/30 transition-colors dark:bg-blue-600/30 dark:text-blue-400 dark:group-hover:bg-blue-600/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:balukarthik1308@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    balukarthik1308@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/50 hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-primary/20 text-primary rounded-lg group-hover:bg-primary/30 transition-colors dark:bg-blue-600/30 dark:text-blue-400 dark:group-hover:bg-blue-600/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919515607788"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9515607788
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/50 hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-primary/20 text-primary rounded-lg group-hover:bg-primary/30 transition-colors dark:bg-blue-600/30 dark:text-blue-400 dark:group-hover:bg-blue-600/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Anakapalle, Visakhapatnam, India</p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-8 p-5 bg-white/80 dark:bg-gray-800/50 rounded-xl shadow-sm backdrop-blur-sm border border-white/50 dark:border-white/5">
              <h4 className="font-medium mb-3">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  {
                    name: "github",
                    url: "https://github.com/Karthi-1211",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    ),
                  },
                  {
                    name: "linkedin",
                    url: "https://www.linkedin.com/in/balu-karthik/",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    name: "twitter",
                    url: "https://x.com/?lang=en",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    ),
                  },
                  {
                    name: "instagram",
                    url: "https://www.instagram.com/",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="p-2 bg-primary/10 rounded-full text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 dark:bg-blue-600/20 dark:hover:bg-blue-600"
                    aria-label={`Follow on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="md:col-span-3 animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 bg-white/80 dark:bg-gray-800/50 rounded-xl shadow-sm backdrop-blur-sm border border-white/50 dark:border-white/5 hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-input bg-background/80 px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary transition-all duration-300 dark:bg-gray-900/30 dark:border-gray-700"
                    placeholder="Balu Karthik"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-input bg-background/80 px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary transition-all duration-300 dark:bg-gray-900/30 dark:border-gray-700"
                    placeholder="balu@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                  >
                  Comments
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-lg border border-input bg-background/80 px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary transition-all duration-300 dark:bg-gray-900/30 dark:border-gray-700"
                  placeholder="Your Comment"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="block w-full rounded-lg border border-input bg-background/80 px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary transition-all duration-300 resize-none dark:bg-gray-900/30 dark:border-gray-700"
                  placeholder="Tell me about my work..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 dark:bg-blue-600"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;