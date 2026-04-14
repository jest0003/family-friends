import Searchbar from "./components/Searchbar";
import DoggoList from "./components/DoggoList";

export default function Home() {
  return (
    <main className="pt-16 bg-stone-200">
      <Searchbar />
      <DoggoList />
    </main>
  );
}
