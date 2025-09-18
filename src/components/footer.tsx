import { Heart, Vote } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  platform: [
    { name: "Know Candidates", href: "/candidates" },
    { name: "Voting Information", href: "/voting-info" },
    { name: "Voter Education", href: "/voter-education" },
    { name: "Feedback", href: "/feedback" },
  ],
  support: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Vote className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Nirnaya</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Empowering Nepali citizens to make informed voting decisions
              through comprehensive candidate education and election awareness.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              निर्णय - आफ्नो मतको सदुपयोग गर्नुहोस्
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nirnaya. Built for the people of Nepal.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-2 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for democracy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
