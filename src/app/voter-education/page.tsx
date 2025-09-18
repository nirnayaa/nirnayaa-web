import {
  BookOpen,
  CheckCircle,
  Lightbulb,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voter Education",
  description:
    "Learn about your voting rights, how to evaluate candidates, and make informed decisions in Nepal's democratic process.",
};

export default function VoterEducationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-foreground">
              Voter Education
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Understand your rights and responsibilities as a voter in Nepal's
            democracy
          </p>
        </header>

        {/* Your Voting Rights */}
        <section className="bg-card border rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold">Your Voting Rights</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">You Have the Right To:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Vote in secret without interference
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Receive assistance if you need help voting
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Report voting irregularities or violations
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Access polling stations without discrimination
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Your Responsibilities:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Register to vote before deadlines
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Stay informed about candidates and issues
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Respect others' right to vote freely
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Participate peacefully in the democratic process
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Evaluate Candidates */}
        <section className="bg-card border rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Scale className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold">
              How to Evaluate Candidates
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Lightbulb className="h-5 w-5 text-yellow-600 mr-2" />
                Key Questions to Ask
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    Experience & Qualifications
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• What is their educational background?</li>
                    <li>• Do they have relevant work experience?</li>
                    <li>• Have they held public office before?</li>
                    <li>• What are their key achievements?</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Positions & Promises</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• What are their key policy positions?</li>
                    <li>• How do their promises align with your values?</li>
                    <li>• Are their plans realistic and achievable?</li>
                    <li>• How will they fund their proposals?</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Character & Integrity</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Do they have a history of keeping promises?</li>
                    <li>• Have they been involved in any scandals?</li>
                    <li>• How do they treat people who disagree with them?</li>
                    <li>• Are they accessible to constituents?</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Community Connection</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Do they understand local issues?</li>
                    <li>• How involved are they in the community?</li>
                    <li>• Do they listen to different viewpoints?</li>
                    <li>• How will they represent all constituents?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Making Informed Decisions */}
        <section className="bg-card border rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold">
              Making Informed Decisions
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Research Tips
              </h3>
              <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                <li>• Read candidate websites and manifestos carefully</li>
                <li>• Attend local debates and town halls when possible</li>
                <li>• Check multiple news sources for balanced coverage</li>
                <li>• Talk to neighbors and community members</li>
                <li>• Verify information from reliable, official sources</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                Red Flags to Watch For
              </h3>
              <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                <li>• Candidates who make unrealistic promises</li>
                <li>• Those who refuse to discuss specific policies</li>
                <li>
                  • Candidates who attack opponents personally rather than on
                  issues
                </li>
                <li>
                  • Anyone who spreads misinformation or conspiracy theories
                </li>
                <li>• Those who don't engage with the community</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Democratic Participation */}
        <section className="bg-card border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Beyond Voting: Democratic Participation
          </h2>
          <p className="text-muted-foreground mb-4">
            Voting is just one part of being an active citizen. Here are other
            ways to participate in Nepal's democracy:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium mb-2">Stay Informed</h3>
              <p className="text-sm text-muted-foreground">
                Follow local news and government activities
              </p>
            </div>
            <div className="text-center p-4">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium mb-2">Engage Locally</h3>
              <p className="text-sm text-muted-foreground">
                Attend town halls and community meetings
              </p>
            </div>
            <div className="text-center p-4">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium mb-2">Hold Officials Accountable</h3>
              <p className="text-sm text-muted-foreground">
                Contact representatives about important issues
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
