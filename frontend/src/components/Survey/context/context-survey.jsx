import { useContext, createContext, useReducer } from "react";
import { initState, reducer } from "./surveySlice";

const SurveyStateContext = createContext();
const SurveyDispatcherContext = createContext();

export function useSurveyState() {
  const context = useContext(SurveyStateContext);
  if (!context) {
    throw Error("useSurveyState must be used with a SurveyProvider");
  }
  return context;
}
export function useSurveyDispatcher() {
  const context = useContext(SurveyDispatcherContext);
  if (!context) {
    throw Error("useSurveyDispatcher must be used with a SurveyProvider");
  }
  return context;
}

export function SurveyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <SurveyStateContext.Provider value={state}>
      <SurveyDispatcherContext.Provider value={dispatch}>
        {children}
      </SurveyDispatcherContext.Provider>
    </SurveyStateContext.Provider>
  );
}
