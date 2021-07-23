import Layout from "./../../components/Layout";
import SurveyComponent from "./../../components/Survey";
import { SurveyProvider } from "../../components/Survey/context/context-survey.jsx";

export default function Survey() {
  return (
    <SurveyProvider>
      <Layout subTitle="نظرسنجی" title="نظرسنجی">
        <SurveyComponent />
      </Layout>
    </SurveyProvider>
  );
}
