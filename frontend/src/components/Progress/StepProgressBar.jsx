import React, { useLayoutEffect, useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import NumericInput from "./NumericInput.jsx";
import stepsData from "./data";
import "./StepProgressBar.scss";

export default function StepProgressBar({
  question,
  displacementPercent,
  defaultPrecent = false,
}) {
  const [percent, setPercent] = useState(50);
  const [width, setWidth] = useState(null);
  const handlePercent = (percent) => {
    if (percent <= 100 && percent >= 0) {
      setPercent(percent);
      return displacementPercent(percent);
    } else if (percent > 100) {
      setPercent(100);
      return displacementPercent(percent);
    } else if (percent < 0) {
      setPercent(0);
      return displacementPercent(percent);
    }
  };

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const renderSteps = stepsData.map((data) => {
    return (
      <Step key={data.id} transition="scale">
        {({ accomplished }) => (
          <div
            className="imoji"
            style={
              width > 992
                ? {
                    filter: `grayscale(${accomplished ? 0 : 80}%)`,
                    fontSize: accomplished ? " 45px" : "30px",
                  }
                : {
                    filter: `grayscale(${accomplished ? 0 : 80}%)`,
                    fontSize: accomplished ? " 20px" : "15px",
                  }
            }
          >
            {data.imoji}
          </div>
        )}
      </Step>
    );
  });
  return (
    <section className="step-progress-bar ">
      <p className={`question ${defaultPrecent ? "custom-text" : null}`}>
        {question}
      </p>
      <NumericInput
        handlePercent={handlePercent}
        defaultPrecent={defaultPrecent}
      />
      <ProgressBar
        percent={!defaultPrecent ? percent : 100}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        {renderSteps}
      </ProgressBar>
    </section>
  );
}
