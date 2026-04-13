import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Card = () => {
    return ( <section className="rounded-2xl bg-white">
        <FaRegStar 
        color="pink"
        className="icon anchored"/>
<Image
                src="https://placecats.com/g/299/299"
                alt="Picture of the author"
                width={160}
                height={100}
                className="star-anchor rounded-xl"
              />
              <div className="p-2">
                <h2 className="font-bold">Doggo breed</h2>
              <p className="w-24 text-stone-400">Originate, noget længere</p>
              </div>
    </section>
     );
}
 
export default Card;