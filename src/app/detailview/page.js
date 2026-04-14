import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function Detailview() {
  return (
    <main className="pt-16 bg-stone-50">
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
          <div className="flex absolute bottom-4 left-4 bg-[rgba(95,95,95,0.3)] rounded-3xl p-2">
          <Image src="https://cdn4.thedogapi.com/optimized/V9dkIFu7OB.jpg"
          alt="Picture of the doggo"
          width={48}
          height={64}
          className="rounded-3xl"
          />
          <p className="text-white m-2 text-sm">Breed name</p>
          </div>
 </section>
 <h1 className="font-medium text-2xl mt-4 mb-4">Breeeeeeeeed.</h1>
 <div className="mb-4">
<span className="bg-blue-200 mr-2 p-2 pl-4 pr-4 text-green-700 rounded-full">Confident</span>
 <span className="bg-fuchsia-300 mr-2 p-2 pl-4 pr-4 text-green-700 rounded-full">Alert</span>
 <span className="bg-green-200 mr-2 p-2 pl-4 pr-4 text-green-700 rounded-full">Playfull</span>
 <span className="bg-amber-200 mr-2 p-2 pl-4 pr-4 text-green-700 rounded-full">Loyal</span>
 </div>

 <p className="mt-3 text-sm text-stone-400">Breed description</p>
 <p>Beskrivelse kommer til at stå her</p>
 <p className="mt-3 text-sm text-stone-400">Breed hirstory</p>
 <p>Her kommer der nok til at være noget om hirstorien, surrprice!</p>

    </main>
  );
}
