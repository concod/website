import styles from "./Vertical.module.css";
const Vertical = ({ value }) => {
  return (
    <div className={styles.line_v}>
      <div className={styles.line_2}></div>
      <div className={styles.content}>{value}</div>
      <div className={styles.oval}></div>
    </div>
  );
};

export default Vertical;
