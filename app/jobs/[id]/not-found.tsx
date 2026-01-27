import Link from "next/link";
import Button from "@/app/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6 px-4">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">404</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400">
        Job not found
      </p>
      <p className="text-slate-500 text-center max-w-md">
        The job you are looking for does not exist or has been removed.
      </p>
      <Link href="/">
        <Button title="Back to Job Listings" />
      </Link>
    </div>
  );
}
