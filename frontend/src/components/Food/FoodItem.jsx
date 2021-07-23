import { AiFillAlipayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function FoodItem() {
  return (
    <section className="food-item">
      <AiFillAlipayCircle />
      <h3>برگر</h3>
      <p>
        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
        برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
        (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است
      </p>
      <Link to="/menu">دیدن منو</Link>
    </section>
  );
}
