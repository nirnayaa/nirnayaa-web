import { BookOpen, CheckCircle, Users, Vote } from "lucide-react";
import { ElectionCountdown } from "@/components/election-countdown";
import { StructuredData } from "@/components/structured-data";
import { electionEventSchema } from "@/data/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <StructuredData data={electionEventSchema} />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Vote className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Nirnaya
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Empowering Nepali citizens to make informed voting decisions
              through candidate education and awareness
            </p>
          </header>

          {/* Election Countdown */}
          <div className="mb-16">
            <ElectionCountdown />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Know Your Candidates</CardTitle>
                <CardDescription>
                  Learn about candidates' backgrounds, experience, and track
                  records to make educated choices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Understand Promises</CardTitle>
                <CardDescription>
                  Compare manifestos and campaign promises to see which align
                  with your values and priorities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Make Informed Decisions</CardTitle>
                <CardDescription>
                  Use comprehensive information to vote confidently for
                  candidates who represent your interests.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-center">
            <Card className="max-w-md">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Coming Soon
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  Nepal's Most Comprehensive Platform
                </CardTitle>
                <CardDescription>
                  We're building Nepal's most comprehensive voter education
                  platform
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="outline" className="text-xs">
                  Currently in development - Education module POC
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
