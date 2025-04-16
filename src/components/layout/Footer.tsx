'use client';

import Link from 'next/link';
import { Github, Code2, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-accent" />
              <span className="font-bold text-xl gradient-text">RepoGuardian</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              AI-powered code reviews that help your team build better software.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</Link></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} RepoGuardian. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Built with ❤️ for developers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
