"use client";

import { useParams, useRouter } from "next/navigation";
import { useJobs } from "@/app/hooks/useJobs";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { data: jobs, isLoading, error } = useJobs();

  // Find the specific job by ID
  const job = jobs?.find((j) => j.id.toString() === params.id);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Loading job details...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 px-4">
        <p className="text-lg text-red-500">Error loading job</p>
        <p className="text-slate-500 text-sm">{error.message}</p>
        <Button title="Go Back" onClick={() => router.push("/")} />
      </div>
    );
  }

  // Job not found
  if (!job) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 px-4">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          404
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Job not found
        </p>
        <p className="text-slate-500 text-center max-w-md">
          The job you are looking for does not exist or has been removed.
        </p>
        <Button title="Back to Job Listings" onClick={() => router.push("/")} />
      </div>
    );
  }

  return (
    <div className="max-w-182.5 mx-auto  py-8 relative">
      {/* Header Card */}
      <div className="relative bg-white dark:bg-slate-900 rounded-r-md rounded-bl-md rounded-tl-md md:rounded-tl-none -mt-13 md:-mt-18 z-50 mb-8 pb-10 md:pb-0">
        <div className="flex flex-col items-center md:flex-row md:items-center gap-6 pr-8">
          {/* Logo */}
          <div
            className="w-20 h-20 md:h-[140px] md:w-[140px] rounded-[20px] md:rounded-none flex items-center justify-center shrink-0 -mt-10 z-50 md:mt-0"
            style={{ backgroundColor: job.logoBackground }}
          >
            <Image
              src={job.logo}
              width={60}
              height={60}
              alt={`${job.company} logo`}
              className="object-contain"
            />
          </div>

          {/* Company Info */}
          <div className="flex-1">
            <h1 className="text-2xl text-center font-bold text-slate-900 dark:text-white mb-2">
              {job.company}
            </h1>
            <p className="text-slate-500">{job.website}</p>
          </div>

          {/* Company Site Button */}
          <a
            href={job.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button title="Company Site" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-slate-900 rounded-md p-8">
        {/* Job Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <p className="text-slate-500">{job.postedAt}</p>
          <div className="bg-slate-700 w-1 h-1 rounded-full" />
          <p className="text-slate-500">{job.contract}</p>
          <div className="bg-slate-700 w-1 h-1 rounded-full" />
          <p className="text-indigo-500 font-bold">{job.location}</p>
        </div>

        {/* Position Title */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          {job.position}
        </h2>

        {/* Apply Button */}
        <a
          href={job.apply}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8"
        >
          <Button title="Apply Now" />
        </a>

        {/* Description */}
        <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
            {job.description}
          </p>
        </div>

        {/* Requirements */}
        {job.requirements && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Requirements
            </h3>
            {typeof job.requirements === "string" ? (
              <p className="text-slate-600 dark:text-slate-400">
                {job.requirements}
              </p>
            ) : (
              <>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {job.requirements.content}
                </p>
                {job.requirements.items && (
                  <ul className="list-disc list-inside space-y-2">
                    {job.requirements.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-slate-600 dark:text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        )}

        {/* Role Description */}
        {job.role && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              What You Will Do
            </h3>
            {typeof job.role === "string" ? (
              <p className="text-slate-600 dark:text-slate-400">{job.role}</p>
            ) : (
              <>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {job.role.content}
                </p>
                {job.role.items && (
                  <ol className="list-decimal list-inside space-y-2">
                    {job.role.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-slate-600 dark:text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </>
            )}
          </div>
        )}

        {/* Apply Button (Bottom) */}
        <a
          href={job.apply}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto"
        >
          <Button title="Apply Now"  />
        </a>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Link href="/" className="text-indigo-500 hover:underline">
          ← Back to job listings
        </Link>
      </div>
    </div>
  );
}
