import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu__item-active menu__item" : "menu__item"
          }
          to="/"
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu__item-active menu__item" : "menu__item"
          }
          to="/drift"
        >
          Дрифт-такси
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu__item-active menu__item" : "menu__item"
          }
          to="/timeattack"
        >
          Time Attack
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu__item-active menu__item" : "menu__item"
          }
          to="/forza"
        >
          Forza Karting
        </NavLink>
      </nav>
      <div className="page">
        <Outlet />
      </div>
    </>
  );
};

export default Menu;
