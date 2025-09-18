import { BookOpen, CheckCircle, Users, Vote } from "lucide-react";

export default function Home() {
  return (
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
            Empowering Nepali citizens to make informed voting decisions through
            candidate education and awareness
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Know Your Candidates
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn about candidates' backgrounds, experience, and track records
              to make educated choices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Understand Promises
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Compare manifestos and campaign promises to see which align with
              your values and priorities.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Make Informed Decisions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use comprehensive information to vote confidently for candidates
              who represent your interests.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-lg p-8 inline-block">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-blue-100 mb-4">
              We're building Nepal's most comprehensive voter education platform
            </p>
            <div className="text-sm text-blue-200">
              Currently in development - Education module POC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
