import classes from "./stopwatch.module.css";
import Timebox from "./Timebox";

const Digits = () => {
  return (
    <div className={classes.face}>
      <Timebox time="days" value="d"></Timebox>
      <Timebox time="hours" value="h" />
      <Timebox time="minutes" value="m" />
      <Timebox time="seconds" value="s" />
    </div>
  );
};

export default Digits;
