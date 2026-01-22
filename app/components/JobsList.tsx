"use client";

import { useState, useMemo } from "react";
import { useJobs } from "../hooks/useJobs";
import Button from "./Button";
import Card from "./Card";
import { SearchFilters } from "./SearchBar";

interface JobsListProps {
  filters: SearchFilters;
}

const JobsList = ({ filters }: JobsListProps) => {
  const { data: jobs, isLoading, error, isError } = useJobs();
  const [showAll, setShowAll] = useState(false);

  // Filter jobs based on search criteria using useMemo for performance
  const filteredJobs = useMemo(() => {
    if (!jobs) return [];

    return jobs.filter((job) => {
      // Filter by title (searches title, company, and position/role)
      const titleMatch =
        filters.title === "" ||
        job.position?.toLowerCase().includes(filters.title.toLowerCase()) ||
        job.company?.toLowerCase().includes(filters.title.toLowerCase()) ||
        String(job.role)?.toLowerCase().includes(filters.title.toLowerCase());

      // Filter by location
      const locationMatch =
        filters.location === "" ||
        job.location?.toLowerCase().includes(filters.location.toLowerCase());

      // Filter by full time contract
      const fullTimeMatch =
        !filters.isFullTime || job.contract?.toLowerCase() === "full time";

      return titleMatch && locationMatch && fullTimeMatch;
    });
  }, [jobs, filters]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Loading jobs...
        </p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg text-red-500">
          Error: {error?.message || "Failed to load jobs"}
        </p>
      </div>
    );
  }

  // Empty state - no jobs at all
  if (!jobs || jobs.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg text-slate-500 dark:text-slate-400">
          No jobs available
        </p>
      </div>
    );
  }

  // No results state - filters didn't match anything
  if (filteredJobs.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <p className="text-lg text-slate-500 dark:text-slate-400">
          No jobs found matching your criteria
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  const displayedJobs = showAll ? filteredJobs : filteredJobs.slice(0, 12);
  const hasMore = filteredJobs.length > 12;

  return (
    <>
      {/* Results count */}
      <div className="mb-6 text-slate-600 dark:text-slate-400">
        <p className="text-sm">
          Showing {displayedJobs.length} of {filteredJobs.length} jobs
          {filteredJobs.length !== jobs.length && (
            <span className="ml-1">(filtered from {jobs.length} total)</span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedJobs.map((job) => (
          <Card key={job.id} {...job} />
        ))}
      </div>

      {hasMore && (
        <div className="py-10 flex justify-center">
          <Button
            title={showAll ? "Show Less" : "Load More"}
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      )}
    </>
  );
};

export default JobsList;
