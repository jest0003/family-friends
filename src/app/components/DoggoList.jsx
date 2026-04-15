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
  try {
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
        <Card
          key={breed.id}
          id={breed.id}
          breedGroup={breed.name}
          origin={breed.origin}
          doggoPicture={breed.image.url}
        />
      );
    });
  } catch (error) {
    return <p>Failed to load doggos.</p>;
  }
};

export default DoggoList;
