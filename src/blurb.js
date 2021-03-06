import React from "react";

const ratioFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const costFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});
const blurb = props => {
  const { tuition = "0" } = props;
  return (
    <div>
      {" "}
      {tuition === "0" || props.tuitionRatio === null ? (
        <p>This institution did not report financial data in 2016.</p>
      ) : (
        <React.Fragment>
          <p>
            This institution spends{" "}
            <span className="cost">
              {ratioFormatter.format(props.tuitionRatio)}
            </span>{" "}
            on instruction for every dollar it collects in tuition.
          </p>
          <p>
            This is a {props.schoolType} and the tuition collected per full-time
            student or equivalent is{" "}
            <span className="cost">{costFormatter.format(props.tuition)}</span>.
          </p>
        </React.Fragment>
      )}
      <h2>How does this school stack up?</h2>
      <p>
        The average public institution spends $1.42 on instruction for every
        dollar collected in tuition.
      </p>
      <p>
        The average private nonprofit institution spends $0.84 on instruction
        for every dollar collected in tuition.
      </p>
      <p>
        The average for-profit institution spends $0.29 on instruction for every
        dollar collected in tuition.
      </p>
      {props.additionalInformation && (
        <div>
          <h2>Additional information provided by the institution</h2>
          <p>{props.additionalInformation}</p>
        </div>
      )}
    </div>
  );
};

export default blurb;
