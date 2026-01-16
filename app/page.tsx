import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[1110px] -mt-7 md:-mt-10 z-50">
            <SearchBar />
          </div>
        </div>
      </main>
    </div>
  );
}
