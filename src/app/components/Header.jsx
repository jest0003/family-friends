import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <header className="flex justify-between pb-4  bg-stone-50">
      <h1>FamilyFriends</h1>
      <IoIosNotificationsOutline className="icon" />
    </header>
  );
};

export default Header;
