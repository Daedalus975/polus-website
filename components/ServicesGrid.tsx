"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import Link from "next/link";
import type { Service, ServiceCategory } from "@/lib/serviceData";
import { SERVICE_CATEGORIES } from "@/lib/serviceData";

type ServicesGridProps = {
  services: Service[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");

  // Filter services based on category and search query
  const filteredServices = services.filter((service) => {
    // Category filter
    const categoryMatch = activeCategory === "all" || service.category === activeCategory;
    if (!categoryMatch) return false;
    
    // Search filter
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    const titleMatch = service.title.toLowerCase().includes(query);
    const descriptionMatch = service.description.toLowerCase().includes(query);
    const tagMatch = service.tag?.toLowerCase().includes(query);
    
    return titleMatch || descriptionMatch || tagMatch;
  });

  return (
    <>
      {/* Filter and Search Bar */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
        {/* Category Filter Dropdown */}
        <div className="w-full md:w-64">
          <label htmlFor="category-filter" className="block text-sm font-medium text-[rgba(254,255,255,0.78)] mb-2">
            Filter by Category
          </label>
          <select
            id="category-filter"
            value={activeCategory}
            onChange={(e) => {
              setActiveCategory(e.target.value as ServiceCategory);
              setSearchQuery(""); // Clear search when changing category
            }}
            className="w-full px-4 py-3 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-paper focus:outline-none focus:border-polus-gold focus:ring-4 focus:ring-[rgba(194,163,25,0.20)] transition"
          >
            {Object.entries(SERVICE_CATEGORIES).map(([key, { label, count }]) => (
              <option key={key} value={key}>
                {label} ({count})
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="flex-1 w-full">
          <label htmlFor="service-search" className="block text-sm font-medium text-[rgba(254,255,255,0.78)] mb-2">
            Search Services
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg 
                className="w-5 h-5 text-[rgba(254,255,255,0.48)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="service-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword... (e.g., 'backup', 'M365', 'training')"
              className="w-full pl-12 pr-12 py-3 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-paper placeholder:text-[rgba(254,255,255,0.48)] focus:outline-none focus:border-polus-gold focus:ring-4 focus:ring-[rgba(194,163,25,0.20)] transition"
              aria-label="Search services"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-[rgba(254,255,255,0.62)] hover:text-polus-gold transition"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <p className="mb-6 text-sm text-[rgba(254,255,255,0.62)]">
          {filteredServices.length === 0 
              ? `No services found for "${searchQuery}"`
              : `Found ${filteredServices.length} service${filteredServices.length === 1 ? '' : 's'}`
            }
          </p>
      )}

      {filteredServices.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full hover:shadow-cardHover hover:border-polus-gold/50 transition-all cursor-pointer">
                {service.tag && (
                  <span className="inline-block text-xs font-semibold text-polus-mint mb-3 uppercase tracking-wider">
                    {service.tag}
                  </span>
                )}
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-sm text-polus-gold flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-4">
            No services match your search.
          </p>
          <p className="text-sm text-[rgba(254,255,255,0.62)] mb-6">
            Try different keywords or browse all services below.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-polus-gold text-polus-forest hover:brightness-110 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
          >
            Clear Search
          </button>
        </div>
      )}
    </>
  );
}
