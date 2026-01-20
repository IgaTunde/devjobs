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
        <Card logo="/assets/logos/scoot.svg" 
        company="Scoot"
        logoBackground="#e99210" position="Senion Software Engineer" postedAt="2 days ago" contract="Full Time" location="United Kingdom"/>
      </main>
    </div>
  );
}
