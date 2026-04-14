import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import DoggoList from "./components/DoggoList";

export default function Home() {
  return (
    <main className=" bg-stone-50">
      <Searchbar />
      <DoggoList />
    </main>
  );
}
