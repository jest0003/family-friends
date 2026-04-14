import Card from "./Card";

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
      <Card
        key={breed.id}
        breedGroup={breed.breed_group}
        origin={breed.origin}
        doggoPicture={breed.image.url}
      />
    );
  });
};

export default DoggoList;
