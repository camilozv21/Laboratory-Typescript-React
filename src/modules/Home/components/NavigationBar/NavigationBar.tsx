import "./NavigationBar.scss";
import { NavLink } from "react-router-dom";

const logo = "https://rick-and-morty-api-woad.vercel.app/assets/img/logo.png";

export const NavigationBar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between navbar" id="navigation-bar">
        <div>
          <NavLink to="/" className="btn btn-link navlink">
            <img src={logo} alt="logo" className="w-25" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/rickandmorty" className="btn btn-link navlink">
            Rick and Morty
          </NavLink>
          <NavLink to="/adventure" className="btn btn-link navlink">
            Andventure Tickets
          </NavLink>
        </div>
      </nav>
    </>
  )
}
