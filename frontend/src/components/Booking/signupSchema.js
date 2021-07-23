import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "نام وارد شده صحیح نیست")
      .required("وارد کردن نام اجباری است"),
    email: Yup.string().email().required("وارد کردن ایمیل الزامی است"),
    phone: Yup.number()
      .typeError("باید شماره تلفن معتبر وارد کنید")
      .positive("شماره تلفن با علامت منفی شروع نمی شود")
      .integer("شماره تلفن نمی تواند شامل علامت اعشار باشد")
      .min(11)
      .required("وارد کردن شماره تلفن اجباری است"),
  });