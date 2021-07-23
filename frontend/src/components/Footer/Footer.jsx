import "./Footer.scss";
import Newsletter from "./Newsletter";
import Quick from "./Quick";
import Address from "./Address";

export default function Footer() {
  return (
    <section id="footer">
      <section className="container">
        <Newsletter />
        <Quick />
        <Address />
      </section>
    </section>
  );
}