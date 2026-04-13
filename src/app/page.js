import Searchbar from "./components/Searchbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className=" bg-stone-50">
      <Searchbar />
      <section className="flex flex-wrap justify-between">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </main>
  );
}
