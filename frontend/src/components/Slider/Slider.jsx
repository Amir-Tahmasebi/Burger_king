import InfiniteSlider from "infinite-react-carousel";
import CarouselItem from "./CarouselItem";
import "./Slider.scss";

export default function Slider({ data }) {
  
  const sliderList = data.map((data) => (
    <CarouselItem {...data} key={data.id} />
  ));

  return (
    <section className="slider-container">
      <InfiniteSlider autoplay={true} className="wrapper">
        {sliderList}
      </InfiniteSlider>
    </section>
  );
}
