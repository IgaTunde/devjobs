"use client";

import { useJobs } from "../hooks/useJobs";
import Card from "./Card";

const JobsList = () => {
  const { data: jobs, isLoading, error, isError } = useJobs();

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <Card key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobsList;
