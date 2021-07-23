import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "نام وارد شده صحیح نیست")
    .required("وارد کردن نام اجباری است"),
  email: Yup.string().email().required("وارد کردن ایمیل الزامی است"),
  subject: Yup.string()
    .min(3, "موضوع وارد شده صحیح نیست")
    .required("وارد کردن موضوع اجباری است"),
    message: Yup.string()
    .min(10, "نظر وارد شده صحیح نیست")
    .required("وارد کردن نظر اجباری است"),
});
