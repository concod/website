import BlockContent from "@sanity/block-content-to-react";
import CTA from "../component/CTA";
import urlFor from "../utils/imageBuilder";
import { Player, ControlBar } from "video-react";
import { Button } from "react-bootstrap";
import styles from "./Hero.module.css";
import { useRef, useEffect, useState } from "react";
import BigPlayButton from "video-react/lib/components/BigPlayButton";
import { useRouter } from "next/router";

const color = (props) => {
  return <span style={{ color: props.mark.hex }}>{props.children}</span>;
};
const Hero = ({ props }) => {
  const { ctas, tagline, image, logo, trial, subheading, videourl } = props;
  const player = useRef();

  const [mute, unmute] = useState(true);

  useEffect(() => {
    player.current.actions.play();

    // return () => {
    //   cleanup
    // }
  }, []);

  const router = useRouter();
  const price = useRef();

  const handleLink = () => {
    // console.log("hi");
  };

  return (
    <div id="Dropbox-video" className={styles.hero__bg}>
      <div className={styles.hero__logo}>
        <img
          style={{ borderRight: "5.2px", borderLeft: "5px" }}
          src={urlFor(logo)}
        />
      </div>

      <div className={styles.hero__main}>
        <div className={styles.heading}>
          <BlockContent blocks={tagline} />

          <div className={styles.trial} style={{ fontSize: "3rem" }}>
            <BlockContent blocks={trial} />
          </div>
          <div className={styles.subheading} style={{ padding: "20px 0px" }}>
            <BlockContent blocks={subheading} />
          </div>
          <div className={styles.cta} style={{ paddingTop: "20px" }}>
            <div style={{ width: "fit-content" }} onClick={handleLink}>
              <CTA text={ctas[0].title} />
            </div>
          </div>
        </div>
        <div className={styles.video}>
          <Player fluid={true} ref={player} autoplay muted={mute}>
            <source src={videourl} />
            <BigPlayButton position="center" />
            <ControlBar autoHide={true} />
          </Player>
          <div className={styles.video__btn} style={{ display: "flex" }}>
            <div
              className={styles.replay}
              onClick={() => player.current?.actions.replay(300)}
            >
              <img src="/replay.svg" />
            </div>
            <div className={styles.mute} onClick={() => unmute(!mute)}>
              {mute ? <img src="/mute.svg" /> : <img src="/unmute.svg" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
