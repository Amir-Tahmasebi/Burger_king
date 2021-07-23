import TopNav from "../TopNav/TopNav";
import Slider from "./../Slider";
import data from "./slider-data";
import ImageHeader from "./ImageHeader";

import "./Header.scss";

export default function Header({ isSlider, title, subTitle }) {
  return (
    <section className={isSlider ? "header-slider" : "header-image"}>
      <TopNav />
      {isSlider ? (
        <Slider data={data} />
      ) : (
        <ImageHeader title={title} subTitle={subTitle}/>
      )}
    </section>
  );
}
