'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "RepoGuardian has cut our code review time in half. The AI catches issues I would have missed, and the auto-fix feature is a game changer.",
    author: "Sarah Chen",
    role: "Senior Developer at TechCorp",
    avatar: "/placeholder.svg"
  },
  {
    quote: "As a team lead, I love the insights dashboard. It helps us track progress and identify areas where we need to focus our learning.",
    author: "Marcus Johnson",
    role: "Engineering Manager at StartupX",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The security scanning feature caught a critical vulnerability before we deployed to production. It probably saved us from a major incident.",
    author: "Alex Rivera",
    role: "Security Engineer at SecureData",
    avatar: "/placeholder.svg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Hear what our users have to say about how RepoGuardian has improved their development workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-card border-border overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col h-full justify-between gap-6">
                  <blockquote className="text-lg">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
