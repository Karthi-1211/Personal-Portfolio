import React, { useState, useEffect } from "react";
import { Quote, Star, User, Send, Loader2, RefreshCw } from "lucide-react";
import ScrollObserver from "@/components/Layout/ScrollObserver";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  // Initial hardcoded testimonials
  const initialTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Y.T.R.Shinee",
      role: "Human Resource Manager",
      company: "Cognizant",
      content:
        "Working with this developer was a game-changer for our business. They delivered a stunning website that perfectly captured our brand identity. Their attention to detail and responsive design skills are exceptional.",
      rating: 5,
    },
    {
      id: 2,
      name: "S.Sai Komal",
      role: "Product Manager",
      company: "Hansa Solutions",
      content:
        "I am thoroughly impressed with the quality of work. The developer took my vague concept and turned it into a beautiful, functional website that exceeded my expectations. Their communication was excellent throughout the project.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ch.Bobby",
      role: "Product Manager",
      company: "Infosys",
      content:
        "The attention to detail and commitment to delivering high-quality work is outstanding. The website not only looks great but performs exceptionally well. I highly recommend their services to anyone looking for top-tier web development.",
      rating: 4,
    },
  ];

  // Load testimonials from localStorage or use initialTestimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("testimonials");
      try {
        return stored ? JSON.parse(stored) : initialTestimonials;
      } catch (error) {
        console.error("Error parsing localStorage testimonials:", error);
        return initialTestimonials;
      }
    }
    return initialTestimonials;
  });

  const [showForm, setShowForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  type TestimonialFormValues = {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  };

  const form = useForm<TestimonialFormValues>({
    defaultValues: {
      name: "",
      role: "",
      company: "",
      content: "",
      rating: 5,
    },
  });

  // Save testimonials to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
  }, [testimonials]);

  // Reset testimonials to initialTestimonials and clear localStorage
  const handleResetTestimonials = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("testimonials");
      setTestimonials(initialTestimonials);
      toast({
        title: "Testimonials Reset",
        description: "Loaded the latest default testimonials.",
      });
    }
  };

  const onSubmit = async (data: TestimonialFormValues) => {
    setIsSubmitting(true);

    // Web3Forms API endpoint
    const url = "https://api.web3forms.com/submit";

    // Prepare the form data with the Web3Forms access key
    const formData = {
      access_key: "764ec9a4-f4f7-4da3-8eb6-2cb0f0e6a61d",
      ...data,
      subject: "New Testimonial Submission",
      from_name: "Portfolio Testimonial Form",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        const newTestimonial: Testimonial = {
          id: Math.max(...testimonials.map((t) => t.id), 0) + 1,
          ...data,
        };

        // Append new testimonial (default)
        setTestimonials((prev) => [newTestimonial, ...prev]);

        // Alternative: Replace testimonials (uncomment to enable)
        // setTestimonials([newTestimonial]);

        form.reset();
        setShowForm(false);
        setSubmitSuccess(true);

        toast({
          title: "Testimonial sent!",
          description: "Thank you for your feedback. It has been submitted successfully.",
        });

        // Hide success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        throw new Error(result.message || "Failed to submit testimonial");
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
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
      id="testimonials"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

        {/* Floating quotes */}
        <div className="absolute top-20 left-20 text-primary/10 dark:text-blue-900/20">
          <Quote size={80} />
        </div>
        <div className="absolute bottom-20 right-20 text-accent/10 dark:text-purple-900/20">
          <Quote size={60} />
        </div>
      </div>

      <div className="container relative z-10">
        <ScrollObserver animationClass="section-transition-fade" threshold={0.1}>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 dark:text-white">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Don't take my word for it - here's what my clients have to say about working with me.
            </p>
            <div className="flex justify-center gap-4">
              {!showForm && (
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-br from-primary to-accent hover:from-accent hover:to-primary text-white dark:text-white"
                >
                  Share Your Experience <Send className="ml-2 h-4 w-4" />
                </Button>
              )}
              <Button
                onClick={handleResetTestimonials}
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-600/10"
              >
                Reset Testimonials <RefreshCw className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md">
                Thank you for your testimonial! It has been added successfully.
              </div>
            )}
          </div>
        </ScrollObserver>

        {showForm && (
          <ScrollObserver animationClass="section-transition-fade" threshold={0.1}>
            <div className="max-w-2xl mx-auto mb-16 bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Share Your Experience</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" required {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" required {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Role</FormLabel>
                        <FormControl>
                          <Input placeholder="CEO, Designer, etc." required {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Testimonial</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share your experience working with me..."
                            className="min-h-[120px]"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rating</FormLabel>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className="focus:outline-none transition-transform hover:scale-110"
                              onClick={() => field.onChange(star)}
                            >
                              <Star
                                size={24}
                                className={`${
                                  star <= field.value
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300 dark:text-gray-600"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                        <FormDescription>How would you rate your experience?</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end gap-3 pt-2">
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Testimonial"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </ScrollObserver>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <ScrollObserver
              key={testimonial.id}
              animationClass="section-transition-fade"
              threshold={0.1}
              delay={testimonial.id * 200}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative h-full flex flex-col">
                <div className="absolute -top-4 -left-4 text-accent dark:text-purple-500">
                  <Quote className="w-8 h-8 fill-accent/10 dark:fill-purple-700/20" />
                </div>

                <div className="mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-lg italic mb-8 flex-grow">{testimonial.content}</p>

                <div className="flex items-center mt-auto">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent dark:from-blue-600 dark:to-purple-600 flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollObserver>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;