import items from "./items-data";
import Item from "../Item";

export default function Items() {
  const renderItems = items.map((item, index) => (
    <Item {...item} key={index} />
  ));
  return <section className="wrapper-item">{renderItems}</section>;
}
