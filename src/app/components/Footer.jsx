import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="fixed left-4 right-4 bottom-0 z-50 flex justify-around pt-4 pb-4  bg-stone-200">
      <FiHome className="icon" />
      <FaRegStar className="icon" />
      <IoChatbubbleOutline className="icon" />
      <FiUser className="icon" />
    </footer>
  );
};

export default Footer;
