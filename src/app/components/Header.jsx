import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <header className="flex justify-between mb-4">
      <h1>FamilyFriends</h1>
      <IoIosNotificationsOutline className="icon" />
    </header>
  );
};

export default Header;
