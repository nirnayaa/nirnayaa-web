import { Filter, Search, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Know Your Candidates",
  description:
    "Learn about candidates running in Nepal's elections. Discover their backgrounds, experience, promises, and track records to make informed voting decisions.",
};

export default function CandidatesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-foreground">
              Know Your Candidates
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Learn about the candidates running for office and their track
            records
          </p>
        </header>

        {/* Coming Soon Section */}
        <div className="bg-card border rounded-lg p-8 text-center">
          <div className="max-w-md mx-auto">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We're working hard to compile comprehensive candidate information
              including:
            </p>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Candidate backgrounds and experience</li>
              <li>• Past and current campaign promises</li>
              <li>• Voting records and achievements</li>
              <li>• Educational and professional history</li>
              <li>• Contact information and social media</li>
            </ul>
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Stay tuned!</strong> This section will be populated as
                we approach the 2026 elections.
              </p>
            </div>
          </div>
        </div>

        {/* Future Features Preview */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-card border rounded-lg p-6">
            <Search className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Search & Filter</h3>
            <p className="text-muted-foreground text-sm">
              Find candidates by constituency, party, name, or key issues that
              matter to you.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Filter className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Compare Candidates</h3>
            <p className="text-muted-foreground text-sm">
              Side-by-side comparison of candidates' positions, experience, and
              promises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
