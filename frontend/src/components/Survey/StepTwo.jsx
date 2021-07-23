import { useState } from "react";
import StepProgressBar from "../Progress/StepProgressBar";
import { useSurveyDispatcher } from "./context/context-survey";
import { addStepTwo } from "./context/surveySlice";

export default function StepTwo() {
  const [staff, setStaff] = useState(50);
  const [foods, setFoods] = useState(50);
  const data = { staff, foods };
  const dispatch = useSurveyDispatcher();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStepTwo(data));
  };
  return (
    <section className="step-two">
      <StepProgressBar
        displacementPercent={setStaff}
        question="نظرتون راجب پرسنل چیه ؟"
      />
      <StepProgressBar
        displacementPercent={setFoods}
        question="بنظرتون غذا های ما چطوره ؟"
      />
      <StepProgressBar
        defaultPrecent={true}
        question="این هم نظر ما راجب شماست که تا اینجا تو این نظر سنجی شرکت کردید ممنون از وقتی که گذاشتید ."
      />
      <section className="step-two-btn">
        <button onClick={handleSubmit}>ثبت</button>
      </section>
    </section>
  );
}
