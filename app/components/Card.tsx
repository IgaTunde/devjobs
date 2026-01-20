import Image from "next/image";

const Card = () => {
  return (
    <div className="mt-10 w-full md:max-w-[350px]">
      <div className="ml-6">
        <Image
          src="assets/logos/scoot.svg"
          width={40}
          height={12}
          alt="company logo"
          className="bg-red-500 py-2 px-2  rounded-4xl"
        />
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-[6px] pl-6 pb-6 pt-8">
        <div className="flex items-center pb-2">
          <p className="text-slate-500 dark:text-slate-500 text-[16px]">
            2 day ago
          </p>
          <div className="bg-slate-700 w-1 h-1 rounded-full" />
          <p className="text-slate-500 dark:text-slate-500 text-[16px]">
            Full time
          </p>
        </div>
        <p className="text-slate-900 dark:text-slate-50 text-lg font-bold pb-2">
          Senior Software Engineer
        </p>
        <p className="text-slate-500 dark:text-slate-500 pb-8">Scoot</p>
        <p className="text-indigo-500 dark:text-indigo-500 text-sm font-bold">
          United Kingdom
        </p>
      </div>
    </div>
  );
};

export default Card;
