import { NavLink } from "react-router-dom";

export default function Quick() {
  return (
    <section className="quick">
      <h3>لینک های سریع</h3>
      <ul>
        <li>
          <NavLink exact to="/">خانه</NavLink>
        </li>
        <li>
          <NavLink to="/feature">ویژگی</NavLink>
        </li>
        <li>
          <NavLink to="/booking">رزرو</NavLink>
        </li>
        <li>
          <NavLink to="/about">درباره ما</NavLink>
        </li>
        <li>
          <NavLink to="/contact">تماس باما</NavLink>
        </li>
      </ul>
    </section>
  );
}
