import React, { useCallback, useContext } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to="/clients"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Clientes
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Perfil
        </NavLink>

        <NavLink
          to="/createfile"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Nueva propuesta
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
