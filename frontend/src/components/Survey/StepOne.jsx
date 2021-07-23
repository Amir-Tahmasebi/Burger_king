import { useState } from "react";
import StepProgressBar from "../Progress/StepProgressBar";
import { useSurveyDispatcher } from "./context/context-survey";
import { addStepOne } from "./context/surveySlice";

export default function StepOne() {
  const [site, setSite] = useState(50);
  const [contentProduction, setContentProduction] = useState(50);
  const [support, setSupport] = useState(50);
  const data = { site, contentProduction, support };
  const dispatch = useSurveyDispatcher();

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(addStepOne(data));
  };

  return (
    <section className="step-one">
      <StepProgressBar
        displacementPercent={setSite}
        question="آیا از خدمات سایت ما راضی هستید ؟"
      />
      <StepProgressBar
        displacementPercent={setContentProduction}
        question="آیا از تولید محتوا سایت ما راضی هستید ؟"
      />
      <StepProgressBar
        displacementPercent={setSupport}
        question="بنظرتون خدمات پشتیبانی سایت چطور ؟"
      />
      <section className="step-one-btn">
        <button onClick={handleSubmit}>بعدی</button>
      </section>
    </section>
  );
}
