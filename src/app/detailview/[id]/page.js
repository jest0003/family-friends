import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Favorite from "@/app/components/FavoriteElement";

const Detailview = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds/${id}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );
  const doggoData = await response.json();

  return (
    <main className="pt-16 pb-16 bg-stone-50">
      <section className="relative">
        <Link href="/">
          <button className="absolute left-2 top-2">
            <IoIosArrowBack className="icon bg-[rgba(254,254,254,0.88)] rounded-full p-0.5 pr-1" />
          </button>
        </Link>
        <Favorite id={id} />
        {/* <FaRegStar
          color="white"
          className="icon absolute right-4 top-4 bg-[rgba(254,254,254,0.25)] rounded-full p-0.5"
        /> */}
        <Image
          src={doggoData.image.url}
          alt="Picture of the doggo"
          width={390}
          height={100}
          className="rounded-3xl"
        />
        <div className="flex absolute bottom-4 left-4 bg-[rgba(95,95,95,0.3)] backdrop-blur-sm rounded-3xl p-2">
          <Image
            src={doggoData.image.url}
            alt="Picture of the doggo"
            width={48}
            height={48}
            className="rounded-3xl aspect-square"
          />
          <p className="text-white m-2 text-sm">
            {doggoData.name}
          </p>
        </div>
      </section>
      <h1 className="font-medium text-2xl mt-4 mb-4">
        {doggoData.name}
      </h1>
      <div className="mb-4">
        <span className="bg-blue-200 mr-2 p-2 pl-4 pr-4 text-green-700 rounded-full">
          Confident
        </span>
        <span className="bg-fuchsia-300 mr-2 p-2 pl-4 pr-4 text-green-700 rounded-full">
          Alert
        </span>
        <span className="bg-green-200 mr-2 p-2 pl-4 pr-4 text-green-700 rounded-full">
          Playfull
        </span>
        <span className="bg-amber-200 mr-2 p-2 pl-4 pr-4 text-green-700 rounded-full">
          Loyal
        </span>
      </div>

      <p className="mt-3 text-sm text-stone-400">
        Breed description
      </p>
      <p>{doggoData.description}</p>
      <p className="mt-3 text-sm text-stone-400">
        Breed hirstory
      </p>
      <p>{doggoData.history}</p>
    </main>
  );
};

export default Detailview;
