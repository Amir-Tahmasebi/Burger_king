import { Link } from "react-router-dom";

export default function CarouselItem({ src, title, content }) {
  return (
    <div className="custom-slider">
      <img src={src} alt={title} />
      <section className="content">
        <h3 className="d-none">{title}</h3>
        <p className="d-none">{content}</p>
        <section className="btn-group" >
          <Link className="d-none" to="/menu">دیدن منو</Link>
          <Link className="d-none" to="/booking">رزرو میز</Link>
        </section>
      </section>
    </div>
  );
}
