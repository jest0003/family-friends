import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Card = () => {
    return ( <section className="rounded-2xl bg-white">
        <div className="relative">
<FaRegStar 
        color="white"
        className="icon absolute right-1 top-1 bg-[rgba(254,254,254,0.25)] rounded-full p-0.5"/>
<Image
                src="https://placecats.com/g/299/299"
                alt="Picture of the doggo"
                width={160}
                height={100}
                className="rounded-xl"
              />
        </div>
              <div className="p-2">
                <h2 className="font-bold">Doggo breed</h2>
              <p className="w-24 text-stone-400">Originate, noget længere</p>
              </div>
    </section>
     );
}
 
export default Card;