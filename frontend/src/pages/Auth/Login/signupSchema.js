import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    email: Yup.string().email("ایمیل وارد شده درست نیست").required("وارد کردن ایمیل الزامی است"),
    password: Yup.string()
    .required('وارد کردن رمز عبور اجباری است') 
    .min(8, 'رمز عبور حداقل باید 8 کاراکتر داشته باشد')
  });