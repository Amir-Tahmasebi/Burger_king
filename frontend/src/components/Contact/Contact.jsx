import Form from "./Form";
import Item from "./Item";
import { itemData } from "./item-data";
import Map from "./Map";
import "./Contact.scss";

export default function Contact(props) {
  const itemList = itemData.map((item, index) => (
    <Item key={index} {...item} />
  ));
  return (
    <section id="contact" className={props.class}>
      <section className="wrapper">
        <strong>تماس باما</strong>
        <h2>برای اطلاعات بیشتر می توانید تماس بگیرید</h2>
        <section className="data">{itemList}</section>
        <section className="container">
          <Form />
          <Map />
        </section>
      </section>
    </section>
  );
}
