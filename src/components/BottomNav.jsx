import { NavLink } from "react-router-dom";

function BottomNav({ language }) {
  return (
    <div className="bottom-nav">

      <NavLink to="/" end>
        🏠
        <span>Home</span>
      </NavLink>

      <NavLink to="/schemes">
        🏛️
        <span>Schemes</span>
      </NavLink>

      <NavLink to="/citizen-services">
        🪪
        <span>Services</span>
      </NavLink>

      <NavLink to="/emergency">
        🚨
        <span>Emergency</span>
      </NavLink>

      <NavLink to="/contact">
        📞
        <span>Contact</span>
      </NavLink>

    </div>
  );
}

export default BottomNav;