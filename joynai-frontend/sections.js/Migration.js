import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import CTA from "../component/CTA";
import Days from "../component/Days";
import MigrationCard from "../component/MigrationCard";
import Vertical from "../component/Vertical";
import SimpleBlockContent from "../utils/blockBuilder";

import styles from "./Migration.module.css";

const Migration = ({ props }) => {
  const { card1, card2, card3, heading, Subheading, ctas, icons } = props;

  const migration = useRef();
  const router = useRouter();
  useEffect(() => {
    router.asPath.includes("#Data-migration") &&
      migration.current.scrollIntoView();
  }, []);
  return (
    <div ref={migration} id="Data-migration" className={styles.migration__bg}>
      <div className={styles.migration__heading}>
        <SimpleBlockContent blocks={heading} />
        <span
          className={styles.migration__sub}
          style={{ fontSize: "25px", fontFamily: "Gustanlp" }}
        >
          <SimpleBlockContent blocks={Subheading[0]} />
        </span>
        <span style={{ fontSize: "16px" }}>
          <SimpleBlockContent blocks={Subheading[1]} />
        </span>
        <div style={{ padding: "20px 0" }}>
          <CTA text={ctas[0].title} color="#7a90dc" />
        </div>
      </div>
      <div
        className={styles.card}
        style={{ width: "80%", margin: "auto", paddingTop: "20px" }}
      >
        <Days />
        <div className={styles.vertical}>
          <Vertical value={"14 Days"} />
          <Vertical value={"7 Days"} />
          <Vertical value={"7 Days"} />
        </div>
        <div className={styles.migration__cards}>
          <MigrationCard icons={icons[0]} card={card1} slice={1} />
          <MigrationCard icons={icons[1]} card={card2} slice={2} />
          <MigrationCard icons={icons[2]} card={card3} slice={3} />
        </div>
      </div>

      <div
        className={styles.mobile}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <div className={styles.day}>Start</div>
        <div className={styles.content}>14 Days</div>
        <div className={styles.line_1}> </div>
        <MigrationCard icons={icons[0]} card={card1} slice={1} />
        <div className={styles.content}>7 days</div>
        <MigrationCard icons={icons[1]} card={card2} slice={2} />
        <div className={styles.content}>7 Days</div>
        <MigrationCard icons={icons[2]} card={card3} slice={3} />
        <div className={styles.day}>Day 28</div>
      </div>
    </div>
  );
};

export default Migration;
