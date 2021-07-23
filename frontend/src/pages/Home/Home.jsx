import About from "../../components/About";
import Booking from "../../components/Booking";
import Feature from "../../components/Feature";
import Layout from "../../components/Layout";
import ElasticCarousel from "../../components/ElasticCarousel";
import Contact from "../../components/Contact";
import Menu from "../../components/Menu";


export default function Home() {
  return (
    <Layout isSlider={true}>
      <section className="home">
        <Booking />
        <About />
        <Feature />
        <Menu />
        <ElasticCarousel />
        <Contact />
      </section>
    </Layout>
  );
}
