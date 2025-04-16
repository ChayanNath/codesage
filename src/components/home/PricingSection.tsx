'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Free",
    description: "For individuals and small projects",
    price: {
      monthly: 0,
      annually: 0
    },
    features: [
      "Up to 3 repositories",
      "Basic code analysis",
      "Security vulnerability scanning",
      "GitHub integration",
      "5 PRs per day"
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    description: "For professional developers and teams",
    price: {
      monthly: 19,
      annually: 190
    },
    features: [
      "Up to 10 repositories",
      "Advanced code analysis",
      "Performance optimization",
      "Security vulnerability scanning",
      "Auto-fix suggestions",
      "20 PRs per day",
      "Priority support"
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    price: {
      monthly: 99,
      annually: 990
    },
    features: [
      "Unlimited repositories",
      "Custom rules and patterns",
      "Advanced security scanning",
      "Performance optimization",
      "Auto-fix suggestions",
      "Unlimited PRs",
      "Custom integrations",
      "Dedicated support",
      "SSO / SAML authentication"
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Choose the plan that's right for you and start improving your code today.
          </p>

          <div className="flex items-center space-x-3 mt-6">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={billingCycle === 'annually'}
              onCheckedChange={(checked) => setBillingCycle(checked ? 'annually' : 'monthly')}
            />
            <div className="flex items-center">
              <span className={`text-sm ${billingCycle === 'annually' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annually
              </span>
              <span className="ml-2 text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-0.5">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`card-hover relative ${plan.popular ? 'border-primary shadow-md' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-medium rounded-full px-3 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${plan.price[billingCycle]}
                  </span>
                  {plan.price[billingCycle] > 0 && (
                    <span className="text-muted-foreground ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  )}
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/signup" className="w-full">
                  <Button className="w-full" variant={plan.buttonVariant}>
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground cursor-help">
                  Need a custom plan?
                  <HelpCircle className="h-4 w-4 ml-1" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>Contact our sales team for custom plans tailored to your organization's specific needs.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="mt-2">
            <Link href="/contact" className="text-primary hover:underline text-sm">
              Contact our sales team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
