import Footer from "./../Footer";
import Header from "./../Header";

export default function Layout({ children, isSlider, title, subTitle }) {
  return (
    <>
      <Header isSlider={isSlider || false} title={title} subTitle={subTitle} />
      {children}
      <Footer />
    </>
  );
}
