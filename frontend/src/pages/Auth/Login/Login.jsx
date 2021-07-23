import { Formik, Form } from "formik";
import InputText from "./../../../components/Booking/InputText";
import formData from "./data";
import { SignupSchema } from "./signupSchema";
import "./Login.scss";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  userLogin,
  fetchUserCurrentInfo,
} from "../../../store/auth/authAction";
import { useEffect, useLayoutEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loading from "./../../../components/Loading";

export default function Login() {
  const dispatch = useDispatch();
  const { token, loading, status, message } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: "/" } };
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // dispatch(loginRequest());
      dispatch(fetchUserCurrentInfo());
    }
  }, [dispatch]);

  useEffect(() => {
    if (token && status === 1) {
      // toast(message);
      history.replace(from);
    }
    if (status === 0) {
      toast.error(message);
    }
  }, [dispatch, from, history, message, status, token]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section id="login">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { resetForm }) => {
              dispatch(loginRequest());
              dispatch(userLogin(values));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <section className="wrapper">
                  <h1>ورود</h1>
                  {formData.map((data) => (
                    <InputText
                      {...data}
                      key={data.name}
                      errors={errors}
                      touched={touched}
                    />
                  ))}

                  <button type="submit" onSubmit={(e) => e.preventDefault()}>
                    ورود
                  </button>
                  <p>
                    ثبت نام نکرده اید ؟ <Link to="/auth/register">ثبت نام</Link>
                  </p>
                </section>
              </Form>
            )}
          </Formik>
          <ToastContainer/>
        </section>
      )}
    </>
  );
}
