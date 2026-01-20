import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="w-full h-34 md:h-40 lg:h-40 relative bg-cover bg-left bg-no-repeat bg-[url('/assets/mobile/bg-pattern-header.svg')] md:bg-[url('/assets/tablet/bg-pattern-header.svg')] lg:bg-[url('/assets/desktop/bg-pattern-header.svg')] px-6 sm:px-6 lg:px-24">
      <div className="flex flex-row justify-between items-center h-full">
        <Image
          src="/assets/desktop/logo.svg"
          alt="Logo"
          width={115}
          height={32}
        />

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
