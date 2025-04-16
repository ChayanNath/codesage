
import { Code, Shield, Zap, GitPullRequest, Bot, Lock } from 'lucide-react';

const features = [
  {
    icon: GitPullRequest,
    title: "Automated Code Reviews",
    description: "Automatically review Pull Requests as they're opened. Get feedback in minutes, not days."
  },
  {
    icon: Shield,
    title: "Security Scanning",
    description: "Detect security vulnerabilities, SQL injections, and unsafe code patterns before they reach production."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Identify performance bottlenecks and receive AI-powered suggestions to make your code faster."
  },
  {
    icon: Code,
    title: "Code Quality Metrics",
    description: "Track code quality over time with detailed metrics, complexity analysis, and readability scores."
  },
  {
    icon: Bot,
    title: "Auto-Fix Suggestions",
    description: "Let AI suggest fixes for common issues and apply them with a single click."
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Your code never leaves your infrastructure. All analysis happens in a secure environment."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Powerful Features for Modern Dev Teams
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Everything you need to streamline code reviews and ship better code, faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
