import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Filter,
  Lightbulb,
  Scale,
  Search,
  Shield,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Voter Education Blog",
  description:
    "Comprehensive articles and guides about voting rights, candidate evaluation, and democratic participation in Nepal.",
};

export default function VoterEducationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              Voter Education Blog
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Learn about voting rights, candidate evaluation, and democratic
            participation through our comprehensive articles
          </p>
        </header>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-4 w-4" />
                    <Input
                      placeholder="Search articles and guides..."
                      className="pl-10 border-blue-300 focus:border-blue-500"
                      disabled
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    disabled
                    className="flex items-center gap-2 border-blue-300 text-blue-600 hover:bg-blue-100"
                  >
                    <Filter className="h-4 w-4" />
                    All Categories
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-blue-600">
                Search and filtering functionality coming soon!
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="default"
              className="cursor-pointer bg-blue-600 hover:bg-blue-700"
            >
              Voting Rights
            </Badge>
            <Badge
              variant="secondary"
              className="cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Candidate Evaluation
            </Badge>
            <Badge
              variant="secondary"
              className="cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Democratic Process
            </Badge>
            <Badge
              variant="secondary"
              className="cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Election Laws
            </Badge>
            <Badge
              variant="secondary"
              className="cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Civic Engagement
            </Badge>
            <Badge
              variant="secondary"
              className="cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Voter Registration
            </Badge>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow duration-200 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="default" className="bg-blue-600">
                    Voting Rights
                  </Badge>
                  <div className="flex items-center text-sm text-blue-500">
                    <Clock className="h-4 w-4 mr-1" />5 min read
                  </div>
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Understanding Your Voting Rights in Nepal
                </CardTitle>
                <CardDescription>
                  A comprehensive guide to your fundamental voting rights and
                  civic responsibilities as a Nepali citizen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-blue-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Coming Soon
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1 text-blue-600" />
                    Essential Guide
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-blue-300 text-blue-600 hover:bg-blue-50"
                  disabled
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-200 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    Candidate Evaluation
                  </Badge>
                  <div className="flex items-center text-sm text-blue-500">
                    <Clock className="h-4 w-4 mr-1" />8 min read
                  </div>
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  How to Evaluate Political Candidates
                </CardTitle>
                <CardDescription>
                  Learn the key questions to ask and criteria to consider when
                  evaluating candidates for office.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-blue-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Coming Soon
                  </div>
                  <div className="flex items-center">
                    <Scale className="h-4 w-4 mr-1 text-blue-600" />
                    In-Depth Analysis
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-blue-300 text-blue-600 hover:bg-blue-50"
                  disabled
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-200 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    Democratic Process
                  </Badge>
                  <div className="flex items-center text-sm text-blue-500">
                    <Clock className="h-4 w-4 mr-1" />6 min read
                  </div>
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Making Informed Voting Decisions
                </CardTitle>
                <CardDescription>
                  Research strategies and red flags to help you make
                  well-informed choices at the ballot box.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-blue-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Coming Soon
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="h-4 w-4 mr-1 text-yellow-600" />
                    Research Guide
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-blue-300 text-blue-600 hover:bg-blue-50"
                  disabled
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-shadow duration-200 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    Civic Engagement
                  </Badge>
                  <div className="flex items-center text-sm text-blue-500">
                    <Clock className="h-4 w-4 mr-1" />4 min read
                  </div>
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Beyond Voting: Democratic Participation
                </CardTitle>
                <CardDescription>
                  Discover other ways to participate in Nepal's democracy beyond
                  casting your vote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-blue-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Coming Soon
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-blue-600" />
                    Community Guide
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-blue-300 text-blue-600 hover:bg-blue-50"
                  disabled
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-200 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    Voter Registration
                  </Badge>
                  <div className="flex items-center text-sm text-blue-500">
                    <Clock className="h-4 w-4 mr-1" />3 min read
                  </div>
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Voter Registration Guide for Nepal
                </CardTitle>
                <CardDescription>
                  Step-by-step instructions for registering to vote and updating
                  your voter information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-blue-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Coming Soon
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                    How-To Guide
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-blue-300 text-blue-600 hover:bg-blue-50"
                  disabled
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <Card className="text-center bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Stay Updated</CardTitle>
            <CardDescription className="text-blue-700">
              Subscribe to our newsletter for the latest voter education
              articles and election updates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="border-blue-300 focus:border-blue-500"
                disabled
              />
              <Button className="bg-blue-600 hover:bg-blue-700" disabled>
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-600 mt-4">
              Newsletter subscription coming soon!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
