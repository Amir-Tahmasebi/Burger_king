import { useEffect } from "react";
import { Formik, Form } from "formik";
import InputText from "./../../../components/Booking/InputText";
import formData from "./data";
import { SignupSchema } from "./signupSchema";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest, userRegister } from "../../../store/auth/authAction";
import { toast, ToastContainer } from "react-toastify";
import "./Register.scss";

export default function Register() {
  const dispatch = useDispatch();
  const { status, message } = useSelector((state) => state.auth);
  const history = useHistory();
  useEffect(() => {
    if (status === 1) {
      toast(message);
      setTimeout(() => {
        history.push("/auth/login");
      }, 1000);
    } else if (status === 0) {
      toast.error(message);
    }
  }, [dispatch, history, message, status]);

  return (
    <section id="register">
      <Formik
        initialValues={{
          full_name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          dispatch(registerRequest());
          dispatch(userRegister(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <section className="wrapper">
              <h1>ثبت نام</h1>
              {formData.map((data) => (
                <InputText
                  {...data}
                  key={data.name}
                  errors={errors}
                  touched={touched}
                />
              ))}

              <button type="submit" onSubmit={(e) => e.preventDefault()}>
                ثبت نام
              </button>
              <p>
                قبلا ثبت نام کردید ؟ <Link to="/auth/login">ورود</Link>
              </p>
            </section>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </section>
  );
}
