import React from 'react';
import {Link} from "react-router-dom";
import {UserCircleIcon} from "@heroicons/react/24/outline";

const Header = () => {

  return (
    <div className="bg-white text-burgundy p-4">
      <div className="max-w-7xl w-full mx-auto sm:px-6 flex justify-between">
        <Link to="/">
          <img src="/media-consult-logo.png" alt="Logo" className="h-10 mr-4 max-w-[284px]" />
        </Link>
        <Link to="/sign-in" className="flex pt-2">
          Войти
          <UserCircleIcon className="ml-2 h-6 w-6 text-burgundy cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;


