import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback",
  description:
    "Share your feedback, suggestions, and ideas to help improve the Nirnaya platform. Your input helps us serve the Nepali community better.",
};

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-foreground">
              Your Feedback Matters
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Help us improve Nirnaya to better serve the Nepali community
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <div>
            <div className="bg-card border rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Share Your Thoughts
              </h2>
              <p className="text-muted-foreground mb-6">
                We value your input and suggestions. Please share your feedback
                using the form below:
              </p>

              {/* Google Forms Embed */}
              <div className="bg-muted/30 border-2 border-dashed border-muted rounded-lg p-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Feedback Form</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our feedback form will be embedded here using Google Forms
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>Coming Soon:</strong> We're setting up a
                    comprehensive feedback system to collect your valuable
                    input.
                  </p>
                </div>
              </div>
            </div>

            {/* What We're Looking For */}
            <div className="mt-8 bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-4">
                What Kind of Feedback Helps Most?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Suggestions for improving user experience
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Ideas for new features or content
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Reports of technical issues or bugs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Content accuracy or fact-checking
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Accessibility improvements
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Language and translation suggestions
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-card border rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      For detailed feedback or technical issues
                    </p>
                    <a
                      href="mailto:feedback@nirnaya.app"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      feedback@nirnaya.app
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      For urgent issues or media inquiries
                    </p>
                    <p className="text-blue-600 text-sm">Coming Soon</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Physical address for formal correspondence
                    </p>
                    <p className="text-blue-600 text-sm">Kathmandu, Nepal</p>
                    <p className="text-muted-foreground text-xs">
                      (Exact address coming soon)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="mt-8 bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Community Guidelines</h3>
              <p className="text-muted-foreground text-sm mb-4">
                To maintain a respectful and productive environment, please:
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Be respectful and constructive in your feedback</li>
                <li>• Avoid sharing personal information of others</li>
                <li>• Focus on issues rather than personal attacks</li>
                <li>• Provide specific examples when reporting problems</li>
                <li>• Use appropriate language suitable for all audiences</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Response Time
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                We aim to respond to all feedback within 48-72 hours. Critical
                issues will be addressed immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
