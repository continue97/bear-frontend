"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

const SignIn = () => {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen bg-black">
      <div className="w-1/2 relative hidden md:block">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient
              id="Gradient1"
              cx="50%"
              cy="50%"
              fx="0.441602%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="34s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="rgba(255, 0, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 0, 255, 0)" />
            </radialGradient>
            <radialGradient
              id="Gradient2"
              cx="50%"
              cy="50%"
              fx="2.68147%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="23.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="rgba(255, 0, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 0, 255, 0)" />
            </radialGradient>
            <radialGradient
              id="Gradient3"
              cx="50%"
              cy="50%"
              fx="0.836536%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="21.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="rgba(0, 255, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
            </radialGradient>
            <pattern
              id="pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#Gradient1)" />
              <rect width="100" height="100" fill="url(#Gradient2)" />
              <rect width="100" height="100" fill="url(#Gradient3)" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md border-zinc-800 bg-zinc-900/50 backdrop-blur">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-medium text-center text-white">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center text-zinc-400">
              Sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full h-11 text-white bg-transparent border-zinc-700 hover:bg-zinc-800 hover:text-gray-200"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-900 px-2 text-zinc-500">
                  or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleEmailSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-400">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-zinc-400">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-white text-black hover:bg-zinc-200"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
