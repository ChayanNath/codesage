'use client';

import { Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in">
              <span className="gradient-text">AI-Powered</span> Code Reviews for
              <span className="relative inline-block ml-2">
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
                <span className="relative">Modern Teams</span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Stop wasting time on manual code reviews. Let AI catch issues, suggest improvements, 
              and help your team build better software.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="/login" passHref>
              <Button size="lg" className="w-full sm:w-auto group">
                <Github className="mr-2 h-5 w-5" />
                Connect with GitHub
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>

          <div className="flex items-center gap-4 justify-center flex-wrap">
            <p className="text-sm text-muted-foreground">Trusted by developers from:</p>
            <div className="flex gap-6 flex-wrap text-muted-foreground font-medium text-sm">
              <span>Google</span>
              <span>Microsoft</span>
              <span>Amazon</span>
              <span>Meta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
