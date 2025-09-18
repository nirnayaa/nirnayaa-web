import { Calendar, ExternalLink, FileText, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voting Information",
  description:
    "Essential voting information for Nepal's elections. Learn where to register, check your registration status, and find your polling station.",
};

export default function VotingInfoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-foreground">
              Voting Information
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about voting in Nepal's elections
          </p>
        </header>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border rounded-lg p-6">
            <Calendar className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Election Date</h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">
              March 5, 2026
            </p>
            <p className="text-muted-foreground">
              Mark your calendar! The next major elections are scheduled for
              March 5, 2026.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Voter Registration</h3>
            <p className="text-muted-foreground mb-4">
              Ensure you're registered to vote in your constituency.
            </p>
            <div className="space-y-2">
              <Link
                href="https://www.election.gov.np"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
              >
                Check Registration Status{" "}
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
              <Link
                href="https://www.election.gov.np"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
              >
                Register to Vote <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Information Sections */}
        <div className="space-y-8">
          <section className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              How to Register to Vote
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Eligibility Requirements:
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Must be 18 years or older on election day</li>
                  <li>Must be a Nepali citizen</li>
                  <li>
                    Must reside in the constituency where you want to vote
                  </li>
                  <li>Must not be declared mentally incompetent by a court</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Required Documents:
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Citizenship certificate</li>
                  <li>
                    Proof of residence (utility bill, rental agreement, etc.)
                  </li>
                  <li>Passport-size photograph</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Finding Your Polling Station
            </h2>
            <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-amber-800 dark:text-amber-200">
                <strong>Coming Soon:</strong> We'll provide an easy way to find
                your polling station using your address or voter ID number.
              </p>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Important Deadlines</h2>
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Note:</strong> Specific registration deadlines will be
                announced by the Election Commission of Nepal closer to the
                election date.
              </p>
            </div>
          </section>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            For official information, contact the Election Commission of Nepal
          </p>
          <Link
            href="https://www.election.gov.np"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Visit Election Commission Website{" "}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
