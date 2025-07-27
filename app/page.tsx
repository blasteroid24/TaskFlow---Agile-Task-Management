"use client";

import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckSquare,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Trello,
} from "lucide-react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

export default function HomePage() {
  const { isSignedIn, user } = useUser();

  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Organize your tasks with intuitive drag-and-drop boards",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team in real-time",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Next.js 15 for optimal performance",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with Clerk authentication",
    },
  ];

  return (
   <div className="min-h-screen bg-gradient-to-tr from-[#fff9f0] via-white to-[#e6f2ff]">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800 mb-6">
            Your team’s mission control,{" "}
            <span className="text-teal-600">reimagined.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Work smarter, collaborate better, and move faster. TrelloClone brings your
            team’s ideas into motion with beautiful workflows and seamless interactions.
          </p>

          {!isSignedIn && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-6 rounded-xl shadow-md transition">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>
              <Button
                variant="outline"
                className="text-teal-600 border-teal-500 text-lg px-8 py-6 rounded-xl hover:bg-teal-50"
              >
                Watch Demo
              </Button>
            </div>
          )}
        </motion.div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Designed to move your ideas forward
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Everything you need to get organized, stay focused, and collaborate without limits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition rounded-2xl">
                <CardHeader className="text-center">
                  <div className="mx-auto w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-500">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-20 rounded-t-3xl">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to build better workflows?</h2>
          <p className="text-lg text-teal-100 mb-8 max-w-xl mx-auto">
            Join thousands of productive teams using TrelloClone to stay in sync and get things done.
          </p>

          {!isSignedIn && (
            <SignUpButton>
              <Button className="bg-white text-teal-600 font-semibold px-8 py-5 rounded-xl hover:bg-teal-100 text-lg">
                Try it now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignUpButton>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-500 py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Trello className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold text-gray-700">TrelloClone</span>
          </div>
          <div className="text-sm space-x-6">
            <span>© 2024 TrelloClone. All rights reserved.</span>
            <span>Built with Next.js + Clerk</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
