import Image from "next/image";
import Link from "next/link";
import Favorite from "./FavoriteElement";

const Card = ({
  breedGroup,
  origin,
  doggoPicture,
  id,
}) => {
  return (
    <section className="rounded-2xl bg-white max-h-fit mb-4 relative shadow-md">
      <Favorite id={id} />
      <Link
        key={id}
        href={`/detailview/${id}`}
        className="flex flex-col items-start"
      >
        <Image
          src={doggoPicture}
          alt="Picture of the doggo"
          width={160}
          height={100}
          className="rounded-xl"
        />
        <div className="p-2">
          <h2 className="font-bold w-30">
            {breedGroup}
          </h2>
          <p className="w-30 text-stone-400">
            {origin}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
