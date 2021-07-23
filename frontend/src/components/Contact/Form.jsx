import { Formik, Form as FormFormik } from "formik";
import InputText from "./InputText";
import { SignupSchema } from "./signupSchema";
import formData from "./form-data";
import TextArea from "./TextArea";
import { toast, ToastContainer } from "react-toastify";

export default function Form() {
  return (
    <section className="form-container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          toast.success(
            "دیدگاه شما به درستی ثبت شد و تا ساعاتی دیگر مورد بررسی قرار می گیرد و پاسخ آن به ایمیل شما ارسال میشود"
          );
          resetForm()
        }}
      >
        {({ errors, touched }) => (
          <FormFormik>
            {formData.map((data) => (
              <InputText
                {...data}
                key={data.name}
                errors={errors}
                touched={touched}
              />
            ))}

            <section className="wrapper-field wrapper-field-textarea">
              <TextArea
                name="message"
                placeholder="دیدگاه خود را وارد کنید"
                rows="6"
              />
            </section>

            <button type="submit" onSubmit={(e) => e.preventDefault()}>
              رزرو کردن
            </button>
          </FormFormik>
        )}
      </Formik>
      <ToastContainer rtl={true}/>
    </section>
  );
}
