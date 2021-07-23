export default function Client({ src, name }) {
  return (
    <section className="client">
      <img src={src} alt={name} />
      <p>
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
        محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
        نمیدهد.
        </p>
      <h4>{name}</h4>
      <span>Profession</span>
    </section>
  );
}
