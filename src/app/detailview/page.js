import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function Detailview() {
  return (
    <main className="pt-16 bg-stone-200">
      <section className="relative">
        <IoIosArrowBack 
            className="icon absolute left-4 top-4 bg-[rgba(254,254,254,0.88)] rounded-full p-0.5 pr-1"/>
  <FaRegStar
            color="white"
            className="icon absolute right-4 top-4 bg-[rgba(254,254,254,0.25)] rounded-full p-0.5"
          />
<Image 
src="https://cdn4.thedogapi.com/optimized/V9dkIFu7OB.jpg"
          alt="Picture of the doggo"
          width={390}
          height={100}
          className="rounded-3xl"
          />
 </section>
 <h1 className="font-medium text-2xl mt-4 mb-4">Breeeeeeeeed.</h1>
 <p className="mt-3 text-sm text-stone-400">Breed description</p>
 <p>Beskrivelse kommer til at stå her</p>
 <p className="mt-3 text-sm text-stone-400">Breed hirstory</p>
 <p>Her kommer der nok til at være noget om hirstorien, surrprice!</p>

    </main>
  );
}
