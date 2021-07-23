import "./Item.scss";
export default function Item({ title, Icon }) {
  return (
    <section id="item">
      <Icon />
      <h3>{title}</h3>
      <p>
        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
        برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
      </p>
    </section>
  );
}
