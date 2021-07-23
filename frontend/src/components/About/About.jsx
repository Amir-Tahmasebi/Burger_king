import AboutVideo from "./AboutVideo";
import "./About.scss";
import Content from "../Content";

export default function About() {
  return (
    <section id="about">
      <section className="about-wrapper">
        <Content subTitle="درباره ما" title="آشپزی از سال 1990" />
        <AboutVideo />
      </section>
    </section>
  );
}
