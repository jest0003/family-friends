import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex justify-around mt-4">
      <FiHome className="icon" />
      <FaRegStar className="icon" />
      <IoChatbubbleOutline className="icon" />
      <FiUser className="icon" />
    </footer>
  );
};

export default Footer;
