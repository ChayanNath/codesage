'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Github, Code2, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Connect Your GitHub Repository",
    description: "Link your GitHub account and select the repositories you want to monitor. Setup takes less than 2 minutes.",
  },
  {
    number: "02",
    title: "AI Analyzes Your Pull Requests",
    description: "When PRs are opened, our AI automatically reviews the code for issues, best practices, and security vulnerabilities.",
  },
  {
    number: "03",
    title: "Get Actionable Insights",
    description: "Receive detailed comments directly in your PR. Each issue includes an explanation and suggested fix.",
  },
  {
    number: "04",
    title: "Improve Code Quality Over Time",
    description: "Track your progress on the dashboard and watch as your codebase becomes cleaner, safer, and more efficient.",
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              How RepoGuardian Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Our AI-powered code review platform integrates seamlessly with your workflow.
              No complicated setup, no disruption to your team's process.
            </p>

            <div className="space-y-8 mt-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/login" passHref>
                <Button className="group">
                  <Github className="mr-2 h-5 w-5" />
                  Start Using RepoGuardian
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Mockup */}
          <div className="rounded-lg border border-border bg-card p-1 shadow-lg">
            <div className="rounded-md bg-secondary p-4 space-y-6">
              <div className="flex items-center space-x-2 border-b border-border pb-4">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="font-medium">Pull Request #42: Add user authentication</span>
              </div>

              {/* Simulated code review comments */}
              <div className="space-y-4">
                {[
                  {
                    title: "Security Issue",
                    message: "Detected hardcoded API key in authentication.js",
                    suggestion: "Store sensitive values in environment variables"
                  },
                  {
                    title: "Performance",
                    message: "Inefficient array operation in userList.js",
                    suggestion: "Replace .forEach with .map for better performance"
                  },
                  {
                    title: "Best Practice",
                    message: "Missing error handling in async function",
                    suggestion: "Add try/catch block to handle potential errors"
                  }
                ].map((comment, i) => (
                  <div key={i} className="p-3 rounded-md bg-card border border-border">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-sm">{comment.title}</span>
                      <span className="text-xs text-muted-foreground">File: users/auth.js</span>
                    </div>
                    <p className="text-sm my-2">{comment.message}</p>
                    <div className="flex items-center text-xs text-primary">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      <span>Suggestion: {comment.suggestion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
