import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  full_name :Yup.string()
  .required('وارد کردن نام و نام خانوادگی الزامی است') 
  .min(5, 'نام و نام خانوادگی حداقل باید 5 کاراکتر داشته باشد') ,
    email: Yup.string().email('ایمیل وارد شده درست نیست').required("وارد کردن ایمیل الزامی است"),
    password: Yup.string()
    .required('وارد کردن رمز عبور اجباری است') 
    .min(8, 'رمز عبور حداقل باید 8 کاراکتر داشته باشد')
  });