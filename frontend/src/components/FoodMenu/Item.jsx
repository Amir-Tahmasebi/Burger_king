export default function Item({ img, title, price, description, id }) {
  return (
    <section className="item-container">
      <section className="img-container">
        <img src={img} alt="" />
      </section>
      <section className="content-container">
        <h3>
          <span>{title}</span>
          <strong>{`${price} تومان`}</strong>
        </h3>
        <p>{description}</p>
      </section>
    </section>
  );
}
