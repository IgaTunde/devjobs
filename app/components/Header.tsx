import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full">
      <div className="relative w-full h-[136px] md:h-40 lg:h-40">
        {/* Desktop */}
        <Image
          src="/assets/desktop/bg-pattern-header.svg"
          alt="Hero"
          fill
          className="hidden lg:block object-contain"
          priority
        />
        {/* Tablet */}
        <Image
          src="/assets/tablet/bg-pattern-header.svg"
          alt="Hero"
          fill
          className="hidden md:block lg:hidden object-cover"
        />
        {/* Mobile */}
        <Image
          src="/assets/mobile/bg-pattern-header.svg"
          alt="Hero"
          fill
          className="block md:hidden object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
