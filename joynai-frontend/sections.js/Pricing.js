import SimpleBlockContent from "../utils/blockBuilder";
import styles from "./Pricing.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useState } from "react";
import priceCalculator from "../utils/priceCalculator";
import CTA from "../component/CTA";
import urlFor from "../utils/imageBuilder";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
const Pricing = ({ props }) => {
  const {
    text,
    subheading,
    heading,
    subheadingtext,
    ctas,
    icons,
    plan,
    price,
    $WM,
    WF,
    boepdInput,
    wellsInput,
  } = props;
  const [wells, setWells] = useState("");
  const [BOE, setBOE] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [yearly, setYearly] = useState(true);
  const [route, setRoute] = useState();
  const calc = useRef();
  useEffect(() => {
    yearly && setTotalPrice(Math.floor(priceCalculator($WM, WF, +wells, +BOE)));

    !yearly &&
      setTotalPrice(Math.floor(priceCalculator($WM, WF, +wells, +BOE) * 1.2));
  }, [wells, BOE, yearly]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const router = useRouter();

  useEffect(() => {
    router.asPath.includes("#JOYN-calculator") && calc.current.scrollIntoView();
  }, []);

  return (
    <>
      <div
        ref={calc}
        id={`JOYN-calculator`}
        className={styles.pricing__content}
      >
        <div className={styles.pricing__leftContent}>
          <SimpleBlockContent blocks={text} />
          <div className={styles.subheading}>
            <SimpleBlockContent blocks={subheading} />
          </div>
        </div>
        {/* 
      <div className={styles.pricing__top}>
        <SimpleBlockContent blocks={heading} />
        <div className={styles.subheadingtext}>
          <SimpleBlockContent blocks={subheadingtext} />
        </div>
      </div> */}

        <div className={styles.pricing__factors}>
          <div className={styles.well__content}>
            <SimpleBlockContent blocks={wellsInput} />
            <div className={styles.pricing} style={{ position: "relative" }}>
              <img src={urlFor(icons[0])} />
              <input
                className={styles.pricing__well}
                value={wells}
                type="number"
                placeholder={0}
                onChange={(e) => setWells(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.boe__content}>
            <SimpleBlockContent blocks={boepdInput} />
            <div className={styles.boepd} style={{ position: "relative" }}>
              <img src={urlFor(icons[1])} />
              <input
                className={styles.pricing__BOE}
                type="number"
                placeholder={0}
                value={BOE}
                onChange={(e) => {
                  setBOE(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className={styles.subscription__content}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SimpleBlockContent blocks={plan[0]} />
            <div className={styles.btnPlan}>
              <div style={{ width: "40%" }}>
                <Button
                  style={{
                    marginBottom: "30px",
                    backgroundColor: !yearly
                      ? "rgba(255, 217, 74, 0.5)"
                      : "rgba(255, 255, 255, 0.5)",
                  }}
                  variant="warning"
                  size="lg"
                  onClick={() => {
                    setYearly(false);
                  }}
                >
                  Monthly
                </Button>
              </div>
              <div style={{ width: "40%" }}>
                <Button
                  variant="warning"
                  style={{
                    backgroundColor: yearly
                      ? "rgba(255, 217, 74, 0.5)"
                      : "rgba(255, 255, 255, 0.5)",

                    color: yearly ? "black" : "#bcbcbc",
                  }}
                  size="lg"
                  onClick={() => {
                    setYearly(true);
                  }}
                >
                  Yearly
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.subscription}>
            <SimpleBlockContent blocks={price[0]} />
            <div className={styles.total}>
              ${totalPrice > 0 && numberWithCommas(totalPrice)} per month.
            </div>
          </div>
          {/* <div className={styles.cta__mobile}>
            <CTA text={ctas[0].title} />
          </div> */}
          <div className={styles.cta__desktop}>
            <CTA text={ctas[0].title} />
          </div>
        </div>
        {/* <div className={styles.cta__desktop}>
        <CTA text={ctas[1].title} color="#00cfbb" />
      </div> */}
      </div>
    </>
  );
};

export default Pricing;
