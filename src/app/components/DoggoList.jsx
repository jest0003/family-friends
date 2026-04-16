import Card from "./Card";
import Link from "next/link";

const DoggoList = ({ searchParams }) => {
  return (
    <section className="flex flex-wrap justify-between items-start">
      <FetchBreed searchParams= {searchParams} />
    </section>
  );
};

const FetchBreed = async ({searchParams}) => {
  "use server";
  const {query} = await searchParams;
  const url = query ?
  `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";
  try {
    const response = await fetch(
      url,
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
