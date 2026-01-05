"use client";
import Link from "next/link";
import { Button } from "./Button";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  const services = [
    { name: "Systems Assessment", href: "/services/systems-assessment" },
    { name: "Process Mapping & SOPs", href: "/services/process-mapping-sops" },
    { name: "M365 Governance", href: "/services/m365-governance" },
    { name: "Onboarding & Offboarding", href: "/services/onboarding-offboarding" },
    { name: "Backup & Disaster Recovery", href: "/services/backup-disaster-recovery" },
    { name: "Managed IT", href: "/services/managed-it" },
    { name: "Service Desk Setup", href: "/services/service-desk-setup" },
    { name: "Endpoint Standardization", href: "/services/endpoint-standardization" },
    { name: "MVP & PRD", href: "/services/mvp-prd" },
    { name: "Automation (No-Code)", href: "/services/automation-no-code" },
    { name: "Web Development", href: "/services/web-development" },
  ];

  const industries = [
    { name: "Construction & Trades", href: "/industries/construction" },
    { name: "Nonprofits", href: "/industries/nonprofits" },
    { name: "Startups", href: "/industries/startups" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-[rgba(177,227,199,0.12)] bg-polus-forest/90 backdrop-blur-navbar">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-polus-gold hover:text-polus-mint transition">Polus</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-polus-paper/80">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className="hover:text-polus-gold transition flex items-center gap-1 py-2"
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              Services
              <svg 
                className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg shadow-2xl py-3 backdrop-blur-sm">
                  <Link
                    href="/services"
                    className="block px-5 py-2.5 text-polus-gold hover:bg-[rgba(177,227,199,0.08)] transition font-semibold text-base"
                  >
                    View All Services
                  </Link>
                  <div className="border-t border-[rgba(177,227,199,0.12)] my-2 mx-3"></div>
                  <div className="max-h-[60vh] overflow-y-auto">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-5 py-2.5 text-[rgba(254,255,255,0.78)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] transition leading-relaxed"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIndustriesDropdownOpen(true)}
            onMouseLeave={() => setIndustriesDropdownOpen(false)}
          >
            <button
              className="hover:text-polus-gold transition flex items-center gap-1 py-2"
              aria-expanded={industriesDropdownOpen}
              aria-haspopup="true"
            >
              Industries
              <svg 
                className={`w-4 h-4 transition-transform ${industriesDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {industriesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg shadow-2xl py-3 backdrop-blur-sm">
                  <Link
                    href="/industries"
                    className="block px-5 py-2.5 text-polus-gold hover:bg-[rgba(177,227,199,0.08)] transition font-semibold text-base"
                  >
                    View All Industries
                  </Link>
                  <div className="border-t border-[rgba(177,227,199,0.12)] my-2 mx-3"></div>
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block px-5 py-2.5 text-[rgba(254,255,255,0.78)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] transition leading-relaxed"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {FEATURE_FLAGS.STARTING_POINT_QUIZ_ENABLED && (
            <Link href="/start" className="hover:text-polus-gold transition">Quiz</Link>
          )}
          <Link href="/about" className="hover:text-polus-gold transition">About</Link>
          <Link href="/contact" className="hover:text-polus-gold transition">Contact</Link>
        </nav>
        
        <div className="hidden md:block">
          <Button href="/book" variant="primary" className="text-sm px-4 py-2">Book Call</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-polus-mint p-2 hover:bg-polus-emerald/10 rounded transition"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(177,227,199,0.12)] bg-polus-forest">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {/* Services Mobile Section */}
            <div className="border-b border-[rgba(177,227,199,0.08)] pb-3">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="text-[rgba(254,255,255,0.78)] hover:text-polus-gold transition py-2 flex items-center justify-between w-full"
                aria-expanded={servicesDropdownOpen}
              >
                <span className="font-medium">Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesDropdownOpen && (
                <div className="pl-4 space-y-1 mt-3">
                  <Link
                    href="/services"
                    className="block py-2 text-polus-gold text-sm font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                  <div className="border-t border-[rgba(177,227,199,0.08)] my-2"></div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition text-sm leading-relaxed"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Mobile Section */}
            <div className="border-b border-[rgba(177,227,199,0.08)] pb-3">
              <button
                onClick={() => setIndustriesDropdownOpen(!industriesDropdownOpen)}
                className="text-[rgba(254,255,255,0.78)] hover:text-polus-gold transition py-2 flex items-center justify-between w-full"
                aria-expanded={industriesDropdownOpen}
              >
                <span className="font-medium">Industries</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${industriesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesDropdownOpen && (
                <div className="pl-4 space-y-1 mt-3">
                  <Link
                    href="/industries"
                    className="block py-2 text-polus-gold text-sm font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Industries
                  </Link>
                  <div className="border-t border-[rgba(177,227,199,0.08)] my-2"></div>
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block py-2 text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition text-sm leading-relaxed"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {FEATURE_FLAGS.STARTING_POINT_QUIZ_ENABLED && (
              <Link 
                href="/start" 
                className="text-[rgba(254,255,255,0.78)] hover:text-polus-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quiz
              </Link>
            )}
            <Link 
              href="/about" 
              className="text-[rgba(254,255,255,0.78)] hover:text-polus-gold transition py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-[rgba(254,255,255,0.78)] hover:text-polus-gold transition py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-[rgba(177,227,199,0.12)]">
              <Button href="/book" variant="primary" className="w-full">Book a Free Discovery Call</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
