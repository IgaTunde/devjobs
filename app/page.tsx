import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="flex justify-center items-center">
          <div className="w-full -mt-7 md:-mt-8 z-50">
            <SearchBar />
          </div>
        </div>
        <Card/>
      </main>
    </div>
  );
}
