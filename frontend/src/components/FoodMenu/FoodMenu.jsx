import "./FoodMenu.scss";
import Menu from "./Menu";
import menuData from "./data";
import { useState } from "react";
import Button from "./Button";
import buttonData from "./buttons-data";

export default function FoodMenu() {
  const [active, setActive] = useState(1);
  const buttonList = buttonData.map((btn) => (
    <Button {...btn} key={btn.id} active={active} setActive={setActive} />
  ));
  const renderMenu = menuData.map((data) => {
    switch (data.id) {
      case active:
        return <Menu {...data} key={data.id} />;
      default:
        return null;
    }
  });
  return (
    <section className="food-menu">
      <section className="container">
        <span>منو غذا</span>
        <h2>منو غذا های پر طرفدار ما</h2>
        <section className="btn-group">{buttonList}</section>
        {renderMenu}
      </section>
    </section>
  );
}
