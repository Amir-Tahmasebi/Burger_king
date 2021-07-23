import img from "./../../assets/img/carousel-1.jpg";

export default function ImageHeader({ title, subTitle }) {
  return (
    <section className="image-header">
      <img src={img} alt={title} />
      <section>
        <h1>{title}</h1>
        <h4>خانه <span>/</span> {subTitle}</h4>
      </section>
    </section>
  );
}
