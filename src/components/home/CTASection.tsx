'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 p-8 md:p-12 shadow-sm border border-primary/10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to transform your code review process?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of developers who are shipping better code faster with RepoGuardian.
              Get started today with our 14-day free trial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Link href="/login" className="flex-1">
                <Button size="lg" className="w-full group">
                  <Github className="mr-2 h-5 w-5" />
                  Connect GitHub
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Contact Sales
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
