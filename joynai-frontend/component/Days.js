import styles from "./Days.module.css";
import Vertical from "./Vertical";

const Days = () => {
  return (
    <>
      <div className={styles.days}>
        <div className={styles.days_top}>
          <div className={styles.day_0}>Start </div>
          <div className={styles.line_1}></div>
          <div className={styles.day_0}>Day 28</div>
        </div>
      </div>
    </>
  );
};

export default Days;
