import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { menu } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../store/auth/authAction";
import "./TopNav.scss";

export default function TopNav() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const dispatch = useDispatch();
  const { status, token } = useSelector((state) => state.auth);

  const renderItem = menu.map(({ id, title, to }) => {
    if (id !== 7 && id !== 6) {
      return (
        <li className="item" key={id}>
          <NavLink exact to={to}>
            {title}
          </NavLink>
        </li>
      );
    }

    if (status === 1 && token && id === 7) {
      return (
        <li className="item" key={id}>
          <button className="logout" onClick={() => dispatch(logout())}>{title}</button>
        </li>
      );
    }

    if (status !== 1 && !token && id === 6) {
      return (
        <li className="item" key={id}>
          <NavLink className="login" exact to={to}>
            {title}
          </NavLink>
        </li>
      );
    }
    return true;
  });

  return (
    <nav>
      <section className="nav-brand">
        <h1>
          پادشاه <span>برگر</span>
        </h1>
      </section>
      <ul className={`d-block-lg ${!toggle ? "d-none" : null}`}>
        {renderItem}
      </ul>
      <section className="nav-res d-none-lg">
        <CgMenuGridO onClick={handleToggle} className="icon" />
      </section>
    </nav>
  );
}
