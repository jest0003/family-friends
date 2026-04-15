import Searchbar from "./components/Searchbar";
import DoggoList from "./components/DoggoList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="pt-16 pb-16 bg-stone-50">
      <Searchbar />
      <Suspense
        fallback={<p>Loading doggos...</p>}
      >
        <DoggoList />
      </Suspense>
    </main>
  );
}
