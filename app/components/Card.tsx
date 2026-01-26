import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string | number; // Add id prop for routing
  logo: string;
  company: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

const Card = ({
  id,
  logo,
  company,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}: CardProps) => {
  return (
    <Link
      href={`/jobs/${id}`}
      className="block mt-10 w-full md:max-w-[350px] group transition-transform hover:scale-105 cursor-pointer"
    >
      {/* Logo container with dynamic background */}
      <div
        className="ml-8 md:ml-4 w-12 h-12 rounded-[16px] relative"
        style={{ backgroundColor: logoBackground }}
      >
        <Image
          src={logo}
          fill
          alt={`${company} logo`}
          className="object-contain p-2"
        />
      </div>

      {/* Card content */}
      <div className="bg-white dark:bg-slate-900 rounded-[6px] pl-8 md:pl-4 pb-6 pt-16 -mt-6 ">
        {/* Meta info row */}
        <div className="flex items-center gap-3 pb-2">
          <p className="text-slate-500 dark:text-slate-500 text-[16px]">
            {postedAt}
          </p>
          <div className="bg-slate-700 w-1 h-1 rounded-full" />
          <p className="text-slate-500 dark:text-slate-500 text-[16px]">
            {contract}
          </p>
        </div>

        {/* Position title */}
        <p className="text-slate-900 dark:text-slate-50 text-lg font-bold pb-2 group-hover:text-indigo-500 transition-colors">
          {position}
        </p>

        {/* Company name */}
        <p className="text-slate-500 dark:text-slate-500 pb-8">{company}</p>

        {/* Location */}
        <p className="text-indigo-500 dark:text-indigo-500 text-sm font-bold">
          {location}
        </p>
      </div>
    </Link>
  );
};

export default Card;
