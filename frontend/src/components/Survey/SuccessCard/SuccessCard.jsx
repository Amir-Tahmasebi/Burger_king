import "./SuccessCard.scss";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useSurveyState } from "../context/context-survey";
import { useEffect, useState } from "react";
import HttpClient from "./../../../services/HttpClient";
const httpClient = new HttpClient();

export default function SuccessCard() {
  const state = useSurveyState();
  const token = localStorage.getItem("token");
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    const data = { ...state, token };
    httpClient
      .post("/survey", data)
      .then((res) => res.data)
      .then(({ status }) =>
        status === 1 ? setSuccess(true) : setSuccess(false)
      );
  }, [state, token]);
  return (
    <section className="success-card">
      <section>
        <Loader
          type="Circles"
          color={success ? "#719a0a" : "red"}
          height={100}
          width={100}
          timeout={50000}
        />
        {success ? (
          <h2>
            نظر سنجی با موفقیت انجام شد <span>😉</span>
          </h2>
        ) : (
          <h2 className="txt-error">
            نظر سنجی با موفقیت انجام نشد <span>😵</span>
          </h2>
        )}
        <Link to="/">رفتن به صفحه خانه</Link>
      </section>
    </section>
  );
}
