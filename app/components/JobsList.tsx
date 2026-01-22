"use client";

import { useState } from "react";
import { useJobs } from "../hooks/useJobs";
import Button from "./Button";
import Card from "./Card";

const JobsList = () => {
  const { data: jobs, isLoading, error, isError } = useJobs();
  const [showAll, setShowAll] = useState(false)

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg text-slate-500">Loading jobs...</p>
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

  // Empty state
  if (!jobs || jobs.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg text-slate-500">No jobs found</p>
      </div>
    );
  }

  const displayedJobs = showAll ? jobs : jobs.slice(0, 12);
  const hasMore = jobs.length > 12

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedJobs.map((job) => (
          <Card key={job.id} {...job} />
        ))}
      </div>

      {hasMore && (
        <div className="py-10">
          <Button title={showAll ? "Show Less" : "Learn More"} onClick={() => setShowAll(!showAll)}/>
        </div>
      )}
    </>
  );
};

export default JobsList;
