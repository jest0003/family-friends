import Card from "./Card";
import Link from "next/link";

const DoggoList = () => {
  return (
    <section className="flex flex-wrap justify-between items-start">
      <FetchBreed />
    </section>
  );
};

const FetchBreed = async () => {
  "use server";
  const response = await fetch(
    "https://api.thedogapi.com/v1/breeds",
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );
  const breeds = await response.json();

  return breeds.map((breed) => {
    return (
      <Link
        key={breed.id}
        href={`/detailview/${breed.id}`}
      >
        <Card
          key={breed.id}
          breedGroup={breed.breed_group}
          origin={breed.origin}
          doggoPicture={breed.image.url}
        />
      </Link>
    );
  });
};

export default DoggoList;
