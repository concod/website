import { Player, ControlBar } from "video-react";
import SimpleBlockContent from "../utils/blockBuilder";
import styles from "./CustomerExperience.module.css";
import { useRef, useEffect, useState } from "react";
import CTA from "../component/CTA";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

const CustomerExperience = ({ props }) => {
  const { cta, heading, text, url } = props;
  const [mute, unmute] = useState(true);
  const player = useRef();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const customer = useRef();
  const router = useRouter();
  useEffect(() => {
    router.asPath.includes("#Customers") && customer.current.scrollIntoView();
  }, []);
  inView && player.current?.actions.play();
  player.current?.actions && !inView && player.current.actions.pause();

  return (
    <div ref={customer} id="Customers" className={styles.ce__bg}>
      <div className={styles.container}>
        <div className={styles.ce__content}>
          <div className={styles.ce__text}>
            <div className={styles.heading}>
              <SimpleBlockContent blocks={heading} />
            </div>

            <div
              className={styles.subheading}
              style={{
                lineHeight: "1.5",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              <SimpleBlockContent blocks={text} />
            </div>
          </div>
          <div className={styles.cta}>
            <CTA text={cta.title} />
          </div>
        </div>
        <div className={styles.video}>
          <div ref={ref} style={{ width: "100%" }}>
            <Player ref={player} fluid={true} autoplay muted={mute}>
              <source src={url} />
              <ControlBar autoHide={true} />
            </Player>
          </div>
          <div className={styles.btn} style={{ display: "flex" }}>
            <div className={styles.mute} onClick={() => unmute(!mute)}>
              {mute ? <img src="/mute.svg" /> : <img src="/unmute.svg" />}
            </div>
            <div
              className={styles.replay}
              onClick={() => player.current?.actions.replay(300)}
            >
              <img src="/replay.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;
