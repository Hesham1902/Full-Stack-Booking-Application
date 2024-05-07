import { useState } from "react";
import arrowDown from "/images/arrow_down.png";

const SelectForm = ({ userType, setUserType }: any) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleUserType = () => {
    setShowMenu(!showMenu);
  };

  const handleSelectUserType = (value: string) => {
    setUserType(value);
    setShowMenu(false);
  };

  return (
    <div>
      <label
        htmlFor="user_type"
        className="block mb-3 font-medium text-gray-900"
      >
        User type
      </label>
      <div className="relative">
        <div
          onClick={handleUserType}
          className="relative w-full overflow-hidden cursor-pointer user-select-none"
        >
          <div
            className="py-4 px-6 rounded-2xl w-full text-left text-[#808080] border border-[#ADADAD] focus:border-primary outline-none user-select-none"
            id="user_type"
          >
            {userType}
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <img
              src={arrowDown}
              alt="arrow-down"
              className={`transition ${showMenu ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {showMenu && (
          <ul className="flex flex-col shadow-lg rounded-xl mt-2 overflow-hidden">
            <li
              className="p-4 hover:bg-primary hover:text-white"
              onClick={() => handleSelectUserType("user")}
            >
              User
            </li>
            <li
              className="p-4 hover:bg-primary hover:text-white"
              onClick={() => handleSelectUserType("admin")}
            >
              Admin
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectForm;
