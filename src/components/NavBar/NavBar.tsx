import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkBaseClasses = "py-4 px-4 transition duration-200 w-full md:w-auto h-full text-center flex items-center justify-center";
  const linkHoverClasses = "hover:bg-yellow hover:text-burgundy";
  const linkActiveClasses = "text-burgundy bg-yellow";
  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `${linkBaseClasses} ${linkHoverClasses} ${isActive ? linkActiveClasses : 'text-white'}`;

  return (
    <nav className="sticky top-0 bg-burgundy text-white" role="navigation">
      <div className="max-w-7xl w-full mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <NavLink to="/about" className={getLinkClasses}>
          О ФОНДЕ
        </NavLink>
        <NavLink to="/news" className={getLinkClasses}>
          НОВОСТИ
        </NavLink>
        <NavLink to="/analytics" className={getLinkClasses}>
          АНАЛИТИКА
        </NavLink>
        <NavLink to="/media-law" className={getLinkClasses}>
          ЗАКОНЫ ПО МЕДИА
        </NavLink>
        <NavLink to="/library" className={getLinkClasses}>
          БИБЛИОТЕКА
        </NavLink>
        <NavLink to="/projects" className={getLinkClasses}>
          ПРОЕКТЫ
        </NavLink>
        <NavLink to="/map" className={getLinkClasses}>
          КАРТА
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
