import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <header className="fixed bg-stone-50 left-4 right-4 flex justify-between z-50 pt-4 pb-2">
<h1 className="font-bold text-xl">FamilyFriends</h1>
      <IoIosNotificationsOutline className="icon" />
    </header>
  );
};

export default Header;
