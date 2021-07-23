import Carousel from "react-elastic-carousel";
import Client from "./Client";
import { usersData } from "./users";
import "./ElasticCarousel.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2 },
  // { width: 768, itemsToShow: 2 },
  { width: 992, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

export default function ElasticCarousel() {
  return (
    <section className="carousel-container">
      <section className="wrapper">
        <Carousel breakPoints={breakPoints}>
          {usersData.map((user) => (
            <Client key={user.id} {...user} />
          ))}
        </Carousel>
      </section>
    </section>
  );
}
