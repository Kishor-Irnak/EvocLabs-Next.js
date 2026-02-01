import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onCareersClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCareersClick }) => {
  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
                <Image
                  src="/EvocLab_Logo.png"
                  alt="Evoc Labs Logo"
                  width={20}
                  height={20}
                  className="opacity-80"
                />
              </div>
              <span className="font-semibold text-lg tracking-tight text-text-main">
                Evoc Labs
              </span>
            </div>
            <p className="text-text-muted max-w-sm mb-6 leading-relaxed">
              Data-driven performance marketing for brands ready to scale. No
              fluff, just profit.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full bg-surface border-border hover:border-primary/50 hover:text-primary transition-colors text-text-secondary"
              >
                <a
                  href="https://www.instagram.com/evoc.labz?igsh=N282c25vNGc5NG1k"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full bg-surface border-border hover:border-primary/50 hover:text-primary transition-colors text-text-secondary"
              >
                <a
                  href="https://www.linkedin.com/company/evoc-labs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full bg-surface border-border hover:border-primary/50 hover:text-primary transition-colors text-text-secondary"
              >
                <a
                  href="https://x.com/evoclabz?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={18} />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Evoc Checkout
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Evoc Voxly
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Evoc Inventory
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Evoc Logistics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Evoc RTO Detector
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li>
                <Link
                  href="/#why-us"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="hover:text-primary transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/#results"
                  className="hover:text-primary transition-colors"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-primary transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/#founder"
                  className="hover:text-primary transition-colors"
                >
                  Founder
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2025 Evoc Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
