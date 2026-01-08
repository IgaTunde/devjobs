export type JobRequirement = {
  content: string;
  items: string[];
};

export type JobRole = {
  content: string;
  items: string[];
};

export type Job = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: "Full Time" | "Part Time" | "Freelance";
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: JobRequirement;
  role: JobRole;
};
