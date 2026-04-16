  "use client"
import { FaStar } from "react-icons/fa"; //udfyldt
import { FaRegStar } from "react-icons/fa"; //stregtegning
import useFavorite from "@/store/Favorite";

const Favorite = ({id, breed}) => {
    const {favorites, setFavorite, removeFavorite} = useFavorite();
    if (favorites.some((favorite) => favorite.id === id)) {
        return (
            <FaStar
            className="icon cursor-pointer text-yellow-500 absolute right-2 top-2 bg-[rgba(254,254,254,0.25)] rounded-full p-0.5"
            onClick={() => {removeFavorite(id)}}
            />
        );
    }
    else {
        return (
        <FaRegStar 
        className="icon cursor-pointer text-white absolute right-2 top-2 bg-[rgba(254,254,254,0.25)] rounded-full p-0.5"
        onClick={() => {setFavorite(id)
            console.log(favorites)
        }}
        />
        );
    }
}
export default Favorite;