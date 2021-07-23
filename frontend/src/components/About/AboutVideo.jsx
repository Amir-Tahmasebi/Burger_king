import About from './../../assets/img/about.jpg'
import { FaPlayCircle } from "react-icons/fa";

export default function AboutVideo() {
  return (
    <section className="about-video-wrapper">
      <img src={About} alt=" chef  _Image " />
      <FaPlayCircle />
    </section>
  );
}
