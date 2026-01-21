import { useQuery } from "@tanstack/react-query";
import { Job } from "../types/job";

export const useJobs = () => {
  return useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetch("/data/jobs.json");

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      return response.json();
    },
    staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  });
};


