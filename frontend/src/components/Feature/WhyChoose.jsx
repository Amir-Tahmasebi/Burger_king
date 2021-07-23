import { Link } from "react-router-dom";
import feature1 from './../../assets/img/feature-1.jpg'
import feature2 from './../../assets/img/feature-2.jpg'
import feature3 from './../../assets/img/feature-3.jpg'
import feature4 from './../../assets/img/feature-4.jpg'
export default function WhyChoose() {
  return (
    <section className="wrapper-choose">
      <strong>چرا ما را انتخاب کنید</strong>
      <h2>ویژگی های کلیدی ما</h2>
      <section className="image-wrapper">
        <section>
          <img src={feature1} alt="feature_image" />
        </section>
        <section>
          <img src={feature2} alt="feature_image" />
        </section>
        <section>
          <img src={feature3} alt="feature_image" />
        </section>
        <section>
          <img src={feature4} alt="feature_image" />
        </section>
      </section>
      <p>
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
        محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
        نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی
        برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است
        که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد
        افراد روی متن های موجود تمرکز کنند
      </p>
      <Link to="/booking">رزرو کردن</Link>
    </section>
  );
}
