import { BookOpen, CheckCircle, Users, Vote } from "lucide-react";
import { ElectionCountdown } from "@/components/election-countdown";
import { StructuredData } from "@/components/structured-data";
import { electionEventSchema } from "@/data/schema";

export default function Home() {
  return (
    <>
      <StructuredData data={electionEventSchema} />
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Vote className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Nirnaya</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Nepali citizens to make informed voting decisions through
            candidate education and awareness
          </p>
        </header>

        {/* Election Countdown */}
        <div className="mb-16">
          <ElectionCountdown />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Know Your Candidates
            </h3>
            <p className="text-gray-600">
              Learn about candidates' backgrounds, experience, and track records
              to make educated choices.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Understand Promises
            </h3>
            <p className="text-gray-600">
              Compare manifestos and campaign promises to see which align with
              your values and priorities.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Make Informed Decisions
            </h3>
            <p className="text-gray-600">
              Use comprehensive information to vote confidently for candidates
              who represent your interests.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-md text-center">
            <div className="mb-4">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                Coming Soon
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Nepal's Most Comprehensive Platform
            </h3>
            <p className="text-gray-600 mb-4">
              We're building Nepal's most comprehensive voter education platform
            </p>
            <span className="inline-block bg-gray-50 text-gray-700 px-3 py-1 rounded-md border border-gray-200 text-xs">
              Currently in development - Education module POC
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
