import "./Food.scss";
import FoodItem from "./FoodItem";

export default function Food() {
  return (
    <section id="food">
      <section className="food-container">
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </section>
    </section>
  );
}
