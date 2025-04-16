'use client';

import Link from 'next/link';
import { Github, Code2, Settings, BarChart2, User, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <header className="container border-b border-border sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm mx-auto">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-accent" />
            <span className="font-bold text-xl gradient-text">RepoGuardian</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {isLoggedIn && (
            <>
              <Link href="/dashboard" className="navbar-item">Dashboard</Link>
              <Link href="/repositories" className="navbar-item">Repositories</Link>
              <Link href="/reviews" className="navbar-item">Reviews</Link>
            </>
          )}
          <Link href="/pricing" className="navbar-item">Pricing</Link>
          <Link href="/about" className="navbar-item">About</Link>
        </nav>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-destructive">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link href="/login">
                <Button>
                  <Github className="mr-2 h-4 w-4" />
                  Connect with GitHub
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
