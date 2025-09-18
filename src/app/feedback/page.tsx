import { MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import { EXTERNAL_LINKS } from "@/data/constants";

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
            <h1 className="text-4xl font-bold text-gray-900">
              Your Feedback Matters
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Help us improve Nirnaya to better serve the Nepali community
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Feedback Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Share Your Thoughts
              </h2>
              <p className="text-gray-600 mb-6">
                We value your input and suggestions. Please share your feedback
                using the form below:
              </p>

              {/* Google Forms Embed */}
              <div className="bg-white border border-gray-200 rounded-lg p-2">
                <iframe
                  src={EXTERNAL_LINKS.googleForms.feedback}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Feedback Form"
                >
                  Loading feedback form...
                </iframe>
              </div>
            </div>

            {/* What We're Looking For */}
            <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                What Kind of Feedback Helps Most?
              </h3>
              <ul className="space-y-2 text-gray-600">
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
        </div>
      </div>
    </div>
  );
}
