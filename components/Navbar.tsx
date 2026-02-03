"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import { useState, useEffect, useRef } from "react";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/serviceData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Group services by category for navbar display
  const servicesByCategory = {
    infrastructure: SERVICES.filter(s => s.category === "infrastructure"),
    operations: SERVICES.filter(s => s.category === "operations"),
    security: SERVICES.filter(s => s.category === "security"),
    advisory: SERVICES.filter(s => s.category === "advisory"),
    bundles: SERVICES.filter(s => s.category === "bundles"),
  };

  const industries = [
    { name: "Construction & Trades", href: "/industries/construction" },
    { name: "Nonprofits", href: "/industries/nonprofits" },
    { name: "Professional Services", href: "/industries/professional-services" },
    { name: "Startups", href: "/industries/startups" },
  ];

  const resources = [
    { name: "Resource Library", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <div className="sticky top-0 z-50 border-b border-[rgba(177,227,199,0.12)] bg-polus-forest/90 backdrop-blur-navbar">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="h-[72px] flex items-center justify-between">
            <Link href="/" className="block">
              <Image 
                src="/Polus-Logo-RGB text only.png" 
                alt="Polus" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center gap-6 text-sm text-polus-paper/80">
              {/* Services Dropdown */}
              <div 
                className="relative"
                ref={servicesRef}
                onMouseEnter={() => {
                  setServicesDropdownOpen(true);
                  setActiveServiceCategory(null);
                }}
                onMouseLeave={() => {
                  setServicesDropdownOpen(false);
                  setActiveServiceCategory(null);
                }}
              >
                <button
                  className="hover:text-polus-gold transition flex items-center gap-1 py-2"
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Services menu"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onFocus={() => setServicesDropdownOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setServicesDropdownOpen(!servicesDropdownOpen);
                    }
                  }}
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
                  <div className="absolute top-full left-0 pt-0 w-64 z-50">
                    <div className="bg-polus-forest/95 border-l border-r border-b border-[rgba(177,227,199,0.16)] backdrop-blur-sm py-2">
                      {/* Core Infrastructure */}
                      <div 
                        className="relative group"
                        onMouseEnter={() => setActiveServiceCategory("infrastructure")}
                        onMouseLeave={() => setActiveServiceCategory(null)}
                      >
                        <div className="px-4 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.05)] transition cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">{SERVICE_CATEGORIES.infrastructure.label}</div>
                              <div className="text-xs text-[rgba(254,255,255,0.48)] mt-0.5">
                                {SERVICE_CATEGORIES.infrastructure.count} services
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[rgba(254,255,255,0.48)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        {/* Submenu */}
                        {activeServiceCategory === "infrastructure" && (
                          <div className="absolute left-full top-0 ml-0 w-80 bg-polus-forest/95 border-l border-r border-b border-[rgba(177,227,199,0.16)] backdrop-blur-sm py-3 px-4">
                            <div className="space-y-1">
                              {servicesByCategory.infrastructure.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block px-3 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] rounded transition"
                                >
                                  <div className="font-medium text-sm">{service.title}</div>
                                  <div className="text-xs text-[rgba(254,255,255,0.58)] mt-1 leading-relaxed">{service.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Operations & Process */}
                      <div 
                        className="relative group"
                        onMouseEnter={() => setActiveServiceCategory("operations")}
                        onMouseLeave={() => setActiveServiceCategory(null)}
                      >
                        <div className="px-4 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.05)] transition cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">{SERVICE_CATEGORIES.operations.label}</div>
                              <div className="text-xs text-[rgba(254,255,255,0.48)] mt-0.5">
                                {SERVICE_CATEGORIES.operations.count} services
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[rgba(254,255,255,0.48)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        {/* Submenu */}
                        {activeServiceCategory === "operations" && (
                          <div className="absolute left-full top-0 ml-0 w-80 bg-polus-forest/95 border-l border-r border-b border-[rgba(177,227,199,0.16)] backdrop-blur-sm py-3 px-4">
                            <div className="space-y-1">
                              {servicesByCategory.operations.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block px-3 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] rounded transition"
                                >
                                  <div className="font-medium text-sm">{service.title}</div>
                                  <div className="text-xs text-[rgba(254,255,255,0.58)] mt-1 leading-relaxed">{service.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Security & Risk */}
                      <div 
                        className="relative group"
                        onMouseEnter={() => setActiveServiceCategory("security")}
                        onMouseLeave={() => setActiveServiceCategory(null)}
                      >
                        <div className="px-4 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.05)] transition cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">{SERVICE_CATEGORIES.security.label}</div>
                              <div className="text-xs text-[rgba(254,255,255,0.48)] mt-0.5">
                                {SERVICE_CATEGORIES.security.count} services
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[rgba(254,255,255,0.48)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        {/* Submenu */}
                        {activeServiceCategory === "security" && (
                          <div className="absolute left-full top-0 ml-0 w-80 bg-polus-forest/95 border-l border-r border-b border-[rgba(177,227,199,0.16)] backdrop-blur-sm py-3 px-4">
                            <div className="space-y-1">
                              {servicesByCategory.security.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block px-3 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] rounded transition"
                                >
                                  <div className="font-medium text-sm">{service.title}</div>
                                  <div className="text-xs text-[rgba(254,255,255,0.58)] mt-1 leading-relaxed">{service.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Advisory & Planning */}
                      <div 
                        className="relative group"
                        onMouseEnter={() => setActiveServiceCategory("advisory")}
                        onMouseLeave={() => setActiveServiceCategory(null)}
                      >
                        <div className="px-4 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.05)] transition cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">{SERVICE_CATEGORIES.advisory.label}</div>
                              <div className="text-xs text-[rgba(254,255,255,0.48)] mt-0.5">
                                {SERVICE_CATEGORIES.advisory.count} services
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[rgba(254,255,255,0.48)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        {/* Submenu */}
                        {activeServiceCategory === "advisory" && (
                          <div className="absolute left-full top-0 ml-0 w-80 bg-polus-forest/95 border-l border-r border-b border-[rgba(177,227,199,0.16)] backdrop-blur-sm py-3 px-4">
                            <div className="space-y-1">
                              {servicesByCategory.advisory.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block px-3 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] rounded transition"
                                >
                                  <div className="font-medium text-sm">{service.title}</div>
                                  <div className="text-xs text-[rgba(254,255,255,0.58)] mt-1 leading-relaxed">{service.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Package Deals */}
                      <div 
                        className="relative group"
                        onMouseEnter={() => setActiveServiceCategory("bundles")}
                        onMouseLeave={() => setActiveServiceCategory(null)}
                      >
                        <div className="px-4 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.05)] transition cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">{SERVICE_CATEGORIES.bundles.label}</div>
                              <div className="text-xs text-[rgba(254,255,255,0.48)] mt-0.5">
                                {SERVICE_CATEGORIES.bundles.count} services
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[rgba(254,255,255,0.48)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        {/* Submenu */}
                        {activeServiceCategory === "bundles" && (
                          <div className="absolute left-full top-0 ml-0 w-80 bg-polus-forest/95 border-l border-r border-b border-[rgba(177,227,199,0.16)] backdrop-blur-sm py-3 px-4">
                            <div className="space-y-1">
                              {servicesByCategory.bundles.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block px-3 py-2.5 text-[rgba(254,255,255,0.88)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] rounded transition"
                                >
                                  <div className="font-medium text-sm">{service.title}</div>
                                  <div className="text-xs text-[rgba(254,255,255,0.58)] mt-1 leading-relaxed">{service.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* View All Services */}
                      <div className="border-t border-[rgba(177,227,199,0.12)] mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-polus-gold hover:bg-[rgba(177,227,199,0.05)] transition font-semibold text-sm flex items-center justify-between"
                        >
                          <span>View All Services</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div 
                className="relative"
                ref={industriesRef}
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
              >
                <button
                  className="hover:text-polus-gold transition flex items-center gap-1 py-2"
                  aria-expanded={industriesDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Industries menu"
                  onClick={() => setIndustriesDropdownOpen(!industriesDropdownOpen)}
                  onFocus={() => setIndustriesDropdownOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIndustriesDropdownOpen(!industriesDropdownOpen);
                    }
                  }}
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
                  <div className="absolute top-full left-0 pt-0 w-64 z-50">
                    <div className="bg-polus-forest/95 border-l border-r border-b border-[rgba(177,227,199,0.16)] backdrop-blur-sm py-3">
                      <div className="px-3 py-1.5">
                        {industries.map((industry) => (
                          <Link
                            key={industry.href}
                            href={industry.href}
                            className="block px-2 py-2.5 text-[rgba(254,255,255,0.78)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] transition leading-relaxed"
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-[rgba(177,227,199,0.12)] mt-2 pt-2">
                        <Link
                          href="/industries"
                          className="block px-4 py-2.5 text-polus-gold hover:bg-[rgba(177,227,199,0.05)] transition font-semibold text-sm flex items-center justify-between"
                        >
                          <span>View All Industries</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                ref={resourcesRef}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <button
                  className="hover:text-polus-gold transition flex items-center gap-1 py-2"
                  aria-expanded={resourcesDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Resources menu"
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  onFocus={() => setResourcesDropdownOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setResourcesDropdownOpen(!resourcesDropdownOpen);
                    }
                  }}
                >
                  Resources
                  <svg 
                    className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-0 w-56 z-50">
                    <div className="bg-polus-forest/95 border-l border-r border-b border-[rgba(177,227,199,0.16)] backdrop-blur-sm py-3">
                      {resources.map((resource) => (
                        <Link
                          key={resource.href}
                          href={resource.href}
                          className="block px-5 py-2.5 text-[rgba(254,255,255,0.78)] hover:text-polus-gold hover:bg-[rgba(177,227,199,0.08)] transition leading-relaxed"
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {FEATURE_FLAGS.STARTING_POINT_QUIZ_ENABLED && (
                <Link href="/start" className="hover:text-polus-gold transition">Assessment</Link>
              )}
              <Link href="/about" className="hover:text-polus-gold transition">About</Link>
              <Link href="/contact" className="hover:text-polus-gold transition">Contact</Link>
            </nav>
            
            <div className="hidden md:block">
              <Button href="/book" variant="primary" className="text-sm px-4 py-2">Book A Call</Button>
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

          {/* Dropdown Menus - Built into Navbar */}
          {/* Removed - now using individual dropdowns above each nav item */}
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
                <div className="pl-4 space-y-3 mt-3">
                  <Link
                    href="/services"
                    className="block py-2 text-polus-gold text-sm font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                  <div className="border-t border-[rgba(177,227,199,0.08)] my-2"></div>
                  
                  {/* Core Infrastructure */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-polus-gold/70 mb-2">
                      {SERVICE_CATEGORIES.infrastructure.label}
                    </div>
                    {servicesByCategory.infrastructure.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2 text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  {/* Operations & Process */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-polus-gold/70 mb-2">
                      {SERVICE_CATEGORIES.operations.label}
                    </div>
                    {servicesByCategory.operations.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2 text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  {/* Security & Risk */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-polus-gold/70 mb-2">
                      {SERVICE_CATEGORIES.security.label}
                    </div>
                    {servicesByCategory.security.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2 text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  {/* Advisory & Planning */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-polus-gold/70 mb-2">
                      {SERVICE_CATEGORIES.advisory.label}
                    </div>
                    {servicesByCategory.advisory.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2 text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  {/* Package Deals */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-polus-gold/70 mb-2">
                      {SERVICE_CATEGORIES.bundles.label}
                    </div>
                    {servicesByCategory.bundles.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2 text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
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
                  <div className="border-t border-[rgba(177,227,199,0.08)] my-2"></div>
                  <Link
                    href="/industries"
                    className="block py-2 text-polus-gold text-sm font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Industries
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Mobile Section */}
            <div className="border-b border-[rgba(177,227,199,0.08)] pb-3">
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                className="text-[rgba(254,255,255,0.78)] hover:text-polus-gold transition py-2 flex items-center justify-between w-full"
                aria-expanded={resourcesDropdownOpen}
              >
                <span className="font-medium">Resources</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesDropdownOpen && (
                <div className="pl-4 space-y-1 mt-3">
                  {resources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="block py-2 text-[rgba(254,255,255,0.72)] hover:text-polus-gold transition text-sm leading-relaxed"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {resource.name}
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
                Assessment
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
      
      {/* Limited Time Offer Banner */}
      <div className="sticky top-[72px] z-40 bg-polus-forest border-b border-polus-gold/20 py-2.5 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-polus-gold/5 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-2 bg-polus-gold/10 border border-polus-gold/30 text-polus-gold px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            Limited Offer
          </span>
          <span className="text-polus-paper/90 text-sm md:text-base">
            First 10 businesses get <span className="text-polus-gold font-semibold">20% off all services</span>
          </span>
          <a 
            href="/contact?promo=early-bird" 
            className="inline-flex items-center gap-1.5 bg-polus-gold text-polus-forest px-4 py-1.5 rounded-full font-semibold text-sm hover:brightness-110 transition shadow-sm"
          >
            Claim Your Spot
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
