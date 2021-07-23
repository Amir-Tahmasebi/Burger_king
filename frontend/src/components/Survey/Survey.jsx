import StepOne from "./StepOne";
import "./Survey.scss";
import { useSurveyState } from "./context/context-survey.jsx";
import StepTwo from "./StepTwo";
import SuccessCard from "./SuccessCard";

export default function Survey() {
  const { step } = useSurveyState();
  console.log({ step });

  return (
    <section className="survey-container">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <SuccessCard />}
    </section>
  );
}
