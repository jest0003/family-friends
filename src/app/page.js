import Image from "next/image";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <main>
      <Searchbar />
      <Image
        src="https://placecats.com/g/299/299"
        alt="Picture of the author"
        width={300}
        height={200}
      />
    </main>
  );
}
