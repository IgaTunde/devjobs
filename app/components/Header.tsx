import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[136px] md:h-40 lg:h-40 relative bg-cover bg-left bg-no-repeat bg-[url('/assets/mobile/bg-pattern-header.svg')] md:bg-[url('/assets/tablet/bg-pattern-header.svg')] lg:bg-[url('/assets/desktop/bg-pattern-header.svg')]">
      <div className="flex flex-row justify-between items-center h-full px-4 sm:px-6 lg:px-8">
        <Image
          src="/assets/desktop/logo.svg"
          alt="Logo"
          width={30}
          height={32}
        />
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/assets/desktop/icon-sun.svg"
            alt="Sun"
            width={20}
            height={20}
          />
          <Image
            src="/assets/desktop/icon-moon.svg"
            alt="Moon"
            width={12}
            height={12}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
