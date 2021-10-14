import { useState, Fragment, useEffect } from "react";
import classes from "./stopwatch.module.css";

const Timebox = (props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (props.time === "seconds") {
      const timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      let value = "S";
      //
      return () => clearInterval(timer);
    } else if (props.time === "minutes") {
      const timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000 * 60);
      //
      return () => clearInterval(timer);
    } else if (props.time === "hours") {
      const timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000 * 60 * 60);
      //
      return () => clearInterval(timer);
    } else if (props.time === "days") {
      const timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000 * 60 * 60 * 24);
      //
      return () => clearInterval(timer);
    } else {
      return;
    }
  });
  return (
    <Fragment>
      <div className={classes.timebox}>
        {time}
        {props.value}
      </div>
    </Fragment>
  );
};

export default Timebox;
