import Item from "./Item";

export default function Menu({ img, items }) {
  const renderItem = items.map((item) => <Item {...item} key={item.id} />);
  return (
    <section className="menu">
      <section className="wrapper">{renderItem}</section>
      <img src={img} alt="Menu Burger" />
    </section>
  );
}
