import { Formik, Form as FormFormik } from "formik";
import { useEffect, useState } from "react";
import InputText from "./InputText";
import { SignupSchema } from "./signupSchema";
import formData from "./form-data";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import HttpClient from "./../../services/HttpClient";

const httpClient = new HttpClient();

export default function Form() {
  const [guest, setGuest] = useState("تعداد میهمانان");
  const [date, setDate] = useState("زمان رزرو");
  const [disabled, setDisabled] = useState(false);
  const { status, token } = useSelector((state) => state.auth);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (status !== 1 && !token) {
      setDisabled(true);
    } else if (status === 1 && token) {
      setDisabled(false);
    }
  }, [status, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status !== 1 && !token) {
      history.replace({
        pathname: "/auth/login",
        state: { from: location },
      });
    }
  };

  return (
    <section className="form-container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          if (
            status === 1 &&
            token &&
            guest !== "تعداد میهمانان" &&
            date !== "زمان رزرو"
          ) {
            const number = Math.floor(Math.random() * 100);
            values = { ...values, guest, date, number };
            const response = await httpClient.post("booking", values);
            const { status, message, success } = response.data;
            if (status === 1 && success) {
              toast.success(message);
              resetForm();
            } else {
              toast.error(message);
            }
          } else {
            alert("حتما زمان ورود و تعداد میهمانان را انتخاب نمایید");
          }
        }}
      >
        {({ errors, touched }) => (
          <FormFormik>
            {formData.map((data) => (
              <InputText
                {...data}
                disabled={disabled}
                key={data.name}
                errors={errors}
                touched={touched}
              />
            ))}
            <section className="wrapper-field">
              <select
                name="guest"
                onChange={(e) => setGuest(e.target.value)}
                disabled={disabled}
              >
                <option value="تعداد میهمانان">تعداد میهمانان</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </section>

            <section className="wrapper-field">
              <select
                name="date"
                onChange={(e) => setDate(e.target.value)}
                disabled={disabled}
              >
                <option value="زمان رزرو">زمان رزرو</option>
                <option value="today">امروز</option>
                <option value="tomorrow">فردا</option>
              </select>
            </section>

            <button
              type="submit"
              onClick={status !== 1 && !token ? handleSubmit : null}
              onSubmit={(e) => e.preventDefault()}
            >
              رزرو کردن
            </button>
          </FormFormik>
        )}
      </Formik>
      <ToastContainer rtl={true}/>
    </section>
  );
}
