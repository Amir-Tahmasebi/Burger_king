import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (value.indexOf("@gmail.com") !== -1 && email.length > 10) {
      setError(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.indexOf("@gmail.com") !== -1 && email.length > 10) {
      toast.success("تبریک با موفقیت عضوی از خانواده خبرنامه ما شدید");
      setEmail("");
    } else {
      setError("ایمیل وارد شده نادرست است");
    }
  };
  return (
    <section className="newsletter">
      <h3>خبرنامه</h3>
      <p>
        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
        برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
        (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان
        فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={handleEmail}
          placeholder="پست الکترونیکی"
          type="type"
        />
        <button type="submit">ثبت</button>
      </form>
      {error ? <span className="error">{error}</span> : null}
      <ToastContainer rtl={true}/>
    </section>
  );
}
