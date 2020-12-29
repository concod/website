import { useEffect, useRef, useState } from "react";
import CTA from "../component/CTA";
import SimpleBlockContent from "../utils/blockBuilder";
import styles from "./ProductShowcase.module.css";
import { Button, ButtonGroup } from "react-bootstrap";

import Swipe from "../component/Swipe";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
const ProductShowcase = ({ props }) => {
  const [value, setValue] = useState();
  const [limit, setLimit] = useState();
  const { heading, subheading, ctas, tabs, image } = props;
  const [active, setActive] = useState(tabs[0]);
  const [start, setStart] = useState(false);
  const router = useRouter();

  const walk = useRef();
  useRouter;
  useEffect(() => {
    router.asPath.includes("#Product-walkthrough") &&
      walk.current.scrollIntoView();
  }, []);

  const { ref: slide, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    inView && setStart(true);
  }, [inView]);
  function handleTab(tab) {
    switch (tab) {
      case tabs[0]:
        setValue(0);
        setLimit(9);
        break;
      case tabs[1]:
        setValue(9);
        setLimit(1);

        break;
      case tabs[2]:
        setValue(10);
        setLimit(8);

        break;
      case tabs[3]:
        setValue(18);
        setLimit(4);

        break;
      case tabs[4]:
        setValue(22);
        setLimit(3);

        break;
      case tabs[5]:
        setValue(25);
        setLimit(8);

        break;
      case tabs[6]:
        setValue(33);
        setLimit(8);

        break;
      case tabs[7]:
        setValue(41);
        setLimit(1);

        break;
      case tabs[8]:
        setValue(42);
        setLimit(2);

        break;
      default:
        break;
    }
  }

  return (
    <div ref={walk} id="Product-walkthrough" className={styles.product}>
      <div className={styles.main}>
        <span className={styles.heading}>JOYN Oil & Gas Production</span>

        <SimpleBlockContent blocks={heading} />

        <div
          className={styles.subheading}
          style={{
            fontSize: "16px",
            letterSpacing: ".4px",
            paddingBottom: "20px",
          }}
        >
          <SimpleBlockContent blocks={subheading} />
        </div>
        <div
          style={{
            width: "fit-content",
            margin: "auto",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CTA text={ctas[0].title} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.btn__grp}>
          <ButtonGroup>
            <div ref={slide} className={styles.btns}>
              {tabs.map((tab) => {
                return (
                  <Button
                    // autoFocus={true}
                    className={active == tab ? "active" : ""}
                    onClick={() => {
                      handleTab(tab);
                      setActive(tab);
                    }}
                    style={{
                      backgroundColor: active == tab && "white",
                      color: "black",
                      boxShadow:
                        active == tab && "0 2px 4px 0 rgba(0, 0, 0, 0.18)",
                    }}
                    variant="secondary"
                  >
                    {tab}
                  </Button>
                );
              })}
            </div>
          </ButtonGroup>
        </div>

        {!start && (
          <div className={styles.swipe}>
            {value == 0 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == undefined && (
              <Swipe image={image.slice(0, 9)} auto={start} />
            )}
            {value == 9 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}

            {value == 10 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 18 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 22 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 25 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 33 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 41 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 42 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
          </div>
        )}
        {start && (
          <div className={styles.swipe}>
            {value == 0 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == undefined && (
              <Swipe image={image.slice(0, 9)} auto={start} />
            )}
            {value == 9 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}

            {value == 10 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 18 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 22 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 25 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 33 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 41 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
            {value == 42 && (
              <Swipe image={image.slice(value, value + limit)} auto={start} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
