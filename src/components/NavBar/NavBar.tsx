import React from 'react';
import {useNavigate} from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const buttonBaseClasses = "py-6 px-4 transition duration-200 sm:ml-4 w-full md:w-auto";
  const buttonHoverClasses = "hover:bg-yellow hover:text-burgundy";
  const buttonClasses = `${buttonBaseClasses} ${buttonHoverClasses}`;

  return (
    <nav className="sticky top-0 bg-burgundy text-white" role="navigation">
      <div className="max-w-7xl w-full mx-auto px-4 grid sm-grid-rows-2 sm:grid-cols-4 sm:gap-2 lg:grid-cols-7 gap-4">
        <button
          onClick={() => {
            navigate('/about')
          }}
          className={buttonClasses}
        >
          О ФОНДЕ
        </button>
        <button
          onClick={() => {
            navigate('/news')
          }}
          className={buttonClasses}
        >
          НОВОСТИ
        </button>
        <button
          onClick={() => {
            navigate('/analytics')
          }}
          className={buttonClasses}
        >
          АНАЛИТИКА
        </button>
        <button
          onClick={() => {
            navigate('/media-law')
          }}
          className={buttonClasses}
        >
          ЗАКОНЫ ПО МЕДИА
        </button>
        <button
          onClick={() => {
            navigate('/library')
          }}
          className={buttonClasses}
        >
          БИБЛИОТЕКА
        </button>
        <button
          onClick={() => {
            navigate('/projects')
          }}
          className={buttonClasses}
        >
          ПРОЕКТЫ
        </button>
        <button
          onClick={() => {
            navigate('/map')
          }}
          className={buttonClasses}
        >
          КАРТА
        </button>
      </div>
    </nav>
  );
};

export default NavBar;